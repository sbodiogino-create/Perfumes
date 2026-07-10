# PULSO — Plan de marketing y lanzamiento

> Documento vivo. Ajustar presupuestos y fechas con datos reales apenas arranque la operación.

## 1. Resumen de marca

- **Nombre:** PULSO
- **Tagline:** "Sentí tu pulso."
- **Posicionamiento:** curaduría de perfumes árabes/dupes virales + algunas piezas premium, para un público de 18-32 años en Argentina. PULSO no fabrica: elige, dentro de un catálogo mayorista de más de 500 productos, solo lo que ya demostró demanda real (TikTok, Instagram, MercadoLibre). Esa selección — no tener "de todo" — es el argumento de venta.
- **Paleta:** grafito casi negro `#0B0B0F`, violeta eléctrico `#8B2FFF`, lima ácido `#D4FF3D`, hueso `#F4F2EC`.
- **Tono de voz:** directo, cercano, sin golpes de efecto vacíos. Frases cortas. Se apoya en datos reales (números de tendencia, comparaciones de precio) en vez de adjetivos vacíos.

## 2. El catálogo de lanzamiento — qué se vende y por qué

Fuente: `Estrategia_de_Precios__Perfumes.xlsx` (catálogo mayorista Ementoring
Import, ~536 productos con costo válido, cruzado con un research de los 40
perfumes más virales de TikTok en julio 2026).

**Criterio de selección** (por qué estos 20 y no los ~536 disponibles):
1. Está en la lista de "virales ahora" o "en proyección" del research de TikTok — demanda ya probada, no una apuesta.
2. Costo mayorista bajo-medio (mayormente escalones 1 y 2: hasta USD 50) — poco capital inmovilizado por unidad, rotación rápida, ideal para el stock inicial de un emprendimiento nuevo.
3. Cubre 8 marcas distintas (Lattafa, Rasasi, Armaf, Afnan, Maison Alhambra, Al Haramain, Anfar, Bharara) para que el catálogo no se sienta "todo lo mismo".
4. **Se dejaron afuera a propósito** los originales de diseñador de alta gama (Baccarat Rouge 540 original, Good Girl, Born in Roma) — cuestan entre USD 380 y 570 de costo mayorista cada uno. Inmovilizar ese capital en el lanzamiento es un riesgo innecesario; tiene sentido sumarlos en una fase 2, cuando haya flujo de caja probado. Mientras tanto, el dupe de Baccarat Rouge 540 (Ana Abiyedh Rouge, Lattafa) cubre esa demanda a una fracción del costo.

**Los 20 productos** (ver `src/lib/products.ts` para el detalle completo con notas y precios): Khamrah, Yara, Yara Candy, Khamrah Qahwa, Ana Abiyedh Rouge, Bade'e Al Oud For Glory, Mayar, Khamrah Dukhan, Hawas for Him, Asad, Asad Bourbon, Eclaire, Eclaire Pistache, Fakhar Woman Rose, Club de Nuit Intense Man, 9pm Black, Kismet Magic, Amber Oud Gold Edition, Dubai Chocolate y King (Bharara).

**Cómo ampliar el catálogo más adelante:** el archivo de estrategia de precios
tiene la lista completa de ~536 productos disponibles con costo y margen ya
calculados. Para sumar un producto nuevo, alcanza con agregarlo a
`src/lib/products.ts` con los mismos campos (marca, costo→precio, notas).
Candidatos naturales para la próxima tanda (ya identificados como virales
pero fuera del catálogo mayorista actual, o con stock momentáneamente agotado):
Bianco Latte (Giardini di Toscana), Vanilla 28 (Kayali), Cloud (Ariana
Grande), Pistachio Kunafa (Tubbees, vuelve cuando haya stock).

## 3. Pilares de contenido (redes)

1. **Producto + comparación** (35%): "¿Por qué éste y no el original?" — comparar nota por nota contra el perfume de diseñador que inspira cada dupe (Ana Abiyedh Rouge vs. Baccarat Rouge 540, Club de Nuit vs. Aventus). Es el contenido que más convierte en este nicho.
2. **Tendencia / viral** (25%): por qué un perfume está explotando en TikTok en este momento (ola marshmallow, chocolate Dubai, boozy gourmand). Usar los datos del research como fuente.
3. **Detrás de escena** (20%): packaging, pedidos armándose, el catálogo creciendo — genera confianza en una marca nueva que no fabrica pero sí elige con criterio.
4. **UGC / testimonios** (20%): reviews reales, "cuál te gustó más", reposts de clientes.

**Frecuencia sugerida:** 4-5 posts/semana en Instagram feed, stories diarias, 3-4 videos/semana en TikTok/Reels.

## 4. Calendario de lanzamiento (4 semanas)

**Semana 1 — Teaser**
- Crear cuentas (@pulso.perfumes) en Instagram y TikTok, bio con link a la tienda.
- Posts "teaser" mostrando de a poco el catálogo sin revelar precios.
- Stories con cuenta regresiva.

**Semana 2 — Reveal**
- Post de lanzamiento oficial (usar `flyer-instagram-post.png`).
- Reel "20 perfumes virales en 30 segundos" mostrando el catálogo completo.
- Activar campaña paga (ver sección 5).

**Semana 3 — Prueba social**
- Envío de producto a 5-10 micro-influencers locales (ver sección 7).
- Repost de sus contenidos en stories.
- Código de descuento de lanzamiento: `PULSO10` (10% primera compra).

