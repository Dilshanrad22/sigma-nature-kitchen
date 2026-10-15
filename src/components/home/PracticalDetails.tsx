import { Clock, Globe, MapPin, Users } from "lucide-react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { business } from "@/lib/content";

const details = [
  { icon: Clock, label: "Duration", value: "2.5 – 3 hours" },
  { icon: Users, label: "Group size", value: "1 – 8 guests" },
  { icon: Globe, label: "Language", value: "English" },
  { icon: MapPin, label: "Location", value: business.address },
];

export default function PracticalDetails() {
  return (
    <section className="bg-charcoal py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Good to know" title="Practical details" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {details.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <div className="flex h-full flex-col items-center rounded-2xl border border-ivory/10 bg-white/5 p-6 text-center shadow-sm">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-terracotta/15 text-terracotta-light">
                  <item.icon size={22} strokeWidth={1.75} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ivory/50">
                  {item.label}
                </p>
                <p className="mt-1.5 text-sm font-medium text-ivory">
                  {item.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-6 text-center text-sm text-ivory/55">
          {business.schedule.display}
        </Reveal>
      </Container>
    </section>
  );
}
