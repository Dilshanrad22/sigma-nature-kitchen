import type { Metadata } from "next";
import { Flame, Leaf, Sprout, UserRound, Users2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import PhotoTile from "@/components/PhotoTile";
import Button from "@/components/Button";
import FinalCta from "@/components/home/FinalCta";
import { heroCopy, whatsappLink } from "@/lib/content";
import { bannerImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "About | Sigma House Nature Kitchen",
  description:
    "The story behind Sigma House Nature Kitchen — a small, hands-on Sri Lankan cooking experience hosted at home, not at a tourist venue.",
};

const highlights = [
  { title: "Open-fire cooking", icon: Flame, tone: "terracotta" as const },
  { title: "Garden spices", icon: Sprout, tone: "gold" as const },
  { title: "Intimate groups", icon: Users2, tone: "forest" as const },
  { title: "Take-home recipes", icon: Leaf, tone: "gold" as const },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="A home kitchen, not a tourist venue"
        description="Sigma House Nature Kitchen started as a way to share real family cooking with travellers — not a staged demo, a genuine morning in the kitchen."
        image={bannerImages.cookingTogether}
      />

      <section className="bg-charcoal py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-light">
              Why we started
            </p>
            <h2 className="font-display text-balance text-3xl text-ivory sm:text-4xl">
              Family recipes, an open garden, and no shortcuts
            </h2>
            <p className="mt-4 text-balance text-base leading-relaxed text-ivory/65 sm:text-lg">
              Everything you cook with us comes from recipes passed down
              through the family, made with ingredients picked the same
              morning where possible. There&rsquo;s no script and no
              performance — just a kitchen, a fire, and time to cook
              properly.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button
                href={whatsappLink("Hi! I'd like to reserve a cooking experience.")}
                external
                variant="primary"
              >
                Reserve a Session
              </Button>
              <Button href="/cooking-experience" variant="ghost">
                View Cooking Experience
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <PhotoPlaceholder
              label="Portrait of your host in the kitchen"
              icon={UserRound}
              tone="forest"
              className="aspect-[4/3]"
            />
            <p className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              {heroCopy.eyebrow}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-light">
              What to expect
            </p>
            <h2 className="font-display text-3xl text-ivory sm:text-4xl">
              A 2.5–3 hour hands-on class
            </h2>
            <p className="mt-4 text-ivory/65">
              Rice, two or three curries, a sambol, and dessert — all cooked
              from scratch over an open fire, with spices introduced along
              the way.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <PhotoTile title={item.title} icon={item.icon} tone={item.tone} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
