import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import FaqAccordion from "@/components/FaqAccordion";
import FinalCta from "@/components/home/FinalCta";
import { faqs } from "@/lib/content";
import { bannerImages } from "@/lib/images";
import { faqJsonLd, jsonLdScript, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Sri Lankan Cooking Class FAQ",
  description:
    "Answers about the Sigma House Nature Kitchen cooking class: session length, vegetarian and vegan options, children, transport, schedule and how to book.",
  path: "/faq",
  extraKeywords: ["cooking class Sri Lanka FAQ"],
});

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(faqJsonLd)} />
      <PageHero eyebrow="FAQ" title="Frequently asked questions" image={bannerImages.kitchenPavilion} />

      <section className="bg-charcoal py-20 sm:py-28">
        <Container className="max-w-3xl">
          <FaqAccordion items={faqs} />
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
