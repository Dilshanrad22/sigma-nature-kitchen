import { CheckCircle2, Leaf } from "lucide-react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import PhotoPlaceholder from "../PhotoPlaceholder";
import Button from "../Button";
import { inclusions, pricingTiers, whatsappLink } from "@/lib/content";

export default function Inclusions() {
  return (
    <section className="grain-texture bg-charcoal py-20 text-ivory sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What's included"
          title="Everything you need for a full cooking day"
          dark
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <PhotoPlaceholder
              label="Guests scraping coconut and preparing ingredients at the kitchen pavilion"
              icon={Leaf}
              tone="gold"
              className="aspect-[4/3]"
            />
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
          <p className="mt-6 text-center text-xs text-ivory/50">
            Example rates — confirm current pricing before publishing.
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
