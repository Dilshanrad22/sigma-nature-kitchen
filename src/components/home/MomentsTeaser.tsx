import { Camera, ChefHat, Flame, Users } from "lucide-react";
import Container from "../Container";
import Reveal from "../Reveal";
import PhotoTile from "../PhotoTile";
import Button from "../Button";

const tiles = [
  { title: "Welcome drink", subtitle: "King coconut on arrival", icon: Camera, tone: "gold" as const },
  { title: "Spice table", subtitle: "Smell, touch, taste", icon: ChefHat, tone: "terracotta" as const },
  { title: "Cooking over fire", subtitle: "The clay hearth", icon: Flame, tone: "forest" as const },
  { title: "Shared meal", subtitle: "Guests at the table", icon: Users, tone: "gold" as const },
];

export default function MomentsTeaser() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
              Visual moments
            </p>
            <h2 className="font-display text-3xl text-ivory sm:text-4xl">
              A glimpse of the kitchen
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/gallery" variant="ghost">
              View full gallery
            </Button>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((tile, i) => (
            <Reveal key={tile.title} delay={i * 0.06}>
              <PhotoTile {...tile} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
