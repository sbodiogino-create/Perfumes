# PULSO — Plan de marketing y lanzamiento

> Documento vivo. Ajustar precios, presupuestos y fechas con datos reales apenas arranque la operación.

## 1. Resumen de marca

- **Nombre:** PULSO
- **Tagline:** "Sentí tu pulso."
- **Posicionamiento:** perfumería urbana de autor, unisex, para un público de 18-32 años en Argentina. Precio medio-alto, producción en lotes chicos, storytelling fuerte.
- **Paleta:** grafito casi negro `#0B0B0F`, violeta eléctrico `#8B2FFF`, lima ácido `#D4FF3D`, hueso `#F4F2EC`.
- **Tono de voz:** directo, cercano, sin golpes de efecto vacíos. Frases cortas. Nada de clichés de perfumería clásica ("elegancia atemporal", etc.). Se habla como se habla en la calle, pero cuidado.

## 2. Pilares de contenido (redes)

1. **Producto** (30%): primer plano de frascos, notas olfativas, "cómo se siente" cada fragancia.
2. **Mundo PULSO** (30%): estética urbana — fotos nocturnas, texturas de asfalto/neón, contenido que vende un estilo de vida, no solo el frasco.
3. **Detrás de escena** (20%): proceso de armado de lotes, packaging, el emprendimiento creciendo. Esto genera comunidad y confianza (clave para una marca nueva).
4. **UGC / testimonios** (20%): clientes usando el perfume, reposts, "qué fragancia sos según tu personalidad" (interactivo, ideal para stories).

**Frecuencia sugerida:** 4-5 posts/semana en Instagram feed, stories diarias, 3-4 videos/semana en TikTok/Reels.

## 3. Calendario de lanzamiento (4 semanas)

**Semana 1 — Teaser**
- Crear cuentas (@pulso.perfumes) en Instagram y TikTok, bio con link a la tienda.
- 3 posts "teaser": logo, paleta, primer vistazo a un frasco sin revelar nombre.
- Stories con cuenta regresiva.

**Semana 2 — Reveal**
- Post de lanzamiento oficial (usar `flyer-instagram-post.png`).
- Reel mostrando las 8 fragancias en 15-20 segundos, música con buen ritmo.
- Activar campaña paga (ver sección 4).

**Semana 3 — Prueba social**
- Envío de producto a 5-10 micro-influencers locales (ver sección 6).
- Repost de sus contenidos en stories.
- Código de descuento de lanzamiento: `PULSO10` (10% primera compra).

**Semana 4 — Push de conversión**
- Reels con foco en un producto por vez ("El especiado que se agota rápido" → VÉRTIGO, edición limitada).
- Story destacada permanente: "Cómo comprar" (3 pasos: elegí, agregá al carrito, pagá con Mercado Pago).
- Primer reporte de métricas y ajuste de presupuesto hacia lo que mejor convirtió.

## 4. Ideas de anuncios (Meta Ads — Instagram/Facebook)

### Anuncio 1 — Lanzamiento de marca
- **Objetivo:** Tráfico / Conversiones
- **Formato:** Reel o carrusel de 4 fotos de producto
- **Copy principal:** "Llegó PULSO. 8 fragancias urbanas, unisex, hechas para durar toda la noche."
- **CTA:** "Comprar ahora"
- **Segmentación sugerida:** 18-32 años, Argentina (empezar por CABA + GBA + Córdoba + Rosario), intereses: moda urbana, streetwear, música (trap/indie/electrónica), vida nocturna.

### Anuncio 2 — Producto hero (LATIDO)
- **Copy:** "LATIDO. El perfume con el que arranca todo. Floral amaderado, unisex, 50ml."
- **CTA:** "Ver producto"
- Usar como retargeting para quienes visitaron el sitio pero no compraron.

### Anuncio 3 — Edición limitada (urgencia)
- **Copy:** "VÉRTIGO. Stock reducido — cuando se agota, no vuelve hasta la próxima tanda."
- Ideal para generar urgencia real (producción en lotes chicos = escasez genuina, no inventada).

### Anuncio 4 — Descuento primera compra
- **Copy:** "Tu primer PULSO con 10% off. Código PULSO10."
- Dirigido a tráfico frío ancho, para captar primeros clientes y datos (pixel/Conversions API).

**Presupuesto inicial sugerido:** $150.000–300.000 ARS/mes repartido 60% conversión / 40% alcance-reconocimiento durante el primer mes; reasignar según costo por compra a partir de la semana 3.

## 5. Ideas de anuncios / contenido para TikTok

- **"8 perfumes en 8 palabras"**: un video rápido, un frasco por corte, una palabra que lo defina (VOLTAJE → "energía", MEDIANOCHE → "magnético").
- **"Que huela a vos"**: formato testeo — alguien prueba las 8 y reacciona, cámara fija, sin edición forzada (encaja con el algoritmo de TikTok).
- **Trend de "outfit + perfume del día"**: combinar look urbano con la fragancia que "combina" con la energía del día.
- **Detrás de cámara del armado de un pedido**: empaquetado, sello de marca, tarjeta con el código de descuento — contenido de proceso que genera confianza en una marca nueva.

## 6. Influencers y micro-influencers

- Priorizar **micro-influencers (10k–80k seguidores)** de moda urbana, streetwear o música en Argentina: mejor engagement y costo que macro-influencers, y más creíble para una marca nueva.
- Trueque de producto + comisión por código de descuento personalizado (ej: `NOMBRE10`) es más sostenible al inicio que pago fijo.
- Buscar 1-2 nano-influencers (2k-10k) por barrio/ciudad para contenido más "real" y barato.

## 7. Métricas a trackear desde el día 1

- Costo por adquisición (CPA) por canal.
- Tasa de conversión del sitio (visitas → compras).
- Ticket promedio y productos más vendidos (para ajustar producción).
- Tasa de abandono de carrito (implementar recordatorio por WhatsApp/email si es alta).
- Seguidores → primera compra (tiempo promedio, para calibrar la cantidad de contenido antes de convertir).

## 8. Próximos pasos técnicos para completar el e-commerce

- [x] Conectar pasarela de pago real — el checkout ya llama a Mercado Pago
      Checkout Pro (`src/app/api/checkout/route.ts`). Solo falta cargar
      `MERCADOPAGO_ACCESS_TOKEN` (ver `.env.example`) con las credenciales
      reales de la cuenta de Mercado Pago del negocio.
- [ ] Conectar dominio propio (ej. `pulsoperfumes.com.ar`).
- [ ] Configurar email transaccional (confirmación de pedido) — ej. Resend o SendGrid.
- [ ] Reemplazar precios/productos placeholder por el catálogo real y fotos de producto.
- [ ] Dar de alta cuentas de Instagram/TikTok con el mismo @handle y aplicar la identidad visual de `marketing/`.
- [ ] Generar código QR real apuntando a la URL final del sitio para el flyer imprimible.
