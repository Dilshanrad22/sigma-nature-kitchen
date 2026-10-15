import type { Metadata } from "next";
import { Star, AlertTriangle, ExternalLink, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { whatsappLink } from "@/lib/content";
import { bannerImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Reviews | Sigma House Nature Kitchen",
  description: "Guest reviews from the Sigma House Nature Kitchen cooking experience.",
};

// Platform cards — wire up to real profiles and real ratings once the
// business has them. Do not fill in numbers that aren't verified.
const platforms = [
  { name: "Google", rating: "—", count: "Not yet listed", url: "#" },
  { name: "TripAdvisor", rating: "—", count: "Not yet listed", url: "#" },
  { name: "Facebook", rating: "—", count: "Not yet listed", url: "#" },
];

// Layout placeholders only. Replace every entry with a real, permissioned
// review and link back to its original platform before this page goes
// live — never publish invented testimonials.
const placeholderReviews = Array.from({ length: 6 }).map((_, i) => ({
  name: `Guest name ${i + 1} (sample)`,
  location: "Country (sample)",
  quote:
    "Replace with a real, permissioned guest review and a link to its source platform.",
}));

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Guest feedback"
        title="Reviews from our guests"
        description="Every review here will be real, permissioned, and linked back to its original source once collected."
        image={bannerImages.beachPalms1}
      />

      <section className="bg-charcoal pt-20 sm:pt-28">
        <Container>
          <div className="grid gap-5 sm:grid-cols-3">
            {platforms.map((platform, i) => (
              <Reveal key={platform.name} delay={i * 0.08}>
                <a
                  href={platform.url}
                  className="flex h-full flex-col items-center gap-1 rounded-2xl border border-ivory/10 bg-white/5 p-6 text-center shadow-sm transition-shadow hover:border-gold/30"
                >
                  <p className="text-sm font-semibold text-ivory">{platform.name}</p>
                  <p className="font-display text-3xl text-terracotta-light">
                    {platform.rating}
                  </p>
                  <p className="text-xs text-ivory/50">{platform.count}</p>
                  <span className="mt-2 flex items-center gap-1 text-xs font-medium text-ivory/60">
                    View profile <ExternalLink size={12} />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-ivory/50">
            Connect real Google / TripAdvisor / Facebook review links once available.
          </p>
        </Container>
      </section>

      <section className="bg-charcoal py-20 sm:py-28">
        <Container>
          <Reveal className="mb-10 flex items-start gap-3 rounded-2xl border border-terracotta/30 bg-terracotta/10 p-5 text-sm text-ivory/80">
            <AlertTriangle size={20} className="mt-0.5 shrink-0 text-terracotta-light" />
            <p>
              The cards below are layout placeholders, not real guest
              feedback. Replace each one with a genuine, permissioned review
              before launch.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {placeholderReviews.map((review, i) => (
              <Reveal key={review.name} delay={i * 0.06}>
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
        </Container>
      </section>

      <section className="grain-texture bg-forest py-16 text-center text-ivory">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl sm:text-3xl">
              Cooked with us? Share your review.
            </h2>
            <div className="mt-6">
              <Button
                href={whatsappLink("Hi! I'd like to share a review of my cooking experience.")}
                external
                variant="primary"
                icon={<MessageCircle size={16} />}
              >
                Join Us & Share Your Review
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
