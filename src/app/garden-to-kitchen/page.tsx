import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import FinalCta from "@/components/home/FinalCta";
import { bannerImages, ingredientImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Garden to Kitchen | Sigma House Nature Kitchen",
  description:
    "Curry leaves, chillies, and herbs grown steps from the kitchen   see what comes from the garden and what's sourced from the village.",
};

const ingredients = [
  {
    name: "Curry leaves & herbs",
    source: "Grown in the garden",
    image: ingredientImages.curryLeavesAndHerbs,
  },
  {
    name: "Chillies & green vegetables",
    source: "Grown in the garden",
    image: ingredientImages.chilliesAndVegetables,
  },
  {
    name: "Rice, spices & coconut",
    source: "Sourced from the village",
    image: ingredientImages.riceSpicesAndCoconut,
  },
];

export default function GardenToKitchenPage() {
  return (
    <>
      <PageHero
        eyebrow="Garden to kitchen"
        title="Grown steps away, cooked the same day"
        description="We'll always tell you which ingredients came from our own garden and which were sourced locally   no unverified claims, just what's true."
        image={bannerImages.kitchenPavilion}
      />

      <section className="bg-charcoal py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Where it comes from"
            title="From soil to curry pot"
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {ingredients.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.08}>
                <div className="rounded-2xl border border-ivory/10 bg-white/5 p-6 text-center shadow-sm">
                  <PhotoPlaceholder
                    label={item.name}
                    image={item.image}
                    tone={i === 1 ? "terracotta" : "gold"}
                    className="aspect-square"
                  />
                  <h3 className="mt-4 font-display text-lg text-ivory">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-ivory/55">{item.source}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mx-auto mt-12 max-w-2xl text-center text-sm text-ivory/55">
            We avoid making organic or sustainability claims we can&rsquo;t
            prove. What we can promise is freshness   most herbs and
            vegetables are picked the same morning you cook with them.
          </Reveal>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
