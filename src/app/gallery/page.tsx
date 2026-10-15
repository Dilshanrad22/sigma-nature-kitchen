import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import GalleryFilter, { type GalleryItem } from "@/components/GalleryFilter";
import { bannerImages, galleryImages } from "@/lib/images";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Photos of Our Sri Lankan Cooking Class",
  description:
    "Real photos from Sigma House Nature Kitchen: spice introductions, cooking over the fire, garden herbs and the rice and curry spread guests make together.",
  path: "/gallery",
  extraKeywords: ["Sri Lankan cooking class photos"],
});

const galleryItems: GalleryItem[] = [
  { label: "Welcome king coconut", icon: "Sparkles", tone: "gold", category: "Guests", image: galleryImages.welcomeKingCoconut },
  { label: "Meeting your host", icon: "Users", tone: "forest", category: "Guests", image: galleryImages.meetingYourHost },
  { label: "Guests cooking together", icon: "Users", tone: "terracotta", category: "Guests", image: bannerImages.cookingTogether },
  { label: "Spice introduction", icon: "Leaf", tone: "terracotta", category: "Spices", image: galleryImages.spiceIntroduction },
  { label: "Roasted curry powder", icon: "Leaf", tone: "gold", category: "Spices", image: galleryImages.roastedCurryPowder },
  { label: "Hands preparing ingredients", icon: "ChefHat", tone: "forest", category: "Kitchen", image: galleryImages.handsPreparingIngredients },
  { label: "Cooking over the fire", icon: "Flame", tone: "terracotta", category: "Kitchen", image: galleryImages.cookingOverTheFire },
  { label: "The open-air kitchen pavilion", icon: "Flame", tone: "charcoal", category: "Kitchen", image: bannerImages.kitchenPavilion },
  { label: "The plated meal", icon: "Soup", tone: "gold", category: "Food", image: bannerImages.platedFeast },
  { label: "Rice and curry spread", icon: "Soup", tone: "terracotta", category: "Food", image: galleryImages.riceAndCurrySpread },
  { label: "Garden herbs and curry leaves", icon: "Sprout", tone: "gold", category: "Garden", image: galleryImages.gardenHerbs },
  { label: "Picking vegetables in the garden", icon: "Sprout", tone: "forest", category: "Garden", image: galleryImages.pickingVegetables },
  { label: "Behind the scenes in the kitchen", icon: "Camera", tone: "terracotta", category: "Kitchen", image: galleryImages.behindTheScenes },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments from the kitchen"
        description="Real photos from real sessions at Sigma House Nature Kitchen."
        image={bannerImages.kitchenPavilion}
      />

      <section className="bg-charcoal py-20 sm:py-28">
        <Container>
          <GalleryFilter items={galleryItems} />
        </Container>
      </section>
    </>
  );
}
