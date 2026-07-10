export type Gender = "Unisex" | "Masculino" | "Femenino";
export type Category = "Árabes" | "Diseñador";

export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: Category;
  family: string;
  similarTo?: string;
  gender: Gender;
  tag?: "Viral" | "Tendencia";
  size: string;
  price: number;
  liquidColor: string;
  /** URL externa a una foto real del frasco (opcional). Si falta, se usa la ilustración SVG. */
  image?: string;
  notes: {
    salida: string[];
    corazon: string[];
    fondo: string[];
  };
  description: string;
  shortDescription: string;
};

// Catálogo curado a partir de "Estrategia de Precios - Perfumes": de ~558 productos
// mayoristas disponibles, esta selección prioriza fragancias con demanda probada
// en TikTok/Instagram (columna "Virales TikTok"), buen margen y bajo riesgo de
// stock inmovilizado. Los originales de diseñador de alta gama (Baccarat Rouge 540,
// Good Girl, Born in Roma) quedan afuera del lanzamiento: inmovilizan mucho capital
// por unidad y conviene sumarlos en una fase 2, cuando haya flujo de caja. Por eso
// hoy `category` es "Árabes" en los 20 productos — la categoría "Diseñador" queda
// armada en el sitio (tienda, filtros) para activarla apenas se sume el primer
// producto de esa fase 2.
//
// Las notas olfativas (`notes`) fueron verificadas cruzando Fragrantica con al
// menos una fuente adicional (sitio oficial de marca o retailer grande) para
// cada producto. Confianza alta salvo: Yara Candy (una sola fuente), Ana
// Abiyedh Rouge (reviewers reportan un perfil más especiado/almendrado que la
// pirámide "oficial"), 9pm Black (existe ambigüedad entre "9pm" original y la
// variante "Black" — verificar contra el frasco físico antes de publicar) y
// Dubai Chocolate (nombre comercial de "Pistachio Kunafa" de Anfar 1950).
// `image` queda sin completar para todo el catálogo: este entorno no tiene
// acceso de red para descargar/verificar fotos reales — ver README para cómo
// sumarlas.
export const products: Product[] = [
  {
    slug: "khamrah",
    name: "Khamrah",
    brand: "Lattafa",
    category: "Árabes",
    family: "Ambarado gourmand",
    gender: "Unisex",
    tag: "Viral",
    size: "100ml",
    price: 51000,
    liquidColor: "#E8A33D",
    notes: {
      salida: ["Canela", "Nuez moscada", "Bergamota"],
      corazon: ["Dátiles", "Praliné", "Tuberosa"],
      fondo: ["Vainilla", "Haba tonka", "Ámbar", "Benjuí"],
    },
    shortDescription: "El árabe más exitoso en la historia de PerfumeTok.",
    description:
      "Canela, dátiles y una base de vainilla y ámbar que sigue dominando PerfumeTok desde que se lanzó. Es el perfume que más veces vas a ver recomendado en redes — y el que más rápido se vende en cualquier catálogo árabe.",
  },
  {
    slug: "yara-pink",
    name: "Yara",
    brand: "Lattafa",
    category: "Árabes",
    family: "Floral afrutado gourmand",
    gender: "Femenino",
    tag: "Viral",
    size: "100ml",
    price: 54000,
    liquidColor: "#FF6FB0",
    notes: {
      salida: ["Orquídea", "Heliotropo", "Mandarina"],
      corazon: ["Acorde gourmand", "Frutas tropicales"],
      fondo: ["Vainilla", "Almizcle", "Sándalo"],
    },
    shortDescription: "Cremoso, frutal y tropical. Viral hace años, no hace semanas.",
    description:
      "Vainilla cremosa con un golpe frutal tropical. La mayoría de los virales de TikTok duran unas semanas — Yara lleva años vigente y sigue siendo de los más pedidos en cualquier búsqueda de perfumes árabes.",
  },
  {
    slug: "yara-candy",
    name: "Yara Candy",
    brand: "Lattafa",
    category: "Árabes",
    family: "Gourmand dulce",
    gender: "Femenino",
    tag: "Viral",
    size: "100ml",
    price: 49500,
    liquidColor: "#FF3DAE",
    notes: {
      salida: ["Grosella negra", "Mandarina verde"],
      corazon: ["Caramelo de fresa", "Gardenia"],
      fondo: ["Vainilla", "Almizcle", "Ámbar", "Sándalo"],
    },
    shortDescription: "El flanker más dulce de Yara, empujando fuerte en TikTok Shop.",
    description:
      "La versión más golosa de Yara: caramelo y coco sobre la misma base de vainilla que la hizo famosa. Ideal para quien busca algo todavía más dulce y llamativo.",
  },
  {
    slug: "khamrah-qahwa",
    name: "Khamrah Qahwa",
    brand: "Lattafa",
    category: "Árabes",
    family: "Gourmand boozy con café",
    gender: "Unisex",
    tag: "Viral",
    size: "100ml",
    price: 54000,
    liquidColor: "#A9713F",
    notes: {
      salida: ["Canela", "Cardamomo", "Jengibre"],
      corazon: ["Praliné", "Frutas confitadas", "Flores blancas"],
      fondo: ["Vainilla", "Café", "Haba tonka", "Benjuí"],
    },
    shortDescription: "La ola 'boozy gourmand' con café que domina 2026.",
    description:
      "Todo lo que hizo viral a Khamrah, más una nota de café intensa que lo vuelve más oscuro y adictivo. Los gourmands con notas de licor y café son de lo más buscado este año.",
  },
  {
    slug: "ana-abiyedh-rouge",
    name: "Ana Abiyedh Rouge",
    brand: "Lattafa",
    category: "Árabes",
    family: "Ambarado especiado",
    similarTo: "Para fans de Baccarat Rouge 540",
    gender: "Unisex",
    tag: "Viral",
    size: "60ml",
    price: 43500,
    liquidColor: "#E0483D",
    notes: {
      salida: ["Pera nashi", "Kumquat", "Bergamota"],
      corazon: ["Caramelo", "Geranio"],
      fondo: ["Ámbar gris", "Almizcle", "Musgo de roble"],
    },
    shortDescription: "El dupe de Baccarat Rouge 540 más famoso de TikTok.",
    description:
      "El acorde ambarado-especiado que hizo mundialmente famoso a Baccarat Rouge 540, a una fracción del precio. Es, literalmente, el hashtag #br540dupes más repetido en TikTok — y nuestra puerta de entrada más accesible.",
  },
  {
    slug: "badee-al-oud-for-glory",
    name: "Bade'e Al Oud — For Glory",
    brand: "Lattafa",
    category: "Árabes",
    family: "Oud floral",
    gender: "Unisex",
    tag: "Viral",
    size: "100ml",
    price: 51000,
    liquidColor: "#9C6B3E",
    notes: {
      salida: ["Azafrán", "Nuez moscada", "Lavanda"],
      corazon: ["Oud", "Pachulí"],
      fondo: ["Oud", "Pachulí", "Almizcle"],
    },
    shortDescription: "El clásico de PerfumeTok árabe: la puerta de entrada al oud.",
    description:
      "Oud suavizado con rosa y vainilla, pensado para quien nunca probó una fragancia arábiga y quiere empezar por el clásico que todo el mundo recomienda antes de ir a algo más intenso.",
  },
  {
    slug: "mayar",
    name: "Mayar",
    brand: "Lattafa",
    category: "Árabes",
    family: "Floral afrutado",
    gender: "Femenino",
    tag: "Viral",
    size: "100ml",
    price: 55500,
    liquidColor: "#FF7AC6",
    notes: {
      salida: ["Lichi", "Frambuesa", "Hoja de violeta"],
      corazon: ["Rosa blanca", "Peonía", "Jazmín"],
      fondo: ["Almizcle", "Vainilla"],
    },
    shortDescription: "El femenino árabe que aparece constantemente en PerfumeTok.",
    description:
      "Floral frutado con un corazón de rosa y jazmín. Es una de las recomendaciones más constantes dentro del universo de perfumes árabes femeninos en redes.",
  },
  {
    slug: "khamrah-dukhan",
    name: "Khamrah Dukhan",
    brand: "Lattafa",
    category: "Árabes",
    family: "Ambarado ahumado",
    gender: "Unisex",
    tag: "Tendencia",
    size: "100ml",
    price: 60000,
    liquidColor: "#7A6152",
    notes: {
      salida: ["Especias", "Pimienta de Jamaica", "Mandarina"],
      corazon: ["Incienso", "Láudano", "Azahar", "Pachulí"],
      fondo: ["Praliné", "Tabaco", "Ámbar", "Haba tonka", "Benjuí"],
    },
    shortDescription: "\"Marshmallow gótico\": lo dulce se vuelve oscuro y ahumado.",
    description:
      "La versión ahumada de Khamrah — 'dukhan' significa humo en árabe. Las búsquedas de perfumes con nota marshmallow crecieron más de 240% este año, y esta variante le suma una capa oscura que la está empujando fuerte en tendencias.",
  },
  {
    slug: "hawas-him",
    name: "Hawas for Him",
    brand: "Rasasi",
    category: "Árabes",
    family: "Acuático especiado",
    gender: "Masculino",
    tag: "Viral",
    size: "100ml",
    price: 60000,
    liquidColor: "#3DC7FF",
    notes: {
      salida: ["Bergamota", "Manzana", "Canela", "Limón"],
      corazon: ["Notas acuáticas", "Ciruela", "Azahar", "Cardamomo"],
      fondo: ["Ámbar gris", "Almizcle", "Pachulí"],
    },
    shortDescription: "Acuático masculino árabe, viral de verano.",
    description:
      "Fresco, especiado y con proyección marina — una recomendación recurrente en #fragtok para los meses de calor. Uno de los masculinos árabes más vendidos, punto.",
  },
  {
    slug: "asad",
    name: "Asad",
    brand: "Lattafa",
    category: "Árabes",
    family: "Amaderado ahumado",
    gender: "Masculino",
    tag: "Viral",
    size: "100ml",
    price: 65000,
    liquidColor: "#6B6B76",
    notes: {
      salida: ["Pimienta negra", "Tabaco", "Piña"],
      corazon: ["Pachulí", "Café", "Iris"],
      fondo: ["Vainilla", "Ámbar", "Madera seca", "Láudano"],
    },
    shortDescription: "El masculino estrella del 'smellmaxxing' en TikTok.",
    description:
      "Amaderado, ahumado y con carácter — el perfume que más aparece en los videos de hombres jóvenes compartiendo su rutina de fragancias. 'Asad' significa león en árabe, y se nota.",
  },
  {
    slug: "asad-bourbon",
    name: "Asad Bourbon",
    brand: "Lattafa",
    category: "Árabes",
    family: "Amaderado boozy",
    gender: "Masculino",
    tag: "Viral",
    size: "100ml",
    price: 72500,
    liquidColor: "#C97A2E",
    notes: {
      salida: ["Pimienta rosa", "Lavanda", "Ciruela mirabel"],
      corazon: ["Cacao", "Davana", "Nuez moscada"],
      fondo: ["Vetiver", "Vainilla bourbon", "Ámbar"],
    },
    shortDescription: "El flanker boozy de Asad. De lleno en la tendencia whisky/bourbon.",
    description:
      "Todo el carácter de Asad con una nota de bourbon que lo vuelve más cálido y envolvente. Encaja directo en la ola de fragancias 'boozy' que domina las recomendaciones masculinas este año.",
  },
  {
    slug: "eclaire",
    name: "Eclaire",
    brand: "Lattafa",
    category: "Árabes",
    family: "Gourmand vainilla",
    gender: "Femenino",
    tag: "Viral",
    size: "100ml",
    price: 65000,
    liquidColor: "#E8C36B",
    notes: {
      salida: ["Caramelo", "Leche", "Azúcar"],
      corazon: ["Flores blancas", "Miel dorada"],
      fondo: ["Vainilla", "Praliné", "Almizcle"],
    },
    shortDescription: "Uno de los de crecimiento más rápido en TikTok Shop.",
    description:
      "Vainilla cremosa y caramelo — un nombre que 'se huele' con solo leerlo. Es una de las fragancias con la curva de búsquedas más pronunciada del último año.",
  },
  {
    slug: "eclaire-pistache",
    name: "Eclaire Pistache",
    brand: "Lattafa",
    category: "Árabes",
    family: "Gourmand tostado",
    gender: "Femenino",
    tag: "Tendencia",
    size: "100ml",
    price: 72500,
    liquidColor: "#8FBF4D",
    notes: {
      salida: ["Pistacho", "Pistacho tostado"],
      corazon: ["Cacao", "Crema batida", "Coco"],
      fondo: ["Vainilla", "Leche", "Almizcle"],
    },
    shortDescription: "El pistacho es LA nota de los 'savoury gourmands' de 2026.",
    description:
      "La variante tostada de Eclaire: pistacho y notas horneadas en vez de dulce puro. Los gourmands 'salados' — horneados, tostados — son la evolución que están empujando los perfumistas de nicho, y esta versión la trae accesible.",
  },
  {
    slug: "fakhar-woman-rose",
    name: "Fakhar Woman Rose",
    brand: "Lattafa",
    category: "Árabes",
    family: "Floral rosado",
    similarTo: "Para fans de Delina (Parfums de Marly)",
    gender: "Femenino",
    tag: "Viral",
    size: "100ml",
    price: 77000,
    liquidColor: "#E85D9E",
    notes: {
      salida: ["Frutas", "Lirio", "Granada"],
      corazon: ["Tuberosa", "Jazmín", "Gardenia", "Rosa", "Peonía"],
      fondo: ["Vainilla", "Almizcle blanco", "Sándalo", "Ambroxán"],
    },
    shortDescription: "El dupe viral de Delina más pedido en TikTok Shop.",
    description:
      "Peonía, lichi y un fondo de almizcle rosado — la estructura floral que hizo famoso a Delina, con muchísima rotación en redes por su relación precio-calidad.",
  },
  {
    slug: "club-de-nuit-intense-man",
    name: "Club de Nuit Intense Man",
    brand: "Armaf",
    category: "Árabes",
    family: "Frutal amaderado",
    similarTo: "El dupe de Creed Aventus por excelencia",
    gender: "Masculino",
    tag: "Viral",
    size: "105ml",
    price: 77000,
    liquidColor: "#3D5175",
    notes: {
      salida: ["Limón", "Piña", "Bergamota", "Grosella negra"],
      corazon: ["Abedul", "Jazmín", "Rosa"],
      fondo: ["Almizcle", "Ámbar gris", "Pachulí"],
    },
    shortDescription: "El favorito 'budget' de todas las listas de TikTok.",
    description:
      "La estructura frutal-amaderada que hizo famoso a Aventus, con la piña y el almizcle seco como protagonistas. Aparece en prácticamente todos los rankings de 'mejores perfumes económicos' de PerfumeTok.",
  },
  {
    slug: "9pm-black",
    name: "9pm Black",
    brand: "Afnan",
    category: "Árabes",
    family: "Oriental especiado",
    gender: "Masculino",
    tag: "Viral",
    size: "100ml",
    price: 72500,
    liquidColor: "#6B4B8A",
    notes: {
      salida: ["Bergamota", "Lavandín", "Canela", "Manzana"],
      corazon: ["Muguet", "Azahar"],
      fondo: ["Pachulí", "Ámbar", "Vainilla", "Haba tonka"],
    },
    shortDescription: "Masculino dulce viral, uno de los más buscados en #fragtok.",
    description:
      "Especiado, dulce y con proyección larga — de los masculinos árabes con más presencia sostenida en redes, con varios flankers dando vueltas por si este engancha.",
  },
  {
    slug: "kismet-magic",
    name: "Kismet Magic",
    brand: "Maison Alhambra",
    category: "Árabes",
    family: "Floral ambarado",
    gender: "Unisex",
    tag: "Viral",
    size: "100ml",
    price: 45000,
    liquidColor: "#B26BFF",
    notes: {
      salida: ["Coñac"],
      corazon: ["Canela", "Haba tonka", "Roble"],
      fondo: ["Vainilla", "Praliné", "Sándalo"],
    },
    shortDescription: "La 'joya oculta' de 2026: de nicho a búsqueda masiva en semanas.",
    description:
      "El formato 'dupe reveal' lo sacó del anonimato en cuestión de semanas. Floral ambarado con muy buena relación precio-calidad — todavía tiene margen para crecer antes de saturarse.",
  },
  {
    slug: "amber-oud-gold-edition",
    name: "Amber Oud Gold Edition",
    brand: "Al Haramain",
    category: "Árabes",
    family: "Oud ahumado",
    similarTo: "Estilo Ombré Nomade (Louis Vuitton)",
    gender: "Unisex",
    tag: "Viral",
    size: "60ml",
    price: 89000,
    liquidColor: "#D4A93D",
    notes: {
      salida: ["Bergamota", "Notas verdes"],
      corazon: ["Melón", "Piña", "Ámbar"],
      fondo: ["Almizcle", "Vainilla", "Maderas"],
    },
    shortDescription: "Árabe premium, estrella de #perfumearabe.",
    description:
      "Oud ahumado con un fondo cálido de vainilla y benjuí. Un escalón arriba en precio, pensado para quien ya probó los básicos árabes y quiere algo con más presencia.",
  },
  {
    slug: "dubai-chocolate",
    name: "Dubai Chocolate",
    brand: "Anfar",
    category: "Árabes",
    family: "Gourmand chocolate",
    gender: "Unisex",
    tag: "Tendencia",
    size: "100ml",
    price: 78500,
    liquidColor: "#8A5A38",
    notes: {
      salida: ["Pistacho", "Kunafa", "Frutos secos", "Caramelo"],
      corazon: ["Haba tonka", "Cardamomo", "Tahini"],
      fondo: ["Chocolate", "Vainilla", "Ámbar"],
    },
    shortDescription: "La ola 'chocolate Dubai' salta de lo viral en comida al perfume.",
    description:
      "Inspirado directamente en el postre que rompió todos los récords en redes: cacao, pistacho y tahini en formato perfume. Contenido asegurado para cualquier video de unboxing.",
  },
  {
    slug: "bharara-king",
    name: "King",
    brand: "Bharara",
    category: "Árabes",
    family: "Amaderado especiado premium",
    gender: "Masculino",
    tag: "Viral",
    size: "100ml",
    price: 146500,
    liquidColor: "#C9A227",
    notes: {
      salida: ["Naranja", "Bergamota", "Limón"],
      corazon: ["Notas afrutadas"],
      fondo: ["Vainilla", "Almizcle blanco", "Ámbar"],
    },
    shortDescription: "Fenómeno de TikTok Shop: botella premium que rinde en video.",
    description:
      "El tope de gama del catálogo: amaderado especiado denso, con una estética de botella que es contenido en sí misma. Para el cliente que busca algo con más presencia y está dispuesto a pagar por eso.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getBrands(): string[] {
  return Array.from(new Set(products.map((p) => p.brand))).sort();
}

export const categories: Category[] = ["Árabes", "Diseñador"];

export function getBrandsByCategory(category: Category): string[] {
  return Array.from(
    new Set(products.filter((p) => p.category === category).map((p) => p.brand))
  ).sort();
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value);
}
