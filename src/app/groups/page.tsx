import type { Metadata } from "next";
import { Heart, Plane, Users2, UsersRound } from "lucide-react";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { whatsappLink } from "@/lib/content";
import { bannerImages } from "@/lib/images";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Private Sri Lankan Cooking Classes for Groups & Families",
  description:
    "Private Sri Lankan cooking classes for couples, families, small groups of up to 8 guests and travel agents, tailored to your group's size and interests.",
  path: "/groups",
  extraKeywords: ["private cooking class Sri Lanka", "group cooking class Sri Lanka"],
});

const groupTypes = [
  {
    icon: Heart,
    title: "Couples",
    description: "An intimate hands-on session for two, with full attention from your host.",
  },
  {
    icon: UsersRound,
    title: "Families",
    description: "Kid-friendly tasks and pacing, with options to adjust spice levels for younger guests.",
  },
  {
    icon: Users2,
    title: "Small groups",
    description: "Friends travelling together   up to 8 guests per session, cooking as one group.",
  },
  {
    icon: Plane,
    title: "Travel agents & partners",
    description: "Ask about partner rates, booking lead times, and a one-page info sheet for your clients.",
  },
];

export default function GroupsPage() {
  return (
    <>
      <PageHero
        eyebrow="For groups & private classes"
        title="Private Sri Lankan cooking classes for groups & families"
        description="Tell us your group size and interests   we'll confirm what's possible and the right price for your group."
        image={bannerImages.cookingTogether}
      />

      <section className="bg-charcoal py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Who we host" title="Find your group below" />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {groupTypes.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="flex h-full flex-col items-center rounded-2xl border border-ivory/10 bg-white/5 p-6 text-center shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-terracotta/15 text-terracotta-light">
                    <item.icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-lg text-ivory">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ivory/65">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mt-14 text-center">
            <Button
              href={whatsappLink("Hi! I'm enquiring about a private/group cooking class.")}
              external
              variant="primary"
            >
              Ask About Your Group
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
