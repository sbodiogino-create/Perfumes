# PULSO — E-commerce de perfumes

Sitio de e-commerce para **PULSO**, una curaduría de perfumes árabes/dupes virales y algunas piezas premium (Argentina). No fabrica — elige, dentro de un catálogo mayorista de cientos de productos, solo los que ya demostraron demanda real en TikTok/Instagram/MercadoLibre. Construido con Next.js (App Router), TypeScript, Tailwind CSS y Zustand.

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

Para probar pagos reales con Mercado Pago, copiá `.env.example` a `.env.local`
y completá `MERCADOPAGO_ACCESS_TOKEN` (ver sección de Checkout más abajo).

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
    checkout/                # Checkout + confirmación
    api/checkout/route.ts    # Crea la preferencia de pago en Mercado Pago
    nosotros/                # Historia de marca
    contacto/                # Formulario de contacto
  components/                # Navbar, Footer, ProductCard, PerfumeBottle, etc.
  lib/
    products.ts               # Catálogo de productos (placeholder)
    cart-store.ts              # Estado global del carrito (Zustand)
    order.ts                   # Generación de ID de pedido
    mercadopago.ts             # Cliente de Mercado Pago (server-side)
marketing/                    # Flyers listos para Instagram/impresión
MARKETING.md                  # Plan de publicidad, contenido y lanzamiento
```

## Checkout y pagos (Mercado Pago)

El checkout está conectado a **Mercado Pago Checkout Pro**:

1. Al confirmar el pedido con "Mercado Pago" como método de pago, el cliente
   llama a `POST /api/checkout` con los `slug`/cantidad del carrito.
2. El servidor recalcula los precios desde `src/lib/products.ts` (nunca confía
   en precios enviados por el cliente), crea una preferencia con el SDK
   oficial de Mercado Pago y devuelve la URL de pago.
3. El navegador redirige a esa URL para completar el pago real.

Si `MERCADOPAGO_ACCESS_TOKEN` **no** está configurado, el endpoint responde
`501` y el sitio cae automáticamente al flujo simulado (útil para demos o
mientras todavía no se dio de alta la cuenta de Mercado Pago del negocio).

Para probarlo con credenciales de prueba:
1. Creá una app en el [panel de desarrolladores de Mercado Pago](https://www.mercadopago.com.ar/developers/panel/app).
2. Copiá el *access token* de prueba (empieza con `TEST-`) a `MERCADOPAGO_ACCESS_TOKEN` en `.env.local`.
3. Usá una [tarjeta de prueba](https://www.mercadopago.com.ar/developers/es/docs/checkout-pro/additional-content/test-cards) para completar el pago en sandbox.

Cuando el negocio tenga cuenta real de Mercado Pago, solo hay que reemplazar
el access token de prueba por el de producción — no hace falta tocar código.

## Estado actual — qué es real y qué es placeholder

- **Catálogo:** 20 productos **reales** (marca, costo, precio en ARS) curados a partir de `Estrategia_de_Precios__Perfumes.xlsx` — ver el criterio de selección completo en [`MARKETING.md`](./MARKETING.md#2-el-catálogo-de-lanzamiento--qué-se-vende-y-por-qué). Notas olfativas verificadas contra Fragrantica + una fuente adicional por producto (detalle de confianza y ambigüedades en el comentario inicial de `src/lib/products.ts`).
- **Imágenes de producto:** los 20 productos tienen foto real (`public/productos/`), confirmadas contra el producto físico — detalle en [`IMAGENES.md`](./IMAGENES.md).
- **Checkout:** el flujo completo funciona y ya está conectado a Mercado Pago Checkout Pro (ver sección de arriba); si no hay credenciales configuradas, se simula.
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
