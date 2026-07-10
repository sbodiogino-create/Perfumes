import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export const metadata = {
  title: "Tienda — PULSO Perfumes",
};

type SearchParams = Promise<{ tag?: string }>;

export default async function TiendaPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { tag } = await searchParams;
  const filtered = tag ? products.filter((p) => p.tag === tag) : products;
  const tags = ["Bestseller", "Nuevo", "Edición limitada"] as const;

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <div className="mb-10">
        <h1 className="font-display text-4xl font-bold">Tienda</h1>
        <p className="mt-2 text-bone-dim">
          {products.length} fragancias. Eau de parfum, unisex, hechas para durar.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        <a
          href="/tienda"
          className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
            !tag ? "border-lime text-lime" : "border-line text-bone-dim hover:border-lime hover:text-lime"
          }`}
        >
          Todas
        </a>
        {tags.map((t) => (
          <a
            key={t}
            href={`/tienda?tag=${encodeURIComponent(t)}`}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              tag === t ? "border-lime text-lime" : "border-line text-bone-dim hover:border-lime hover:text-lime"
            }`}
          >
            {t}
          </a>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-muted">No hay productos con ese filtro por ahora.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