**Semana 4 — Push de conversión**
- Reels con foco en un producto por vez, priorizando los de mayor margen/ticket (King de Bharara, Amber Oud Gold Edition).
- Story destacada permanente: "Cómo comprar" (3 pasos: elegí, agregá al carrito, pagá con Mercado Pago).
- Primer reporte de métricas y ajuste de presupuesto hacia lo que mejor convirtió.

## 5. Ideas de anuncios (Meta Ads — Instagram/Facebook)

### Anuncio 1 — Lanzamiento de marca
- **Objetivo:** Tráfico / Conversiones
- **Formato:** Reel o carrusel mostrando 4-5 productos del catálogo
- **Copy principal:** "PULSO: los 20 perfumes árabes y de nicho que están explotando en TikTok, en un solo lugar."
- **CTA:** "Comprar ahora"
- **Segmentación sugerida:** 18-32 años, Argentina (empezar por CABA + GBA + Córdoba + Rosario), intereses: belleza, perfumería, moda, TikTok Shop.

### Anuncio 2 — El dupe más buscado
- **Copy:** "¿Baccarat Rouge 540 a $850.000? Ana Abiyedh Rouge tiene el mismo acorde ambarado, a $43.500."
- **CTA:** "Ver producto"
- Es el ángulo de comparación de precio directa — el gancho más fuerte del nicho de dupes. Usar como retargeting para quienes visitaron el sitio pero no compraron.

### Anuncio 3 — Tendencia en tiempo real
- **Copy:** "Dubai Chocolate ya es perfume. La ola viral del año, en tu piel."
- Aprovecha picos de búsqueda de tendencias externas (comida viral, sonidos de TikTok) apenas aparecen.

### Anuncio 4 — Descuento primera compra
- **Copy:** "Tu primer PULSO con 10% off. Código PULSO10."
- Dirigido a tráfico frío ancho, para captar primeros clientes y datos (pixel/Conversions API).

**Presupuesto inicial sugerido:** $150.000–300.000 ARS/mes repartido 60% conversión / 40% alcance-reconocimiento durante el primer mes; reasignar según costo por compra a partir de la semana 3.

## 6. Ideas de anuncios / contenido para TikTok

- **"¿Cuál es el dupe de...?"**: serie donde cada video responde a un designer famoso con su versión PULSO (Aventus → Club de Nuit Intense, Baccarat Rouge 540 → Ana Abiyedh Rouge, Ombré Nomade → Amber Oud Gold Edition).
- **"Probamos los virales antes que vos"**: alguien prueba 3-4 productos nuevos y reacciona en cámara, sin edición forzada.
- **Trend de "outfit + perfume del día"**: combinar look con la fragancia que "combina" con la energía del día.
- **Detrás de cámara del armado de un pedido**: empaquetado, tarjeta con el código de descuento — contenido de proceso que genera confianza.

## 7. Influencers y micro-influencers

- Priorizar **micro-influencers (10k–80k seguidores)** de belleza/perfumería o moda en Argentina: mejor engagement y costo que macro-influencers, y más creíble para una marca nueva.
- Trueque de producto + comisión por código de descuento personalizado (ej: `NOMBRE10`) es más sostenible al inicio que pago fijo.
- Buscar 1-2 nano-influencers (2k-10k) por barrio/ciudad para contenido más "real" y barato.

## 8. Métricas a trackear desde el día 1

- Costo por adquisición (CPA) por canal.
- Tasa de conversión del sitio (visitas → compras).
- Ticket promedio y productos más vendidos, cruzado con el margen por escalón (ver `Parametros` del Excel original) para saber qué reponer primero.
- Tasa de abandono de carrito (implementar recordatorio por WhatsApp/email si es alta).
- Velocidad de rotación por producto — si algo no se mueve en 3-4 semanas, es candidato a salir del catálogo y liberar ese lugar (y ese capital) para el siguiente viral.

## 9. Próximos pasos técnicos para completar el e-commerce

- [x] Conectar pasarela de pago real — el checkout ya llama a Mercado Pago
      Checkout Pro (`src/app/api/checkout/route.ts`). Solo falta cargar
      `MERCADOPAGO_ACCESS_TOKEN` (ver `.env.example`) con las credenciales
      reales de la cuenta de Mercado Pago del negocio.
- [x] Catálogo con productos y precios reales (`src/lib/products.ts`), a partir
      de la estrategia de precios provista.
- [x] Notas olfativas verificadas contra Fragrantica + una fuente adicional
      por producto (ver el comentario al inicio de `src/lib/products.ts` para
      los casos con menor confianza o ambigüedad de nombre).
- [x] Fotos reales de producto — 16 de 20 ya cargadas (`public/productos/`),
      confirmadas contra el producto físico. Faltan 4: Yara Candy, Asad
      Bourbon, Eclaire Pistache, Dubai Chocolate — estado en [`IMAGENES.md`](./IMAGENES.md).
- [ ] Conectar dominio propio (ej. `pulsoperfumes.com.ar`).
- [ ] Configurar email transaccional (confirmación de pedido) — ej. Resend o SendGrid.
- [ ] Dar de alta cuentas de Instagram/TikTok con el mismo @handle y aplicar la identidad visual de `marketing/`.
- [ ] Generar código QR real apuntando a la URL final del sitio para el flyer imprimible.
- [ ] Revisar el tipo de cambio y los márgenes por escalón cada vez que se actualicen precios (pestaña `Parametros` del Excel original) y reflejarlo en `src/lib/products.ts`.
