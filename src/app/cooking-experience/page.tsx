import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { bannerImages } from "@/lib/images";
import JourneyTimeline from "@/components/home/JourneyTimeline";
import Inclusions from "@/components/home/Inclusions";
import PracticalDetails from "@/components/home/PracticalDetails";
import FinalCta from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Cooking Experience | Sigma House Nature Kitchen",
  description:
    "A hands-on Sri Lankan village cooking experience: welcome drink, spice introduction, cooking over fire, and a shared meal.",
};

export default function CookingExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="The experience"
        title="A full afternoon of hands-on cooking"
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
