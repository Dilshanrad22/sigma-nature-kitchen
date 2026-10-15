import Container from "../Container";
import Reveal from "../Reveal";
import PhotoPlaceholder from "../PhotoPlaceholder";
import Button from "../Button";
import { hostImages } from "@/lib/images";

export default function MeetHost() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <PhotoPlaceholder
            label="Your host with recent guests"
            image={hostImages.hostWithGuests}
            className="aspect-[4/5] lg:aspect-[4/3]"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            Meet your host
          </p>
          <h2 className="font-display text-balance text-3xl text-ivory sm:text-4xl">
            Cooking taught the way it was taught to us
          </h2>
          <p className="mt-4 text-balance text-base leading-relaxed text-ivory/65 sm:text-lg">
            Host bio placeholder   a short, honest introduction to who leads
            the kitchen, how long they&rsquo;ve been cooking this way, and
            what guests can expect from spending a morning with them.
          </p>
          <div className="mt-6">
            <Button href="/cooking-experience" variant="ghost">
              Learn about the experience
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
