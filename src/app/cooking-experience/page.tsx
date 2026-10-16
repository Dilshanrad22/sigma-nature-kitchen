import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { bannerImages } from "@/lib/images";
import JourneyTimeline from "@/components/home/JourneyTimeline";
import Inclusions from "@/components/home/Inclusions";
import PracticalDetails from "@/components/home/PracticalDetails";
import FinalCta from "@/components/home/FinalCta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Sri Lankan Village Cooking Experience",
  description:
    "Cook authentic Sri Lankan food with a local family: king coconut welcome, spice introduction, rice and curry cooked over an open fire and a shared meal. A real taste of village life and Sri Lanka food traditions.",
  path: "/cooking-experience",
  extraKeywords: ["Sri Lankan cooking lesson", "rice and curry cooking class"],
});

export default function CookingExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="The experience"
        title="Hands-on Sri Lankan village cooking experience"
        description="No spectator seats   every guest cooks alongside their host, from grinding spices to plating the final meal."
        image={bannerImages.cookingTogether}
      />
      <JourneyTimeline />
      <Inclusions />
      <PracticalDetails />
      <FinalCta />
    </>
  );
}
