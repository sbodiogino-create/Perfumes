import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-4">
        <div>
          <p className="font-display text-xl font-bold">PULSO</p>
          <p className="mt-2 text-sm text-muted">Sentí tu pulso.</p>
          <p className="mt-4 text-xs text-muted">
            Perfumes árabes y de nicho, curados. Buenos Aires, Argentina.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-bone">Tienda</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li><Link href="/tienda" className="hover:text-lime">Todos los perfumes</Link></li>
            <li><Link href="/tienda?tag=Viral" className="hover:text-lime">🔥 Virales</Link></li>
            <li><Link href="/tienda?tag=Tendencia" className="hover:text-lime">📈 Tendencia</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-bone">Marca</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li><Link href="/nosotros" className="hover:text-lime">Nuestra historia</Link></li>
            <li><Link href="/contacto" className="hover:text-lime">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-bone">Seguinos</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Instagram — @pulso.perfumes</li>
            <li>TikTok — @pulso.perfumes</li>
            <li>WhatsApp — Consultas y ventas</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line px-5 py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} PULSO Perfumes. Todos los derechos reservados.
      </div>
    </footer>
  );
}
