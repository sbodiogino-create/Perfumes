import Link from "next/link";
import PerfumeBottle from "./PerfumeBottle";
import { formatPrice, type Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/producto/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-card transition hover:border-violet-soft"
    >
      <div className="relative flex items-center justify-center bg-ink-soft py-8">
        {product.tag && (
          <span className="absolute left-4 top-4 rounded-full bg-lime px-3 py-1 text-xs font-bold text-ink">
            {product.tag}
          </span>
        )}
        <PerfumeBottle
          liquidColor={product.liquidColor}
          name={product.name}
          className="h-48 w-auto transition duration-300 group-hover:-translate-y-1"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 p-5">
        <p className="text-xs uppercase tracking-wide text-muted">{product.family}</p>
        <h3 className="font-display text-lg font-bold">{product.name}</h3>
        <p className="text-sm text-bone-dim line-clamp-2">{product.shortDescription}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm text-muted">{product.size}</span>
          <span className="font-display text-lg font-bold text-lime">
            {formatPrice(product.price)}
          </span>
        </div>
      </div>
    </Link>
  );
}
