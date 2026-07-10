"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-lime/40 bg-card p-8 text-center">
        <p className="font-display text-xl font-bold text-lime">¡Gracias por escribirnos!</p>
        <p className="mt-2 text-bone-dim">
          Te respondemos a la brevedad. Si es urgente, escribinos por WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-bone-dim" htmlFor="name">
          Nombre
        </label>
        <input
          id="name"
          required
          className="w-full rounded-lg border border-line bg-ink-soft px-4 py-3 text-bone outline-none focus:border-lime"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-bone-dim" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          className="w-full rounded-lg border border-line bg-ink-soft px-4 py-3 text-bone outline-none focus:border-lime"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-bone-dim" htmlFor="message">
          Mensaje
        </label>
        <textarea
          id="message"
          required
          rows={4}
          className="w-full rounded-lg border border-line bg-ink-soft px-4 py-3 text-bone outline-none focus:border-lime"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-lime px-7 py-3 font-display text-sm font-bold text-ink transition hover:bg-violet-soft"
      >
        Enviar mensaje
      </button>
    </form>
  );
}
