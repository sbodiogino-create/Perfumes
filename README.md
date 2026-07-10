# PULSO — E-commerce de perfumes

Sitio de e-commerce para **PULSO**, marca de perfumería urbana de autor (unisex, Argentina). Construido con Next.js (App Router), TypeScript, Tailwind CSS y Zustand.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** con paleta de marca (`src/app/globals.css`)
- **Zustand** para el estado del carrito (persistido en `localStorage`)
- Imágenes de producto generadas como SVG (sin fotos reales todavía — ver más abajo)

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

Otros comandos:

```bash
npm run build   # build de producción
npm run start   # sirve el build
npm run lint    # lint del proyecto
```

## Estructura

```
src/
  app/
    page.tsx                 # Home
    tienda/                  # Catálogo con filtros
    producto/[slug]/         # Detalle de producto
    carrito/                 # Carrito
    checkout/                # Checkout simulado + confirmación
    nosotros/                # Historia de marca
    contacto/                # Formulario de contacto
  components/                # Navbar, Footer, ProductCard, PerfumeBottle, etc.
  lib/
    products.ts               # Catálogo de productos (placeholder)
    cart-store.ts              # Estado global del carrito (Zustand)
    order.ts                   # Generación de ID de pedido
marketing/                    # Flyers listos para Instagram/impresión
MARKETING.md                  # Plan de publicidad, contenido y lanzamiento
```

## Estado actual — qué es real y qué es placeholder

- **Catálogo:** 8 fragancias ficticias con nombres, notas y precios de referencia en `src/lib/products.ts`. Reemplazar por el catálogo real cuando esté definido.
- **Imágenes de producto:** ilustraciones SVG generadas por código (no hay fotos reales todavía).
- **Checkout:** el flujo completo funciona (carrito → datos de envío → confirmación), pero **no procesa pagos reales**. Está preparado para conectar Mercado Pago Checkout Pro.
- **Formulario de contacto:** no envía email todavía, solo muestra confirmación en pantalla.

Ver la sección "Próximos pasos técnicos" en [`MARKETING.md`](./MARKETING.md) para el detalle de qué falta conectar antes de lanzar en producción.

## Identidad de marca

- **Nombre:** PULSO — **Tagline:** "Sentí tu pulso."
- **Colores:** grafito `#0B0B0F`, violeta eléctrico `#8B2FFF`, lima ácido `#D4FF3D`, hueso `#F4F2EC`.
- **Tipografías:** Space Grotesk (títulos) + Inter (texto).

## Marketing

En `marketing/` hay 3 piezas listas para usar:
- `flyer-instagram-post.png` — post cuadrado de lanzamiento
- `flyer-instagram-story.png` — story de producto destacado
- `flyer-imprimible-a5.png` — flyer para imprimir/repartir

El plan completo de lanzamiento, ideas de anuncios y calendario de contenido está en [`MARKETING.md`](./MARKETING.md).
