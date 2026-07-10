import { NextRequest, NextResponse } from "next/server";
import { Preference } from "mercadopago";
import { getProductBySlug } from "@/lib/products";
import { generateOrderId } from "@/lib/order";
import { getMercadoPagoClient, isTestCredential } from "@/lib/mercadopago";

const SHIPPING_COST = 4500;

type CheckoutRequestItem = { slug: string; quantity: number };

export async function POST(request: NextRequest) {
  const client = getMercadoPagoClient();
  if (!client) {
    return NextResponse.json(
      { error: "not_configured" },
      { status: 501 }
    );
  }

  const body = (await request.json()) as { items?: CheckoutRequestItem[] };
  const requestedItems = body.items ?? [];

  // Prices are always looked up server-side from the product catalog —
  // never trust unit prices sent by the client.
  const items = requestedItems
    .map(({ slug, quantity }) => {
      const product = getProductBySlug(slug);
      if (!product || !Number.isInteger(quantity) || quantity < 1) return null;
      return {
        id: product.slug,
        title: `PULSO — ${product.name} (${product.size})`,
        quantity,
        unit_price: product.price,
        currency_id: "ARS",
      };
    })
    .filter((item) => item !== null);

  if (items.length === 0) {
    return NextResponse.json({ error: "empty_cart" }, { status: 400 });
  }

  items.push({
    id: "envio",
    title: "Envío",
    quantity: 1,
    unit_price: SHIPPING_COST,
    currency_id: "ARS",
  });

  const orderId = generateOrderId();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? request.nextUrl.origin;

  try {
    const preference = await new Preference(client).create({
      body: {
        items,
        external_reference: orderId,
        back_urls: {
          success: `${siteUrl}/checkout/confirmacion?order=${orderId}`,
          failure: `${siteUrl}/checkout?status=failure`,
          pending: `${siteUrl}/checkout?status=pending`,
        },
        auto_return: "approved",
      },
    });

    const checkoutUrl = isTestCredential()
      ? preference.sandbox_init_point
      : preference.init_point;

    return NextResponse.json({ orderId, checkoutUrl });
  } catch (error) {
    console.error("Error creando la preferencia de Mercado Pago", error);
    return NextResponse.json({ error: "mercadopago_error" }, { status: 502 });
  }
}
