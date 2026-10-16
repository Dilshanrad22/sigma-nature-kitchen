import type { Metadata } from "next";
import { Utensils, Info } from "lucide-react";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import FinalCta from "@/components/home/FinalCta";
import { dishes } from "@/lib/content";
import { bannerImages } from "@/lib/images";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Traditional Sri Lankan Dishes You'll Cook",
  description:
    "Seasonal Sri Lankan dishes you'll cook by hand: pol sambol, dhal curry, jackfruit curry, egg hoppers and papadam, with vegetarian, vegan and spice-level guidance.",
  path: "/menu",
  extraKeywords: ["Sri Lankan dishes", "Sri Lankan rice and curry"],
});

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="Menu & dishes"
        title="What you'll cook, season by season"
        description="The exact menu shifts with what's fresh in the garden, but it's always built around rice, curry, coconut, and fire."
        image={bannerImages.platedFeast}
      />

      <section className="bg-charcoal py-20 sm:py-28">
        <Container>
          <Reveal className="mb-10 flex items-start gap-3 rounded-2xl border border-gold/30 bg-gold/10 p-5 text-sm text-ivory/80">
            <Info size={20} className="mt-0.5 shrink-0 text-gold-light" />
            <p>
              Let us know about allergies or dietary needs when you reserve.
              We can adapt most dishes to vegetarian or vegan, but not every
              ingredient has a substitute   please confirm serious allergies
              directly with your host.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dishes.map((dish, i) => (
              <Reveal key={dish.name} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-2xl border border-ivory/10 bg-white/5 p-5 shadow-sm">
                  <PhotoPlaceholder
                    label={dish.name}
                    icon={Utensils}
                    tone={i % 2 === 0 ? "terracotta" : "forest"}
                    image={dish.image}
                    className="aspect-[4/3]"
                  />
                  <h3 className="mt-4 font-display text-xl text-ivory">
                    {dish.name}
                  </h3>
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
                  <p className="mt-3 text-xs text-ivory/50">{dish.allergens}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
