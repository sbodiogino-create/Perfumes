# Fotos de producto — estado

## Estado actual: 19 de 20 con foto real confirmada

El usuario fue mandando fotos de producto por chat y las fuimos cruzando
contra el catálogo. Están en `public/productos/<slug>.png` y cargadas en
`src/lib/products.ts` (campo `image`).

| Producto | Foto | Notas |
|---|---|---|
| Khamrah | ✅ | |
| Yara (Pink) | ✅ | |
| Yara Candy | ✅ | |
| Khamrah Qahwa | ✅ | |
| Ana Abiyedh Rouge | ✅ | |
| Bade'e Al Oud For Glory | ✅ | |
| Mayar | ✅ | |
| Khamrah Dukhan | ✅ | |
| Hawas for Him | ✅ | |
| Asad | ✅ | |
| Asad Bourbon | ✅ | |
| Eclaire | ✅ | |
| Eclaire Pistache | ⬜ | falta (no es "Khair Pistachio" de Paris Corner — llegaron dos fotos de ese producto y se descartaron ambas) |
| Fakhar Woman Rose | ✅ | confirmado por el usuario |
| Club de Nuit Intense Man | ✅ | |
| 9pm Black | ✅ | confirmado por el usuario contra el frasco físico |
| Kismet Magic | ✅ | |
| Amber Oud Gold Edition | ✅ | se ajustó el producto a **120ml/$120.500** (antes 60ml/$89.000) porque esa es la presentación de la que se consiguió foto — se prefirió corregir el dato real antes que editar la imagen para que diga otra cosa |
| Dubai Chocolate | ✅ | |
| King (Bharara) | ✅ | |

**Fotos recibidas pero descartadas** (no corresponden al producto exacto del catálogo):
- "Odyssey Eau de Parfum" — no es ninguno de los 20 productos del catálogo.
- "Asad Zanzibar" — es un flanker de Asad, no el Asad base que vendemos.
- "Khair Pistachio" (Paris Corner) — llegó dos veces, pero no es "Eclaire Pistache" (Lattafa) ni ningún otro producto del catálogo.

## Cómo se resolvió el problema de acceso

Las fotos las pegó el usuario directo en el chat. Este entorno no tiene salida
de red para descargarlas de sitios externos, pero las imágenes pegadas quedan
guardadas en el historial de la sesión (`~/.claude/projects/.../*.jsonl`,
como bloques base64) — se extrajeron de ahí, se verificó visualmente cada una
contra el nombre del producto, y se copiaron a `public/productos/`.

## Qué falta

Solo 1 producto sin foto: **Eclaire Pistache** (Lattafa — ojo, no es "Khair
Pistachio" de Paris Corner, que es otra marca y ya llegó dos veces por
error). Sirve cualquier foto de producto con fondo claro/blanco — el
componente `ProductImage` la muestra sobre una tarjeta blanca redondeada
consistente con el resto del catálogo, y si falla al cargar cae de vuelta a
la ilustración SVG automáticamente.
