export const metadata = {
  title: "Nosotros — PULSO Perfumes",
};

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-display text-4xl font-bold">Nuestra historia</h1>
      <div className="prose-invert mt-6 space-y-5 text-bone-dim">
        <p>
          Creemos que oler bien no tiene por qué ser un lujo. En Argentina,
          perfumarse todos los días suele significar pagar de más por un
          nombre — nosotros preferimos otro camino.
        </p>
        <p>
          En PULSO vas a encontrar fragancias árabes y de diseñador con una
          calidad que compite de igual a igual con las marcas más caras, a
          precios pensados para poder usarlas todos los días, no solo para
          una ocasión especial. Buscamos lo mejor de cada casa, lo probamos
          nosotros mismos, y lo traemos al mejor precio posible.
        </p>
        <p>
          No creemos en llenar la tienda de productos solo para que la lista
          se vea más larga. Preferimos un catálogo más chico pero elegido con
          cariño: cada fragancia que vendemos es una que nos gusta de verdad
          y que sabemos que vale lo que cuesta.
        </p>
        <p>
          Nuestro objetivo es simple: que encuentres tu perfume ideal sin
          vaciar el bolsillo, y que cada vez que lo uses, te sientas bien con
          vos mismo.
        </p>
        <p className="font-display text-xl font-bold text-bone">
          Sentí tu pulso.
        </p>
      </div>
    </div>
  );
}
