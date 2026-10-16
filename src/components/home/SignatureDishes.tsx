import { Utensils } from "lucide-react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import PhotoPlaceholder from "../PhotoPlaceholder";
import Button from "../Button";
import { dishes } from "@/lib/content";

export default function SignatureDishes() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="On the table"
          title="Signature Sri Lankan dishes you'll cook"
          description="A rotating, seasonal menu built around what's fresh in the garden   every dish made from scratch, with you."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {dishes.slice(0, 4).map((dish, i) => (
            <Reveal key={dish.name} delay={i * 0.08}>
              <div className="flex gap-5 rounded-2xl border border-ivory/10 bg-white/5 p-5 shadow-sm transition-all hover:border-gold/30">
                <PhotoPlaceholder
                  label={dish.name}
                  icon={Utensils}
                  tone={i % 2 === 0 ? "terracotta" : "forest"}
                  image={dish.image}
                  className="aspect-square w-28 shrink-0 sm:w-32"
                />
                <div>
                  <h3 className="font-display text-xl text-ivory">{dish.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ivory/65">
                    {dish.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {dish.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gold/10 px-2.5 py-1 text-xs font-medium text-gold-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/menu" variant="ghost">
            See the full menu
          </Button>
        </div>
      </Container>
    </section>
  );
}
