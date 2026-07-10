export type Product = {
  slug: string;
  name: string;
  family: string;
  tag?: "Bestseller" | "Nuevo" | "Edición limitada";
  size: string;
  price: number;
  liquidColor: string;
  notes: {
    salida: string[];
    corazon: string[];
    fondo: string[];
  };
  description: string;
  shortDescription: string;
};

export const products: Product[] = [
  {
    slug: "latido",
    name: "LATIDO",
    family: "Floral amaderado",
    tag: "Bestseller",
    size: "50ml",
    price: 58900,
    liquidColor: "#B26BFF",
    notes: {
      salida: ["Pimienta rosa", "Bergamota"],
      corazon: ["Iris", "Jazmín sambac"],
      fondo: ["Cedro", "Almizcle blanco"],
    },
    shortDescription: "La fragancia insignia de PULSO. El pulso de la marca.",
    description:
      "LATIDO es el corazón de PULSO: un floral amaderado que arranca con un golpe especiado y se asienta en un fondo cálido de cedro y almizcle. Pensado para usarse todos los días, en cualquier cuerpo. Es el aroma con el que arrancamos, y el que mejor nos define.",
  },
  {
    slug: "voltaje",
    name: "VOLTAJE",
    family: "Cítrico especiado",
    tag: "Bestseller",
    size: "50ml",
    price: 54900,
    liquidColor: "#D4FF3D",
    notes: {
      salida: ["Pomelo", "Mandarina", "Jengibre"],
      corazon: ["Cardamomo", "Té verde"],
      fondo: ["Vetiver", "Ambroxan"],
    },
    shortDescription: "Energía pura. Cítrico y directo, para arrancar el día.",
    description:
      "VOLTAJE es descarga inmediata: cítricos exprimidos y jengibre fresco sobre un fondo seco de vetiver. No pide permiso, entra rápido y se queda el tiempo justo. Ideal para las mañanas que necesitan un empujón.",
  },
  {
    slug: "medianoche",
    name: "MEDIANOCHE",
    family: "Amaderado oriental",
    size: "50ml",
    price: 62900,
    liquidColor: "#8B2FFF",
    notes: {
      salida: ["Canela", "Ciruela negra"],
      corazon: ["Cuero", "Incienso"],
      fondo: ["Tonka", "Sándalo"],
    },
    shortDescription: "Denso, cálido y magnético. Para cuando cae el sol.",
    description:
      "MEDIANOCHE es la versión nocturna de PULSO: cuero, incienso y haba tonka en un acorde envolvente que se siente en la piel horas después. Nace para salidas largas, fiestas que no terminan y esas noches que se alargan solas.",
  },
  {
    slug: "asfalto",
    name: "ASFALTO",
    family: "Cuero y vetiver",
    size: "100ml",
    price: 71900,
    liquidColor: "#3DE0FF",
    notes: {
      salida: ["Pimienta negra", "Enebro"],
      corazon: ["Cuero suave", "Geranio"],
      fondo: ["Vetiver", "Musgo de roble"],
    },
    shortDescription: "Crudo y urbano. Cuero sobre cemento.",
    description:
      "ASFALTO toma el cuero y lo cruza con vetiver y musgo para un resultado seco, terroso y con carácter. Un aroma que se lleva bien con las calles: sin pulir, sin pedir disculpas.",
  },
  {
    slug: "neon",
    name: "NEÓN",
    family: "Floral afrutado",
    tag: "Nuevo",
    size: "50ml",
    price: 56900,
    liquidColor: "#FF3DAE",
    notes: {
      salida: ["Frutos rojos", "Pera"],
      corazon: ["Peonía", "Flor de loto"],
      fondo: ["Almizcle", "Madera de cachemira"],
    },
    shortDescription: "Dulce, luminoso, imposible de ignorar.",
    description:
      "NEÓN es la fragancia más luminosa de la línea: frutos rojos y peonía sobre una base suave de almizcle. Fue pensada para brillar en poca luz, literal y figuradamente. La última incorporación a la familia PULSO.",
  },
  {
    slug: "vertigo",
    name: "VÉRTIGO",
    family: "Especiado gourmand",
    tag: "Edición limitada",
    size: "50ml",
    price: 68900,
    liquidColor: "#FFB23D",
    notes: {
      salida: ["Cardamomo", "Naranja sanguina"],
      corazon: ["Praliné", "Nuez moscada"],
      fondo: ["Vainilla ahumada", "Haba tonka"],
    },
    shortDescription: "Intenso y adictivo. Edición limitada, stock reducido.",
    description:
      "VÉRTIGO es nuestra apuesta más arriesgada: especias cálidas y un fondo gourmand ahumado que genera dependencia. Se produce en lotes chicos — cuando se agota, no vuelve hasta la próxima tanda.",
  },
  {
    slug: "eco-urbano",
    name: "ECO URBANO",
    family: "Verde acuático",
    size: "50ml",
    price: 52900,
    liquidColor: "#3DFFB2",
    notes: {
      salida: ["Hoja de higuera", "Pepino"],
      corazon: ["Té blanco", "Violeta"],
      fondo: ["Almizcle limpio", "Cedro"],
    },
    shortDescription: "Fresco y liviano. El clásico de uso diario.",
    description:
      "ECO URBANO es la opción más fresca del catálogo: verde, acuática y liviana, pensada para el día a día y climas cálidos. La que va bien con todo y no compite con nada.",
  },
  {
    slug: "bajofondo",
    name: "BAJOFONDO",
    family: "Amaderado ahumado",
    size: "100ml",
    price: 74900,
    liquidColor: "#6B2FFF",
    notes: {
      salida: ["Pimienta negra", "Elemí"],
      corazon: ["Madera de oud", "Incienso"],
      fondo: ["Leather accord", "Pachulí"],
    },
    shortDescription: "Oscuro y profundo. El más intenso de la línea.",
    description:
      "BAJOFONDO explora los acordes más oscuros: oud, incienso y pachulí en una construcción densa y ahumada. Es el perfume que más dura en piel y el que menos se comparte.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value);
}
