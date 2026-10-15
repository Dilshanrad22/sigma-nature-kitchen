import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import FaqAccordion from "@/components/FaqAccordion";
import FinalCta from "@/components/home/FinalCta";
import { faqs } from "@/lib/content";
import { bannerImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "FAQ | Sigma House Nature Kitchen",
  description: "Frequently asked questions about the Sigma House Nature Kitchen cooking experience.",
};

export default function FaqPage() {
  return (
    <>
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
