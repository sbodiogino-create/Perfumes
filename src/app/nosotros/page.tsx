export const metadata = {
  title: "Nosotros — PULSO Perfumes",
};

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-display text-4xl font-bold">Nuestra historia</h1>
      <div className="prose-invert mt-6 space-y-5 text-bone-dim">
        <p>
          PULSO nació de una idea simple: la mayoría de los perfumes hablan
          de otro lugar — de jardines franceses, de casas centenarias, de un
          mundo que no es el nuestro. Nosotros quisimos hacer una fragancia
          que hablara de acá: de la calle, de la previa, de la vuelta a casa
          a las cinco de la mañana.
        </p>
        <p>
          Armamos una línea chica, pensada para usarse de verdad. Nada de
          ediciones eternas ni fórmulas que no cambian nunca: trabajamos en
          lotes limitados, escuchamos lo que la gente nos cuenta que siente
          al usarlas, y ajustamos. PULSO es una marca que se construye con
          quien la usa, no antes.
        </p>
        <p>
          Todas nuestras fragancias son eau de parfum, unisex y de alta
          concentración, porque un perfume que se pierde a las dos horas no
          sirve. El resto — el frasco, el nombre, los colores — está pensado
          para que se sienta joven y urbano sin perder seriedad en lo que
          más importa: lo que huele.
        </p>
        <p className="font-display text-xl font-bold text-bone">
          Sentí tu pulso.
        </p>
      </div>
    </div>
  );
}
