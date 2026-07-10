# Fotos de producto — estado y cómo completarlas

## Por qué no hay fotos reales todavía

Investigué notas olfativas y fotos para los 20 productos del catálogo con 3
agentes de búsqueda en paralelo. Las **notas se pudieron verificar** cruzando
Fragrantica con una segunda fuente (sitio oficial de marca o retailer grande)
— ya están cargadas en `src/lib/products.ts`.

Las **fotos no se pudieron conseguir**: este entorno de ejecución bloquea por
política de red cualquier descarga directa de páginas externas (WebFetch/curl
devuelven 403 contra fragrantica.com, los sitios oficiales de las marcas,
retailers grandes, e incluso Wikipedia). Solo funciona la búsqueda de texto,
que no permite extraer una URL de imagen real y verificada. Preferí dejar el
campo `image` vacío en vez de inventar o adivinar una URL — un link roto o
mal habilitado para hotlinking en un sitio de venta real es peor que no tener
foto.

## Dos formas de resolverlo (recomendado, en este orden)

### 1. Pedirle las fotos a tu proveedor mayorista (más rápido y sin problema de derechos)

Ementoring Import (el mayorista de tu lista de precios) normalmente entrega a
sus revendedores un paquete de fotos de catálogo para usar en la venta —
es información que ya tienen armada y es la vía más prolija en términos de
derechos de imagen, porque te las da explícitamente para revender. Pediles el
link a la carpeta/drive de fotos del catálogo.

### 2. Sacarlas manualmente de las páginas oficiales de cada marca

Si necesitás avanzar ya, entrá a cada uno de estos links, click derecho sobre
la foto principal del producto → "Copiar dirección de imagen" (o descargarla),
y subilas a `public/productos/` con el nombre del slug (ej.
`public/productos/khamrah.jpg`). Después yo (o cualquiera con acceso al repo)
completo el campo `image` de `src/lib/products.ts` apuntando a
`/productos/khamrah.jpg`.

| Producto | Página candidata (verificar que sea el frasco/tamaño correcto) |
|---|---|
| Khamrah | https://www.lattafa-usa.com/products/khamrah |
| Yara (Pink) | https://lattafa.com/product/yara/ |
| Yara Candy | https://lattafa.com/product/yara-candy/ |
| Khamrah Qahwa | https://www.lattafa-usa.com/products/khamrah-qahwa |
| Ana Abiyedh Rouge | https://lattafa.com/product/ana-abiyedh-rouge/ |
| Bade'e Al Oud For Glory | https://lattafa.com/product/badee-al-oud-oud-for-glory/ (¡no confundir con "Honor & Glory", es otro producto!) |
| Mayar | https://lattafa.com/product/mayar/ (verificar que sea el Mayar original, no un flanker "Natural Intense"/"Cherry Intense") |
| Khamrah Dukhan | https://lattafa.com/product/khamrah-dukhan/ |
| Hawas for Him | http://www.rasasi.com/product/hawas-him |
| Asad | https://lattafa.com/product/asad/ |
| Asad Bourbon | https://lattafa.com/product/asad-bourbon/ |
| Eclaire | https://www.lattafa-usa.com/products/eclaire |
| Eclaire Pistache | https://www.lattafa-usa.com/products/eclaire-pistache |
| Fakhar Woman Rose | https://lattafa.com/product/fakhar-lattafa-women/ |
| Club de Nuit Intense Man | https://armaf.com/products/club-de-nuit-intense-for-man |
| 9pm Black | https://afnan.com/products/9-pm (verificar que sea la variante "Black" y no el "9pm" original — tienen frascos distintos) |
| Kismet Magic | https://www.fragrancenet.com/cologne/maison-alhambra/maison-alhambra-kismet-magic/eau-de-parfum |
| Amber Oud Gold Edition | https://shop.alharamainperfumes.com/default/haramain-amber-oud-gold-edition-60ml-spray.html (no confundir con la variante "Extreme") |
| Dubai Chocolate | https://ha-fragrances.com/products/dubai-chocolate-pistachio-kunafa-perfume-100ml-eau-de-parfum |
| King (Bharara) | https://www.bhararabeauty.com/products/bharara-king |

Ninguna de estas URLs fue verificada por fetch directo (el entorno no lo
permite) — son las páginas de producto que la búsqueda identificó como
correctas, pero conviene chequear visualmente que el frasco/tamaño coincida
antes de usarlas.

## Mientras tanto: qué se ve hoy en el sitio

Todos los productos usan una ilustración SVG generada por código (frasco +
etiqueta con el nombre, coloreada según la nota principal de cada fragancia).
El componente `ProductImage` ya está listo para mostrar la foto real apenas
se complete el campo `image` — no hace falta tocar ningún otro archivo, y si
una URL de imagen falla al cargar, cae automáticamente de vuelta a la
ilustración SVG (no se rompe el sitio).
