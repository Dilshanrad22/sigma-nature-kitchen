import Hero from "@/components/home/Hero";
import Promises from "@/components/home/Promises";
import MeetHost from "@/components/home/MeetHost";
import WhyGuestsLoveThis from "@/components/home/WhyGuestsLoveThis";
import MomentsTeaser from "@/components/home/MomentsTeaser";
import JourneyTimeline from "@/components/home/JourneyTimeline";
import Inclusions from "@/components/home/Inclusions";
import SignatureDishes from "@/components/home/SignatureDishes";
import GardenStory from "@/components/home/GardenStory";
import GuestReviews from "@/components/home/GuestReviews";
import PracticalDetails from "@/components/home/PracticalDetails";
import FaqPreview from "@/components/home/FaqPreview";
import FinalCta from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Promises />
      <MeetHost />
      <WhyGuestsLoveThis />
      <MomentsTeaser />
      <JourneyTimeline />
      <Inclusions />
      <SignatureDishes />
      <GardenStory />
      <GuestReviews />
      <PracticalDetails />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
