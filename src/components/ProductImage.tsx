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
    // eslint-disable-next-line @next/next/no-img-element -- imagen externa hotlinked, dominio variable por producto
    <img
      src={product.image}
      alt={`Foto de ${product.name}`}
      className={`${className ?? ""} object-contain`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
