"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { business, whatsappLink } from "@/lib/content";

type FormState = {
  name: string;
  contact: string;
  date: string;
  adults: string;
  children: string;
  dietary: string;
  notes: string;
};

const initialState: FormState = {
  name: "",
  contact: "",
  date: "",
  adults: "2",
  children: "0",
  dietary: "",
  notes: "",
};

const inputClass =
  "w-full rounded-xl border border-ivory/15 bg-white/5 px-4 py-3 text-sm text-ivory placeholder:text-ivory/35 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20";

export default function EnquiryForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!form.name.trim() || !form.contact.trim() || !form.date.trim()) {
      setError("Please fill in your name, contact detail, and preferred date.");
      return;
    }
    setError(null);

    const message = [
      `Hi! I'd like to reserve a cooking experience.`,
      `Name: ${form.name}`,
      `Contact: ${form.contact}`,
      `Preferred date: ${form.date}`,
      `Guests: ${form.adults} adults, ${form.children} children`,
      form.dietary ? `Dietary needs: ${form.dietary}` : null,
      form.notes ? `Notes: ${form.notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ivory/80">
            Your name *
          </label>
          <input
            className={inputClass}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ivory/80">
            WhatsApp or email *
          </label>
          <input
            className={inputClass}
            value={form.contact}
            onChange={(e) => update("contact", e.target.value)}
            placeholder="+1 555 000 0000"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ivory/80">
            Preferred date *
          </label>
          <input
            type="date"
            className={inputClass}
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ivory/80">
            Adults
          </label>
          <input
            type="number"
            min={1}
            className={inputClass}
            value={form.adults}
            onChange={(e) => update("adults", e.target.value)}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ivory/80">
            Children
          </label>
          <input
            type="number"
            min={0}
            className={inputClass}
            value={form.children}
            onChange={(e) => update("children", e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-ivory/80">
          Dietary needs or allergies
        </label>
        <input
          className={inputClass}
          value={form.dietary}
          onChange={(e) => update("dietary", e.target.value)}
          placeholder="Vegetarian, nut allergy, etc."
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-ivory/80">
          Anything else we should know?
        </label>
        <textarea
          className={inputClass}
          rows={3}
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
          placeholder="Group occasion, transport needs, etc."
        />
      </div>

      {error && <p className="text-sm text-terracotta">{error}</p>}

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-3.5 text-sm font-semibold text-ivory transition-colors hover:bg-terracotta-light sm:w-auto"
      >
        Send via WhatsApp
        <Send size={16} />
      </button>
      <p className="text-xs text-ivory/50">
        This opens WhatsApp with your details filled in   nothing is sent
        automatically. Your host, {business.name}, will confirm availability
        and final price directly.
      </p>
    </form>
  );
}
