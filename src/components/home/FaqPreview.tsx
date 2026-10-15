import Container from "../Container";
import SectionHeading from "../SectionHeading";
import FaqAccordion from "../FaqAccordion";
import Button from "../Button";
import { faqs } from "@/lib/content";

export default function FaqPreview() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="Questions" title="A few things guests ask" />

        <div className="mt-10">
          <FaqAccordion items={faqs.slice(0, 3)} />
        </div>

        <div className="mt-8 text-center">
          <Button href="/faq" variant="ghost">
            See all FAQs
          </Button>
        </div>
      </Container>
    </section>
  );
}
