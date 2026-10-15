import { BookOpen, ChefHat, Utensils, type LucideIcon } from "lucide-react";
import Container from "../Container";
import Reveal from "../Reveal";
import { promises } from "@/lib/content";

const icons: Record<string, LucideIcon> = { ChefHat, BookOpen, Utensils };

export default function Promises() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-6 sm:grid-cols-3">
          {promises.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={i * 0.12}>
                <div className="group h-full rounded-3xl border border-ivory/10 bg-white/4 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lg hover:shadow-black/20">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold-light transition-colors duration-300 group-hover:bg-gold group-hover:text-charcoal">
                    <Icon size={26} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-2xl text-ivory">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/65">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
