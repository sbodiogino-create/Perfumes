"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useCartStore, cartTotal } from "@/lib/cart-store";
import { formatPrice, getProductBySlug } from "@/lib/products";
import { generateOrderId } from "@/lib/order";
import { useHasMounted } from "@/lib/use-has-mounted";

const SHIPPING_COST = 4500;

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items);
  const clear = useCartStore((state) => state.clear);
  const router = useRouter();
  const mounted = useHasMounted();
  const [paymentMethod, setPaymentMethod] = useState<"mercadopago" | "transferencia">(
    "mercadopago"
  );
  const [submitting, setSubmitting] = useState(false);

  if (!mounted) return null;

  const rows = items
    .map((item) => ({ item, product: getProductBySlug(item.slug) }))
    .filter((row) => row.product);
  const subtotal = cartTotal(items);
  const total = subtotal + (rows.length ? SHIPPING_COST : 0);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (rows.length === 0) return;
    setSubmitting(true);

    const orderId = generateOrderId();
    const order = {
      orderId,
      items: rows.map(({ item, product }) => ({
        name: product!.name,
        quantity: item.quantity,
        price: product!.price,
      })),
      subtotal,
      shipping: SHIPPING_COST,
      total,
      paymentMethod,
    };

    sessionStorage.setItem("pulso-last-order", JSON.stringify(order));

    setTimeout(() => {
      clear();
      router.push("/checkout/confirmacion");
    }, 900);
  }

  if (rows.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="font-display text-3xl font-bold">No hay nada para pagar</h1>
        <p className="mt-3 text-bone-dim">Agregá productos a tu carrito antes de finalizar la compra.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <h1 className="font-display text-4xl font-bold">Checkout</h1>
      <p className="mt-2 text-sm text-muted">
        Esto es una simulación de compra. No se procesa ningún pago real todavía —
        el botón queda listo para conectar Mercado Pago.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-10 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl border border-line bg-card p-6">
            <p className="font-display font-bold">Datos de envío</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <input required placeholder="Nombre" className="rounded-lg border border-line bg-ink-soft px-4 py-3 outline-none focus:border-lime" />
              <input required placeholder="Apellido" className="rounded-lg border border-line bg-ink-soft px-4 py-3 outline-none focus:border-lime" />
              <input required type="email" placeholder="Email" className="rounded-lg border border-line bg-ink-soft px-4 py-3 outline-none focus:border-lime sm:col-span-2" />
              <input required placeholder="Dirección" className="rounded-lg border border-line bg-ink-soft px-4 py-3 outline-none focus:border-lime sm:col-span-2" />
              <input required placeholder="Ciudad" className="rounded-lg border border-line bg-ink-soft px-4 py-3 outline-none focus:border-lime" />
              <input required placeholder="Código postal" className="rounded-lg border border-line bg-ink-soft px-4 py-3 outline-none focus:border-lime" />
              <input required placeholder="Provincia" className="rounded-lg border border-line bg-ink-soft px-4 py-3 outline-none focus:border-lime" />
              <input required placeholder="Teléfono" className="rounded-lg border border-line bg-ink-soft px-4 py-3 outline-none focus:border-lime" />
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-card p-6">
            <p className="font-display font-bold">Método de pago</p>
            <div className="mt-4 space-y-3">
              <label className="flex items-center gap-3 rounded-lg border border-line px-4 py-3 has-[:checked]:border-lime">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "mercadopago"}
                  onChange={() => setPaymentMethod("mercadopago")}
                />
                Mercado Pago (tarjeta, cuotas, dinero en cuenta)
              </label>
              <label className="flex items-center gap-3 rounded-lg border border-line px-4 py-3 has-[:checked]:border-lime">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "transferencia"}
                  onChange={() => setPaymentMethod("transferencia")}
                />
                Transferencia bancaria
              </label>
            </div>
          </div>
        </div>

        <div className="h-fit rounded-2xl border border-line bg-card p-6">
          <p className="font-display text-lg font-bold">Tu pedido</p>
          <div className="mt-4 space-y-2">
            {rows.map(({ item, product }) => (
              <div key={item.slug} className="flex justify-between text-sm text-bone-dim">
                <span>{product!.name} × {item.quantity}</span>
                <span>{formatPrice(product!.price * item.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between border-t border-line pt-4 text-sm text-bone-dim">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="mt-1 flex justify-between text-sm text-bone-dim">
            <span>Envío</span>
            <span>{formatPrice(SHIPPING_COST)}</span>
          </div>
          <div className="mt-4 flex justify-between border-t border-line pt-4 font-display text-lg font-bold">
            <span>Total</span>
            <span className="text-lime">{formatPrice(total)}</span>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="mt-6 w-full rounded-full bg-lime px-6 py-3 font-display text-sm font-bold text-ink transition hover:bg-violet-soft disabled:opacity-60"
          >
            {submitting ? "Procesando..." : "Confirmar pedido"}
          </button>
        </div>
      </form>
    </div>
  );
}
