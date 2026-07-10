import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contacto — PULSO Perfumes",
};

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <h1 className="font-display text-4xl font-bold">Contacto</h1>
      <p className="mt-2 max-w-lg text-bone-dim">
        Consultas por productos, envíos, mayoristas o lo que necesites.
        Respondemos en menos de 24hs.
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <ContactForm />

        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold text-lime">WhatsApp</p>
            <p className="mt-1 text-bone-dim">+54 9 3464 55-9293</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-lime">Instagram / TikTok</p>
            <p className="mt-1 text-bone-dim">@pulso.perfumes</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-lime">Envíos</p>
            <p className="mt-1 text-bone-dim">
              A todo el país por Correo Argentino y Andreani.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
