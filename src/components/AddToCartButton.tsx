"use client";

import { useState } from "react";
import { useCartStore } from "@/lib/cart-store";

export default function AddToCartButton({ slug }: { slug: string }) {
  const addItem = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(slug, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="flex items-center rounded-full border border-line">
        <button
          type="button"
          className="px-4 py-2 text-lg text-bone-dim hover:text-lime"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          aria-label="Restar cantidad"
        >
          −
        </button>
        <span className="w-8 text-center font-medium">{quantity}</span>
        <button
          type="button"
          className="px-4 py-2 text-lg text-bone-dim hover:text-lime"
          onClick={() => setQuantity((q) => q + 1)}
          aria-label="Sumar cantidad"
        >
          +
        </button>
      </div>
      <button
        type="button"
        onClick={handleAdd}
        className="flex-1 rounded-full bg-lime px-6 py-3 text-center font-display text-sm font-bold text-ink transition hover:bg-violet-soft hover:text-ink sm:flex-none"
      >
        {added ? "¡Agregado! ✓" : "Agregar al carrito"}
      </button>
    </div>
  );
}
