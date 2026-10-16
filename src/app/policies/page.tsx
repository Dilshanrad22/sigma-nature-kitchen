import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { policies } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Booking & Cancellation Policies",
  description:
    "Cancellation, late arrival, dietary and allergen, children and photography policies for the Sigma House Nature Kitchen cooking experience.",
  path: "/policies",
});

const sections = [
  { title: "Cancellation & Refunds", body: policies.cancellation },
  { title: "Late Arrival", body: policies.lateArrival },
  { title: "Dietary & Allergen Handling", body: policies.dietary },
  { title: "Child Participation", body: policies.children },
  { title: "Photography & Consent", body: policies.photography },
];

export default function PoliciesPage() {
  return (
    <>
      <PageHero eyebrow="Policies" title="Booking & cancellation policies" />

      <section className="bg-charcoal py-20 sm:py-28">
        <Container className="max-w-3xl space-y-8">
          {sections.map((section, i) => (
            <Reveal key={section.title} delay={i * 0.05}>
              <div className="rounded-2xl border border-ivory/10 bg-white/5 p-6">
                <h2 className="font-display text-xl text-ivory">{section.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ivory/65">
                  {section.body}
                </p>
              </div>
            </Reveal>
          ))}
          <p className="text-center text-xs text-ivory/50">
            These policies contain placeholder terms and must be reviewed and
            confirmed by the business owner before publishing.
          </p>
        </Container>
      </section>
    </>
  );
}
