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

// Selección a partir de "Estrategia de Precios - Perfumes": de ~558 productos
// mayoristas disponibles, priorizando fragancias con buena rotación y bajo
// riesgo de stock inmovilizado. Los originales de diseñador de alta gama
// (Baccarat Rouge 540, Good Girl, Born in Roma) quedan afuera del
// lanzamiento: inmovilizan mucho capital por unidad y conviene sumarlos en
// una fase 2, cuando haya flujo de caja. Por eso hoy `category` es "Árabes"
// en los 20 productos — la categoría "Diseñador" queda armada en el sitio
// (tienda, filtros) para activarla apenas se sume el primer producto de esa
// fase 2.
//
// `tag: "Viral"` se dejó solo en un puñado de productos (no en todos) para
// que siga siendo una señal real y no un sello genérico. `tag: "Tendencia"`
// se mantiene en los 3 productos originales.
//
// Las notas olfativas (`notes`) fueron verificadas cruzando Fragrantica con
// al menos una fuente adicional (sitio oficial de marca o retailer grande)
// para cada producto. Confianza alta salvo: Yara Candy (una sola fuente),
// Ana Abiyedh Rouge (reviewers reportan un perfil más especiado/almendrado
// que la pirámide "oficial") y Dubai Chocolate (nombre comercial de
// "Pistachio Kunafa" de Anfar 1950). 9pm Black fue confirmado contra el
// frasco físico por el dueño del negocio.
//
// `image` apunta a fotos reales del frasco (public/productos/<slug>.png)
// confirmadas contra el producto físico. Amber Oud Gold Edition se cargó en
// 120ml/$120.500 (en vez de 60ml/$89.000) porque esa es la presentación de
// la que se consiguió foto — se prefirió ajustar el dato real del producto
// antes que editar la imagen para que diga otra cosa. Los productos sin
// `image` todavía usan la ilustración SVG (ver IMAGENES.md para el estado
// de cada uno).
export const products: Product[] = [
  {
    slug: "khamrah",
    image: "/productos/khamrah.png",
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
    shortDescription: "Canela, dátiles y un fondo cálido de vainilla y ámbar.",
    description:
      "Un ambarado gourmand cálido y envolvente: canela y dátiles en la salida, con un fondo de vainilla, ámbar y benjuí que se queda horas en la piel. El favorito de la casa — el primero en agotarse.",
  },
  {
    slug: "yara-pink",
    image: "/productos/yara-pink.png",
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
    shortDescription: "Cremoso, frutal y floral. El clásico que nunca pasa de moda.",
    description:
      "Vainilla cremosa con un golpe frutal de mandarina y un corazón floral suave. Fresco al principio, dulce y envolvente después — uno de los perfumes más queridos de la casa.",
  },
  {
    slug: "yara-candy",
    name: "Yara Candy",
    brand: "Lattafa",
    category: "Árabes",
    family: "Gourmand dulce",
    gender: "Femenino",
    size: "100ml",
    price: 49500,
    liquidColor: "#FF3DAE",
    notes: {
      salida: ["Grosella negra", "Mandarina verde"],
      corazon: ["Caramelo de fresa", "Gardenia"],
      fondo: ["Vainilla", "Almizcle", "Ámbar", "Sándalo"],
    },
    shortDescription: "La versión más golosa de Yara, con caramelo y gardenia.",
    description:
      "Grosella negra y mandarina verde en la salida, caramelo de fresa y gardenia en el corazón, sobre la misma base de vainilla que hizo famosa a Yara. Para quien busca algo todavía más dulce.",
  },
  {
    slug: "khamrah-qahwa",
    image: "/productos/khamrah-qahwa.png",
    name: "Khamrah Qahwa",
    brand: "Lattafa",
    category: "Árabes",
    family: "Gourmand con café",
    gender: "Unisex",
    size: "100ml",
    price: 54000,
    liquidColor: "#A9713F",
    notes: {
      salida: ["Canela", "Cardamomo", "Jengibre"],
      corazon: ["Praliné", "Frutas confitadas", "Flores blancas"],
      fondo: ["Vainilla", "Café", "Haba tonka", "Benjuí"],
    },
    shortDescription: "Khamrah con una nota de café intensa y envolvente.",
    description:
      "Canela, cardamomo y jengibre se encuentran con café y dátiles confitados, sobre un fondo de vainilla y haba tonka. Más oscuro y adictivo que el Khamrah original.",
  },
  {
    slug: "ana-abiyedh-rouge",
    image: "/productos/ana-abiyedh-rouge.png",
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
    shortDescription: "Ambarado especiado, cálido y con muchísima proyección.",
    description:
      "Pera nashi y kumquat en la salida, un corazón de caramelo y geranio, y un fondo de ámbar gris y musgo de roble que se siente en la piel horas después. Nuestra fragancia ambarada más pedida.",
  },
  {
    slug: "badee-al-oud-for-glory",
    image: "/productos/badee-al-oud-for-glory.png",
    name: "Bade'e Al Oud — For Glory",
    brand: "Lattafa",
    category: "Árabes",
    family: "Oud floral",
    gender: "Unisex",
    size: "100ml",
    price: 51000,
    liquidColor: "#9C6B3E",
    notes: {
      salida: ["Azafrán", "Nuez moscada", "Lavanda"],
      corazon: ["Oud", "Pachulí"],
      fondo: ["Oud", "Pachulí", "Almizcle"],
    },
    shortDescription: "Oud suave con rosa y azafrán. Ideal para empezar con el oud.",
    description:
      "Azafrán, nuez moscada y lavanda dan paso a un corazón de oud y pachulí, sobre un fondo cálido de ámbar y almizcle. Pensado para quien nunca probó una fragancia arábiga y quiere empezar por la puerta más amable.",
  },
  {
    slug: "mayar",
    image: "/productos/mayar.png",
    name: "Mayar",
    brand: "Lattafa",
    category: "Árabes",
    family: "Floral afrutado",
    gender: "Femenino",
    size: "100ml",
    price: 55500,
    liquidColor: "#FF7AC6",
    notes: {
      salida: ["Lichi", "Frambuesa", "Hoja de violeta"],
      corazon: ["Rosa blanca", "Peonía", "Jazmín"],
      fondo: ["Almizcle", "Vainilla"],
    },
    shortDescription: "Floral afrutado, femenino y delicado.",
    description:
      "Lichi, frambuesa y un toque verde de violeta en la salida, con un corazón de rosa blanca, peonía y jazmín sobre una base de almizcle y vainilla. Elegante sin ser empalagoso.",
  },
  {
    slug: "khamrah-dukhan",
    image: "/productos/khamrah-dukhan.png",
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
    shortDescription: "La versión ahumada de Khamrah: dulce y oscuro a la vez.",
    description:
      "Especias y pimienta de Jamaica sobre un corazón de incienso y azahar, con un fondo de tabaco, ámbar y haba tonka. 'Dukhan' significa humo en árabe — y se nota desde el primer momento.",
  },
  {
    slug: "hawas-him",
    image: "/productos/hawas-him.png",
    name: "Hawas for Him",
    brand: "Rasasi",
    category: "Árabes",
    family: "Acuático especiado",
    gender: "Masculino",
    size: "100ml",
    price: 60000,
    liquidColor: "#3DC7FF",
    notes: {
      salida: ["Bergamota", "Manzana", "Canela", "Limón"],
      corazon: ["Notas acuáticas", "Ciruela", "Azahar", "Cardamomo"],
      fondo: ["Ámbar gris", "Almizcle", "Pachulí"],
    },
    shortDescription: "Acuático y especiado, ideal para el verano.",
    description:
      "Bergamota, manzana y canela en la salida, con un corazón acuático de azahar y cardamomo sobre un fondo de ámbar gris y pachulí. Fresco, versátil y de muy buena proyección.",
  },
  {
    slug: "asad",
    image: "/productos/asad.png",
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
    shortDescription: "Amaderado ahumado con carácter. Un favorito masculino.",
    description:
      "Pimienta negra, tabaco y piña dan paso a un corazón de pachulí, café e iris, sobre un fondo de vainilla, ámbar y madera seca. 'Asad' significa león en árabe — y tiene la presencia para justificarlo.",
  },
  {
    slug: "asad-bourbon",
    name: "Asad Bourbon",
    brand: "Lattafa",
    category: "Árabes",
    family: "Amaderado boozy",
    gender: "Masculino",
    size: "100ml",
    price: 72500,
    liquidColor: "#C97A2E",
    notes: {
      salida: ["Pimienta rosa", "Lavanda", "Ciruela mirabel"],
      corazon: ["Cacao", "Davana", "Nuez moscada"],
      fondo: ["Vetiver", "Vainilla bourbon", "Ámbar"],
    },
    shortDescription: "El mismo carácter de Asad, con una nota cálida de bourbon.",
    description:
      "Pimienta rosa, lavanda y ciruela dan paso a un corazón de cacao y nuez moscada, sobre un fondo de vetiver y vainilla bourbon. Más cálido y envolvente que el Asad original.",
  },
  {
    slug: "eclaire",
    image: "/productos/eclaire.png",
    name: "Eclaire",
    brand: "Lattafa",
    category: "Árabes",
    family: "Gourmand vainilla",
    gender: "Femenino",
    size: "100ml",
    price: 65000,
    liquidColor: "#E8C36B",
    notes: {
      salida: ["Caramelo", "Leche", "Azúcar"],
      corazon: ["Flores blancas", "Miel dorada"],
      fondo: ["Vainilla", "Praliné", "Almizcle"],
    },
    shortDescription: "Gourmand de vainilla y caramelo, dulce sin empalagar.",
    description:
      "Caramelo, leche y azúcar en la salida, con un corazón de flores blancas y miel dorada sobre un fondo de vainilla y praliné. Un postre en forma de perfume.",
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
    shortDescription: "La variante tostada de Eclaire, con pistacho y cacao.",
    description:
      "Pistacho tostado en la salida, un corazón de cacao, crema batida y coco, sobre la misma base de vainilla y almizcle de Eclaire. Menos dulce, más untuoso.",
  },
  {
    slug: "fakhar-woman-rose",
    image: "/productos/fakhar-woman-rose.png",
    name: "Fakhar Woman Rose",
    brand: "Lattafa",
    category: "Árabes",
    family: "Floral rosado",
    similarTo: "Para fans de Delina, de Parfums de Marly",
    gender: "Femenino",
    size: "100ml",
    price: 77000,
    liquidColor: "#E85D9E",
    notes: {
      salida: ["Frutas", "Lirio", "Granada"],
      corazon: ["Tuberosa", "Jazmín", "Gardenia", "Rosa", "Peonía"],
      fondo: ["Vainilla", "Almizcle blanco", "Sándalo", "Ambroxán"],
    },
    shortDescription: "Floral rosado, elegante y con mucha proyección.",
    description:
      "Frutas, lirio y granada en la salida, con un corazón denso de tuberosa, jazmín, gardenia y rosa sobre un fondo de vainilla, almizcle blanco y sándalo. Uno de los florales más completos de la casa.",
  },
  {
    slug: "club-de-nuit-intense-man",
    image: "/productos/club-de-nuit-intense-man.png",
    name: "Club de Nuit Intense Man",
    brand: "Armaf",
    category: "Árabes",
    family: "Frutal amaderado",
    similarTo: "Para fans de Creed Aventus",
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
    shortDescription: "Frutal amaderado, fresco y de muy buena duración.",
    description:
      "Piña y grosella negra en la salida, un corazón de abedul y jazmín, sobre un fondo seco de almizcle y musgo de roble. Elegante y versátil, para el día a día o para salir.",
  },
  {
    slug: "9pm-black",
    image: "/productos/9pm-black.png",
    name: "9pm Black",
    brand: "Afnan",
    category: "Árabes",
    family: "Oriental especiado",
    similarTo: "Para fans de 1 Million Lucky, de Paco Rabanne",
    gender: "Masculino",
    size: "100ml",
    price: 72500,
    liquidColor: "#6B4B8A",
    notes: {
      salida: ["Bergamota", "Lavandín", "Canela", "Manzana"],
      corazon: ["Muguet", "Azahar"],
      fondo: ["Pachulí", "Ámbar", "Vainilla", "Haba tonka"],
    },
    shortDescription: "Oriental especiado, dulce y con muy buena proyección.",
    description:
      "Bergamota, canela y manzana en la salida, con un corazón floral de muguet y azahar sobre un fondo de pachulí, ámbar y vainilla. Especiado, dulce y con mucho carácter.",
  },
  {
    slug: "kismet-magic",
    image: "/productos/kismet-magic.png",
    name: "Kismet Magic",
    brand: "Maison Alhambra",
    category: "Árabes",
    family: "Floral ambarado",
    gender: "Unisex",
    size: "100ml",
    price: 45000,
    liquidColor: "#B26BFF",
    notes: {
      salida: ["Coñac"],
      corazon: ["Canela", "Haba tonka", "Roble"],
      fondo: ["Vainilla", "Praliné", "Sándalo"],
    },
    shortDescription: "Floral ambarado, cálido y con una salida poco común.",
    description:
      "Una salida de coñac poco habitual da paso a un corazón de canela y haba tonka, sobre un fondo de vainilla, praliné y sándalo. Cálido, dulce y distinto a todo lo demás del catálogo.",
  },
  {
    slug: "amber-oud-gold-edition",
    image: "/productos/amber-oud-gold-edition.png",
    name: "Amber Oud Gold Edition",
    brand: "Al Haramain",
    category: "Árabes",
    family: "Oud ahumado",
    similarTo: "Para fans de Ombré Nomade, de Louis Vuitton",
    gender: "Unisex",
    size: "120ml",
    price: 120500,
    liquidColor: "#D4A93D",
    notes: {
      salida: ["Bergamota", "Notas verdes"],
      corazon: ["Melón", "Piña", "Ámbar"],
      fondo: ["Almizcle", "Vainilla", "Maderas"],
    },
    shortDescription: "Oud ahumado y premium, con mucha presencia.",
    description:
      "Bergamota y notas verdes en la salida, un corazón de melón, piña y ámbar, sobre un fondo cálido de almizcle, vainilla y maderas. Un escalón arriba para quien ya conoce los básicos árabes.",
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
    shortDescription: "Gourmand de chocolate, pistacho y tahini.",
    description:
      "Pistacho, kunafa y caramelo en la salida, con un corazón de haba tonka, cardamomo y tahini sobre un fondo de chocolate, vainilla y ámbar. Dulce, cálido y distinto a cualquier otro gourmand del catálogo.",
  },
  {
    slug: "bharara-king",
    image: "/productos/bharara-king.png",
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
    shortDescription: "Amaderado especiado premium. El tope de gama de la casa.",
    description:
      "Naranja, bergamota y limón en la salida, con un corazón afrutado sobre un fondo de vainilla, almizcle blanco y ámbar. Denso, elegante y con la presencia que promete su botella.",
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
