import { Sprout } from "lucide-react";
import Container from "../Container";
import Reveal from "../Reveal";
import PhotoPlaceholder from "../PhotoPlaceholder";
import Button from "../Button";

export default function GardenStory() {
  return (
    <section className="bg-gradient-to-br from-surface-warm via-charcoal to-surface-warm py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal className="order-2 lg:order-1">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            Garden to kitchen
          </p>
          <h2 className="font-display text-balance text-3xl text-ivory sm:text-4xl">
            Grown steps away, cooked the same day
          </h2>
          <p className="mt-4 text-balance text-base leading-relaxed text-ivory/65 sm:text-lg">
            Curry leaves, chillies, and herbs come straight from the garden
            beside the kitchen. What we don&rsquo;t grow ourselves, we source
            from neighbours in the village — we&rsquo;ll always tell you which
            is which.
          </p>
          <div className="mt-6">
            <Button href="/garden-to-kitchen" variant="ghost">
              See the garden
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <PhotoPlaceholder
            label="Host picking curry leaves and herbs in the garden beside the kitchen"
            icon={Sprout}
            tone="gold"
            className="aspect-[4/3]"
          />
        </Reveal>
      </Container>
    </section>
  );
}
