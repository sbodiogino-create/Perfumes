import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { categories, getBrandsByCategory, products, type Category } from "@/lib/products";

export const metadata = {
  title: "Tienda — PULSO Perfumes",
};

type SearchParams = Promise<{ cat?: string; tag?: string; brand?: string }>;

function buildHref(params: { cat?: string; tag?: string; brand?: string }) {
  const query = new URLSearchParams();
  if (params.cat) query.set("cat", params.cat);
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
  const params = await searchParams;
  const category: Category = params.cat === "Diseñador" ? "Diseñador" : "Árabes";
  const { tag, brand } = params;

  const brandsInCategory = getBrandsByCategory(category);
  const filtered = products.filter(
    (p) =>
      p.category === category &&
      (!tag || p.tag === tag) &&
      (!brand || p.brand === brand)
  );
  const tags = ["Viral", "Tendencia"] as const;

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <div className="mb-8">
        <h1 className="font-display text-4xl font-bold">Tienda</h1>
        <p className="mt-2 text-bone-dim">
          Perfumes árabes y de diseñador a los mejores precios.
        </p>
      </div>

      {/* NIVEL 1: categoría */}
      <div className="mb-6 flex gap-2 border-b border-line">
        {categories.map((c) => (
          <a
            key={c}
            href={buildHref({ cat: c })}
            className={`-mb-px border-b-2 px-4 py-3 font-display text-sm font-bold transition ${
              category === c
                ? "border-lime text-lime"
                : "border-transparent text-bone-dim hover:text-bone"
            }`}
          >
            {c === "Árabes" ? "Árabes" : "Diseñador"}
          </a>
        ))}
      </div>

      {category === "Diseñador" && brandsInCategory.length === 0 ? (
        <div className="rounded-2xl border border-line bg-card p-10 text-center">
          <p className="font-display text-xl font-bold">
            Todavía no sumamos perfumes de diseñador
          </p>
          <p className="mx-auto mt-3 max-w-md text-bone-dim">
            Los originales de alta gama (Baccarat Rouge 540, Good Girl, Born in
            Roma) inmovilizan mucho capital por unidad, así que los dejamos para
            una fase 2 del catálogo. Mientras tanto, nuestros dupes árabes cubren
            esa misma demanda a una fracción del precio.
          </p>
          <Link
            href="/producto/ana-abiyedh-rouge"
            className="mt-6 inline-block rounded-full bg-lime px-6 py-3 font-display text-sm font-bold text-ink transition hover:bg-violet-soft"
          >
            Ver el dupe de Baccarat Rouge 540 →
          </Link>
        </div>
      ) : (
        <>
          {/* NIVEL 2: marca (dentro de la categoría elegida) */}
          <div className="mb-4 flex flex-wrap gap-2">
            <a
              href={buildHref({ cat: category, tag })}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                !brand
                  ? "border-violet-soft text-violet-soft"
                  : "border-line text-muted hover:border-violet-soft hover:text-violet-soft"
              }`}
            >
              Todas las marcas
            </a>
            {brandsInCategory.map((b) => (
              <a
                key={b}
                href={buildHref({ cat: category, tag, brand: b })}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                  brand === b
                    ? "border-violet-soft text-violet-soft"
                    : "border-line text-muted hover:border-violet-soft hover:text-violet-soft"
                }`}
              >
                {b}
              </a>
            ))}
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            <a
              href={buildHref({ cat: category, brand })}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                !tag ? "border-lime text-lime" : "border-line text-bone-dim hover:border-lime hover:text-lime"
              }`}
            >
              Todas
            </a>
            {tags.map((t) => (
              <a
                key={t}
                href={buildHref({ cat: category, tag: t, brand })}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  tag === t ? "border-lime text-lime" : "border-line text-bone-dim hover:border-lime hover:text-lime"
                }`}
              >
                {t === "Viral" ? "🔥" : "📈 Tendencia"}
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
        </>
      )}
    </div>
  );
}
