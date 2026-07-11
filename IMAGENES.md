# Fotos de producto — estado

## Estado actual: 20 de 20 con foto real ✅

Catálogo completo. El usuario fue mandando fotos de producto por chat y las
fuimos cruzando contra el catálogo real. Están en `public/productos/` y
cargadas en `src/lib/products.ts` (campo `image`).

**Fotos recibidas pero descartadas en el camino** (no correspondían al
producto exacto del catálogo — se dejó sin usar en vez de cargar algo que
no coincide con lo que se vende):
- "Odyssey Eau de Parfum" — no es ninguno de los 20 productos del catálogo.
- "Asad Zanzibar" — es un flanker de Asad, no el Asad base que vendemos.
- "Khair Pistachio" (Paris Corner) — llegó dos veces, pero no es "Eclaire
  Pistache" (Lattafa, sí está en el catálogo) ni ningún otro producto.

## Cómo se resolvió el problema de acceso

Las fotos las pegó el usuario directo en el chat. Este entorno no tiene salida
de red para descargarlas de sitios externos, pero las imágenes pegadas quedan
guardadas en el historial de la sesión (`~/.claude/projects/.../*.jsonl`,
como bloques base64) — se extrajeron de ahí, se verificó visualmente cada una
contra el nombre del producto, y se copiaron a `public/productos/`.

## Ajustes de datos hechos por una foto

- **Amber Oud Gold Edition**: se ajustó el producto a 120ml/$120.500 (antes
  60ml/$89.000) porque esa es la presentación de la que se consiguió foto —
  se prefirió corregir el dato real antes que editar la imagen para que
  diga otra cosa.

## Cómo funciona en el sitio

El componente `ProductImage` muestra la foto real sobre una tarjeta blanca
redondeada consistente en toda la tienda. Si una imagen llegara a fallar al
cargar, cae automáticamente de vuelta a la ilustración SVG — el sitio nunca
se rompe por una foto faltante.
