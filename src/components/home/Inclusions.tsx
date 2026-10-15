import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import Button from "../Button";
import { inclusions, pricingNote, pricingTiers, whatsappLink } from "@/lib/content";
import { bannerImages } from "@/lib/images";

export default function Inclusions() {
  return (
    <section className="grain-texture relative overflow-hidden bg-gradient-to-b from-charcoal via-surface to-charcoal py-20 text-ivory sm:py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-terracotta/10 blur-3xl" />
      <Container className="relative">
        <SectionHeading
          eyebrow="What's included"
          title="Everything you need for a full cooking day"
          dark
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={bannerImages.cookingTogether}
                alt="Guests preparing ingredients together at the Sigma House kitchen counter"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="space-y-3.5">
              {inclusions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-gold-light" />
                  <span className="text-sm leading-relaxed text-ivory/85 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-20">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-gold-light">
            Pricing per person (USD)
          </p>
          <div className="grid gap-4 sm:grid-cols-4">
            {pricingTiers.map((tier, i) => (
              <Reveal key={tier.guests} delay={i * 0.08}>
                <div className="flex h-full flex-col items-center rounded-2xl border border-ivory/15 bg-ivory/5 p-6 text-center transition-colors hover:bg-ivory/10">
                  <p className="text-sm text-ivory/70">{tier.guests}</p>
                  <p className="mt-2 font-display text-3xl text-gold-light">
                    ${tier.pricePerPerson}
                  </p>
                  {tier.note && (
                    <p className="mt-2 text-xs text-ivory/60">{tier.note}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-ivory/60">
            {pricingNote}
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              href={whatsappLink("Hi! Can you tell me more about pricing for a group?")}
              external
              variant="primary"
            >
              Ask About Pricing
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
