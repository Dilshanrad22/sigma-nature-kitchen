import { MessageCircle } from "lucide-react";
import Container from "../Container";
import Reveal from "../Reveal";
import Button from "../Button";
import { whatsappLink } from "@/lib/content";

export default function FinalCta() {
  return (
    <section className="grain-texture bg-gradient-to-br from-terracotta via-terracotta-light to-gold py-20 text-ivory sm:py-28">
      <Container className="text-center">
        <Reveal>
          <h2 className="font-display text-balance text-3xl sm:text-5xl">
            Cook with us. Taste Sri Lanka.
            <br />
            Take the memories home.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-balance text-ivory/90">
            Sessions are limited to keep every group hands-on. Message us to
            check your date.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href={whatsappLink("Hi! I'd like to reserve a cooking experience.")}
              external
              variant="secondary"
              className="bg-ivory text-terracotta hover:bg-ivory/90"
              icon={<MessageCircle size={16} />}
            >
              Reserve on WhatsApp
            </Button>
            <Button
              href="/faq"
              variant="ghost"
              className="border-ivory/50 text-ivory hover:bg-ivory hover:text-terracotta"
            >
              Read the FAQ
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
