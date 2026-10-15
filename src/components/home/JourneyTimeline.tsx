import Container from "../Container";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { journeySteps } from "@/lib/content";

export default function JourneyTimeline() {
  return (
    <section className="bg-charcoal py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Your experience, step by step"
          description="From welcome drink to shared meal   every step is hands-on, guided, and unhurried."
        />

        <div className="relative mt-16">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-forest/30 via-terracotta/30 to-gold/30 sm:block lg:left-1/2" />

          <div className="space-y-10 lg:space-y-16">
            {journeySteps.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <Reveal key={item.step} delay={i * 0.08}>
                  <div
                    className={`relative flex flex-col gap-4 sm:flex-row sm:items-center ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`flex-1 ${
                        isEven ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12"
                      }`}
                    >
                      <div className="rounded-2xl border border-ivory/10 bg-white/5 p-6 shadow-sm">
                        <h3 className="font-display text-xl text-ivory">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-ivory/65">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="order-first flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terracotta font-display text-sm text-ivory shadow-md sm:order-none lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                      {item.step}
                    </div>

                    <div className="hidden flex-1 lg:block" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
