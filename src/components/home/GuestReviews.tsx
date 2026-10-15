import { Star } from "lucide-react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import Button from "../Button";

// Layout placeholders only   replace with real, permissioned guest reviews
// before launch (see master plan: "never invent testimonials").
const sampleReviews = [
  {
    name: "Guest name (sample)",
    location: "Country (sample)",
    quote:
      "Replace this with a real, permissioned guest quote once reviews are collected.",
  },
  {
    name: "Guest name (sample)",
    location: "Country (sample)",
    quote:
      "Replace this with a real, permissioned guest quote once reviews are collected.",
  },
  {
    name: "Guest name (sample)",
    location: "Country (sample)",
    quote:
      "Replace this with a real, permissioned guest quote once reviews are collected.",
  },
];

export default function GuestReviews() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Guest stories"
          title="What guests say after cooking with us"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {sampleReviews.map((review, i) => (
            <Reveal key={review.name + i} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-dashed border-ivory/20 bg-white/5 p-6">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-4 text-sm italic leading-relaxed text-ivory/70">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <p className="mt-4 text-sm font-semibold text-ivory">
                  {review.name}
                </p>
                <p className="text-xs text-ivory/50">{review.location}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-ivory/50">
          Placeholder layout   replace with verified, permissioned reviews before launch.
        </p>
        <div className="mt-6 text-center">
          <Button href="/reviews" variant="ghost">
            Read all reviews
          </Button>
        </div>
      </Container>
    </section>
  );
}
