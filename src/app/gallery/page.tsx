import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import GalleryFilter, { type GalleryItem } from "@/components/GalleryFilter";
import { bannerImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery | Sigma House Nature Kitchen",
  description: "Moments from the Sigma House Nature Kitchen cooking experience.",
};

const galleryItems: GalleryItem[] = [
  { label: "Welcome king coconut", icon: "Sparkles", tone: "gold", category: "Guests" },
  { label: "Meeting your host", icon: "Users", tone: "forest", category: "Guests" },
  { label: "Guests cooking together", icon: "Users", tone: "terracotta", category: "Guests", image: bannerImages.cookingTogether },
  { label: "Spice introduction", icon: "Leaf", tone: "terracotta", category: "Spices" },
  { label: "Roasted curry powder", icon: "Leaf", tone: "gold", category: "Spices" },
  { label: "Hands preparing ingredients", icon: "ChefHat", tone: "forest", category: "Kitchen" },
  { label: "Cooking over the fire", icon: "Flame", tone: "terracotta", category: "Kitchen" },
  { label: "The open-air kitchen pavilion", icon: "Flame", tone: "charcoal", category: "Kitchen", image: bannerImages.kitchenPavilion },
  { label: "The plated meal", icon: "Soup", tone: "gold", category: "Food", image: bannerImages.platedFeast },
  { label: "Rice and curry spread", icon: "Soup", tone: "terracotta", category: "Food" },
  { label: "Garden herbs and curry leaves", icon: "Sprout", tone: "gold", category: "Garden" },
  { label: "Picking vegetables in the garden", icon: "Sprout", tone: "forest", category: "Garden" },
  { label: "Behind the scenes in the kitchen", icon: "Camera", tone: "terracotta", category: "Kitchen" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments from the kitchen"
        description="Real photos from real sessions will go here — each tile below marks exactly where, organised the way you'd browse them."
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
