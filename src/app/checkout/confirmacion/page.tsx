"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { formatPrice } from "@/lib/products";

type Order = {
  orderId: string;
  items: { name: string; quantity: number; price: number }[];
  subtotal: number;
  shipping: number;
  total: number;
  paymentMethod: string;
};

const emptySubscribe = () => () => {};

function getOrderSnapshot(): string | null {
  return sessionStorage.getItem("pulso-last-order");
}

function getServerOrderSnapshot(): string | null {
  return null;
}

export default function ConfirmacionPage() {
  const raw = useSyncExternalStore(
    emptySubscribe,
    getOrderSnapshot,
    getServerOrderSnapshot
  );
  const order: Order | null = raw ? JSON.parse(raw) : null;

  if (!order) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="font-display text-3xl font-bold">No encontramos ningún pedido</h1>
        <Link href="/tienda" className="mt-8 inline-block rounded-full bg-lime px-7 py-3 font-display text-sm font-bold text-ink">
          Ir a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-5 py-20 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-lime text-2xl font-bold text-ink">
        ✓
      </div>
      <h1 className="mt-6 font-display text-3xl font-bold">¡Pedido confirmado!</h1>
      <p className="mt-2 text-bone-dim">
        Pedido <span className="text-lime">{order.orderId}</span>. Te enviamos un
        email con los detalles (simulado — recordá conectar el email real y
        Mercado Pago antes de lanzar).
      </p>

      <div className="mt-8 rounded-2xl border border-line bg-card p-6 text-left">
        {order.items.map((item) => (
          <div key={item.name} className="flex justify-between py-1 text-sm text-bone-dim">
            <span>{item.name} × {item.quantity}</span>
            <span>{formatPrice(item.price * item.quantity)}</span>
          </div>
        ))}
        <div className="mt-3 flex justify-between border-t border-line pt-3 font-display font-bold">
          <span>Total</span>
          <span className="text-lime">{formatPrice(order.total)}</span>
        </div>
        <p className="mt-3 text-xs text-muted">
          Método de pago: {order.paymentMethod === "mercadopago" ? "Mercado Pago" : "Transferencia bancaria"}
        </p>
      </div>

      <Link
        href="/tienda"
        className="mt-8 inline-block rounded-full bg-lime px-7 py-3 font-display text-sm font-bold text-ink transition hover:bg-violet-soft"
      >
        Seguir comprando
      </Link>
    </div>
  );
}
