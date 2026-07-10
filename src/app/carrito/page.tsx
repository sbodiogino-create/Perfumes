"use client";

import Link from "next/link";
import { useCartStore, cartTotal } from "@/lib/cart-store";
import { formatPrice, getProductBySlug } from "@/lib/products";
import PerfumeBottle from "@/components/PerfumeBottle";
import { useHasMounted } from "@/lib/use-has-mounted";

export default function CarritoPage() {
  const items = useCartStore((state) => state.items);
  const setQuantity = useCartStore((state) => state.setQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const mounted = useHasMounted();

  if (!mounted) return null;

  const rows = items
    .map((item) => ({ item, product: getProductBySlug(item.slug) }))
    .filter((row) => row.product);

  if (rows.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="font-display text-3xl font-bold">Tu carrito está vacío</h1>
        <p className="mt-3 text-bone-dim">Todavía no agregaste ninguna fragancia.</p>
        <Link
          href="/tienda"
          className="mt-8 inline-block rounded-full bg-lime px-7 py-3 font-display text-sm font-bold text-ink transition hover:bg-violet-soft"
        >
          Ir a la tienda
        </Link>
      </div>
    );
  }

  const total = cartTotal(items);

  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <h1 className="font-display text-4xl font-bold">Tu carrito</h1>

      <div className="mt-8 grid gap-10 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {rows.map(({ item, product }) => (
            <div
              key={item.slug}
              className="flex items-center gap-4 rounded-2xl border border-line bg-card p-4"
            >
              <PerfumeBottle
                liquidColor={product!.liquidColor}
                name={product!.name}
                className="h-24 w-auto shrink-0"
              />
              <div className="flex-1">
                <p className="font-display font-bold">{product!.name}</p>
                <p className="text-sm text-muted">{product!.size}</p>
                <p className="mt-1 font-medium text-lime">{formatPrice(product!.price)}</p>
              </div>
              <div className="flex items-center rounded-full border border-line">
                <button
                  className="px-3 py-1 text-lg text-bone-dim hover:text-lime"
                  onClick={() => setQuantity(item.slug, item.quantity - 1)}
                  aria-label="Restar"
                >
                  −
                </button>
                <span className="w-6 text-center text-sm">{item.quantity}</span>
                <button
                  className="px-3 py-1 text-lg text-bone-dim hover:text-lime"
                  onClick={() => setQuantity(item.slug, item.quantity + 1)}
                  aria-label="Sumar"
                >
                  +
                </button>
              </div>
              <button
                className="text-sm text-muted hover:text-violet-soft"
                onClick={() => removeItem(item.slug)}
              >
                Quitar
              </button>
            </div>
          ))}
        </div>

        <div className="h-fit rounded-2xl border border-line bg-card p-6">
          <p className="font-display text-lg font-bold">Resumen</p>
          <div className="mt-4 flex justify-between text-sm text-bone-dim">
            <span>Subtotal</span>
            <span>{formatPrice(total)}</span>
          </div>
          <div className="mt-1 flex justify-between text-sm text-bone-dim">
            <span>Envío</span>
            <span>Se calcula en el checkout</span>
          </div>
          <div className="mt-4 flex justify-between border-t border-line pt-4 font-display text-lg font-bold">
            <span>Total</span>
            <span className="text-lime">{formatPrice(total)}</span>
          </div>
          <Link
            href="/checkout"
            className="mt-6 block rounded-full bg-lime px-6 py-3 text-center font-display text-sm font-bold text-ink transition hover:bg-violet-soft"
          >
            Finalizar compra
          </Link>
        </div>
      </div>
    </div>
  );
}
