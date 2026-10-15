import { Check } from "lucide-react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import Button from "../Button";
import { whatsappLink } from "@/lib/content";

const reasons = [
  { title: "Small groups, every time", description: "Capped guest numbers so every session stays genuinely hands-on." },
  { title: "Cooked, not just watched", description: "You grind, scrape, and stir — your host guides rather than performs." },
  { title: "Open-fire cooking", description: "Traditional clay-hearth technique, not a gas-stove demo." },
  { title: "Garden-fresh ingredients", description: "Herbs and vegetables picked the same morning where possible." },
  { title: "Dietary needs welcomed", description: "Vegetarian and vegan guests accommodated with notice." },
  { title: "Take the recipes home", description: "Notes from your session sent so you can cook it again." },
];

export default function WhyGuestsLoveThis() {
  return (
    <section className="bg-charcoal py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Why guests choose us" title="What makes this experience different" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 0.06}>
              <div className="flex h-full gap-3 rounded-2xl border border-ivory/10 bg-white/5 p-5">
                <Check size={20} className="mt-0.5 shrink-0 text-gold-light" />
                <div>
                  <p className="font-semibold text-ivory">{reason.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ivory/60">
                    {reason.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-10 text-center">
          <Button href={whatsappLink("Hi! I'd like to reserve a cooking experience.")} external variant="primary">
            Book Now
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
