import { notFound } from "next/navigation";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import AddToCartButton from "@/components/AddToCartButton";
import ProductCard from "@/components/ProductCard";
import { formatPrice, getProductBySlug, products } from "@/lib/products";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — PULSO Perfumes`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.slug !== product.slug)
    .sort((a, b) => Number(b.brand === product.brand) - Number(a.brand === product.brand))
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <Link href="/tienda" className="text-sm text-muted hover:text-lime">
        ← Volver a la tienda
      </Link>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <div className="flex items-center justify-center rounded-2xl border border-line bg-card py-16">
          <ProductImage product={product} className="h-80 w-auto" />
        </div>

        <div>
          {product.tag && (
            <span className="mb-3 inline-block rounded-full bg-lime px-3 py-1 text-xs font-bold text-ink">
              {product.tag === "Viral" ? "🔥" : "📈 Tendencia"}
            </span>
          )}
          <p className="text-sm uppercase tracking-wide text-muted">
            {product.brand} · {product.family}
          </p>
          <h1 className="font-display text-4xl font-bold">{product.name}</h1>
          {product.similarTo && (
            <p className="mt-1 text-sm font-medium text-violet-soft">{product.similarTo}</p>
          )}
          <p className="mt-4 text-bone-dim">{product.description}</p>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-display text-3xl font-bold text-lime">
              {formatPrice(product.price)}
            </span>
            <span className="text-sm text-muted">
              {product.size} · Eau de Parfum · {product.gender}
            </span>
          </div>

          <div className="mt-6">
            <AddToCartButton slug={product.slug} />
          </div>

          <div className="mt-10 grid gap-4 border-t border-line pt-8 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase text-muted">Salida</p>
              <p className="mt-1 text-sm text-bone-dim">{product.notes.salida.join(", ")}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-muted">Corazón</p>
              <p className="mt-1 text-sm text-bone-dim">{product.notes.corazon.join(", ")}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-muted">Fondo</p>
              <p className="mt-1 text-sm text-bone-dim">{product.notes.fondo.join(", ")}</p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="mb-6 font-display text-2xl font-bold">También te puede gustar</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
