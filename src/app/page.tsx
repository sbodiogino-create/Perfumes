import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import PerfumeBottle from "@/components/PerfumeBottle";
import { getBrands, getProductBySlug, products } from "@/lib/products";

const HERO_SLUGS = ["khamrah", "ana-abiyedh-rouge"];
const FEATURED_SLUGS = [
  "khamrah",
  "ana-abiyedh-rouge",
  "club-de-nuit-intense-man",
  "bharara-king",
];

export default function Home() {
  const hero = HERO_SLUGS.map(getProductBySlug).filter((p) => p !== undefined);
  const featured = FEATURED_SLUGS.map(getProductBySlug).filter((p) => p !== undefined);
  const brands = getBrands();

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-violet/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-lime/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs font-medium text-lime">
              <span className="h-2 w-2 animate-pulse-glow rounded-full bg-lime" />
              Catálogo curado · {products.length} fragancias
            </p>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Sentí tu
              <br />
              <span className="text-violet-soft">pulso.</span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-bone-dim">
              PULSO cura los perfumes árabes y de nicho que realmente se están
              volviendo virales — probamos, comparamos precios y elegimos solo
              los que valen la pena. Vos no tenés que buscar entre cientos.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/tienda"
                className="rounded-full bg-lime px-7 py-3 font-display text-sm font-bold text-ink transition hover:bg-violet-soft"
              >
                Ver la tienda
              </Link>
              <Link
                href="/nosotros"
                className="rounded-full border border-line px-7 py-3 font-display text-sm font-bold text-bone transition hover:border-lime hover:text-lime"
              >
                Nuestra historia
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            {hero.map((product) => (
              <PerfumeBottle
                key={product.slug}
                liquidColor={product.liquidColor}
                name={product.name}
                className="h-72 w-auto -rotate-3 drop-shadow-2xl first:rotate-3"
              />
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="border-b border-line bg-ink-soft">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:grid-cols-3">
          {[
            { title: "Curado, no adivinado", desc: `Cruzamos tendencias virales con ${brands.length} marcas del catálogo.` },
            { title: "Pago protegido", desc: "Tarjetas, transferencia y Mercado Pago." },
            { title: "Envíos a todo el país", desc: "Correo Argentino y Andreani." },
          ].map((item) => (
            <div key={item.title}>
              <p className="font-display font-bold text-lime">{item.title}</p>
              <p className="mt-1 text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl font-bold">Los más elegidos</h2>
          <Link href="/tienda" className="text-sm font-medium text-lime hover:underline">
            Ver todo →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* BRAND STRIP */}
      <section className="border-t border-line bg-gradient-to-r from-violet/20 via-ink to-lime/10">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            No adivinamos qué comprar.
            <br />
            Lo confirmamos antes.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-bone-dim">
            Cada fragancia del catálogo llegó acá porque ya demostró demanda real
            en TikTok, Instagram o MercadoLibre — no porque nos pareció linda la botella.
          </p>
          <Link
            href="/tienda"
            className="mt-8 inline-block rounded-full bg-lime px-8 py-3 font-display text-sm font-bold text-ink transition hover:bg-violet-soft"
          >
            Descubrí la colección
          </Link>
        </div>
      </section>
    </div>
  );
}
