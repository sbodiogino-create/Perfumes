import ProductCard from "@/components/ProductCard";
import { getBrands, products } from "@/lib/products";

export const metadata = {
  title: "Tienda — PULSO Perfumes",
};

type SearchParams = Promise<{ tag?: string; brand?: string }>;

function buildHref(params: { tag?: string; brand?: string }) {
  const query = new URLSearchParams();
  if (params.tag) query.set("tag", params.tag);
  if (params.brand) query.set("brand", params.brand);
  const qs = query.toString();
  return qs ? `/tienda?${qs}` : "/tienda";
}

export default async function TiendaPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { tag, brand } = await searchParams;
  const filtered = products.filter(
    (p) => (!tag || p.tag === tag) && (!brand || p.brand === brand)
  );
  const tags = ["Viral", "Tendencia"] as const;
  const brands = getBrands();

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <div className="mb-10">
        <h1 className="font-display text-4xl font-bold">Tienda</h1>
        <p className="mt-2 text-bone-dim">
          {products.length} fragancias curadas de {brands.length} marcas. Eau de
          parfum, alta duración, con la demanda más probada en TikTok e Instagram.
        </p>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <a
          href={buildHref({ brand })}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
            !tag ? "border-lime text-lime" : "border-line text-bone-dim hover:border-lime hover:text-lime"
          }`}
        >
          Todas
        </a>
        {tags.map((t) => (
          <a
            key={t}
            href={buildHref({ tag: t, brand })}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              tag === t ? "border-lime text-lime" : "border-line text-bone-dim hover:border-lime hover:text-lime"
            }`}
          >
            {t === "Viral" ? "🔥 Viral" : "📈 Tendencia"}
          </a>
        ))}
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        <a
          href={buildHref({ tag })}
          className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
            !brand ? "border-violet-soft text-violet-soft" : "border-line text-muted hover:border-violet-soft hover:text-violet-soft"
          }`}
        >
          Todas las marcas
        </a>
        {brands.map((b) => (
          <a
            key={b}
            href={buildHref({ tag, brand: b })}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
              brand === b ? "border-violet-soft text-violet-soft" : "border-line text-muted hover:border-violet-soft hover:text-violet-soft"
            }`}
          >
            {b}
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
