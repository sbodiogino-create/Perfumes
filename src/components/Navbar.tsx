"use client";

import Link from "next/link";
import { useState } from "react";
import { useCartStore, cartCount } from "@/lib/cart-store";
import { useHasMounted } from "@/lib/use-has-mounted";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/tienda", label: "Tienda" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const items = useCartStore((state) => state.items);
  const mounted = useHasMounted();
  const [menuOpen, setMenuOpen] = useState(false);

  const count = mounted ? cartCount(items) : 0;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight">
          PULSO
          <svg width="28" height="16" viewBox="0 0 28 16" fill="none">
            <path
              d="M0 8H6L9 2L14 14L17 8H28"
              stroke="#D4FF3D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-bone-dim transition hover:text-lime"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/carrito"
            className="relative flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium transition hover:border-lime"
          >
            Carrito
            {count > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-lime px-1 text-xs font-bold text-ink">
                {count}
              </span>
            )}
          </Link>
          <button
            className="text-bone md:hidden"
            aria-label="Abrir menú"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-line px-5 py-3 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded px-2 py-2 text-sm font-medium text-bone-dim hover:bg-ink-soft hover:text-lime"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
