import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import PerfumeBottle from "@/components/PerfumeBottle";
import { products } from "@/lib/products";

export default function Home() {
  const bestsellers = products.filter((p) => p.tag === "Bestseller");
  const featured = products.slice(0, 4);

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
              Nueva colección disponible
            </p>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Sentí tu
              <br />
              <span className="text-violet-soft">pulso.</span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-bone-dim">
              PULSO es perfumería urbana de autor. Fragancias intensas,
              unisex y hechas para la calle, la noche y todo lo que pasa
              entre medio. Envíos a todo el país.
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
            {bestsellers.map((product) => (
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
            { title: "Envíos a todo el país", desc: "Correo Argentino y Andreani." },
            { title: "Pago protegido", desc: "Tarjetas, transferencia y Mercado Pago." },
            { title: "Larga duración", desc: "Concentración eau de parfum en toda la línea." },
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
            No es solo un perfume.
            <br />
            Es tu pulso.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-bone-dim">
            Cada fragancia PULSO está pensada para dejar rastro: en la ropa,
            en la piel y en la memoria de quien te cruza.
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
