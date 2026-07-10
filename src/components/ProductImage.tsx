"use client";

import { useState } from "react";
import PerfumeBottle from "./PerfumeBottle";
import type { Product } from "@/lib/products";

export default function ProductImage({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!product.image || failed) {
    return (
      <PerfumeBottle
        liquidColor={product.liquidColor}
        name={product.name}
        className={className}
      />
    );
  }

  return (
    <div
      className={`${className ?? ""} flex aspect-[3/4] items-center justify-center rounded-2xl bg-white p-2`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- foto de producto en public/, tamaños variables según contexto */}
      <img
        src={product.image}
        alt={`Foto de ${product.name}`}
        className="h-full w-full object-contain"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
