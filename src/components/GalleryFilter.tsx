"use client";

import { useMemo, useState } from "react";
import {
  Camera,
  ChefHat,
  Flame,
  Leaf,
  Soup,
  Sparkles,
  Sprout,
  Users,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import PhotoPlaceholder from "./PhotoPlaceholder";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  Camera,
  ChefHat,
  Flame,
  Leaf,
  Soup,
  Sparkles,
  Sprout,
  Users,
};

export type GalleryItem = {
  label: string;
  icon: keyof typeof icons;
  tone: "forest" | "terracotta" | "gold" | "charcoal";
  category: string;
  image?: string;
};

export default function GalleryFilter({ items }: { items: GalleryItem[] }) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(items.map((i) => i.category)))],
    [items]
  );
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((category) => {
          const count =
            category === "All"
              ? items.length
              : items.filter((i) => i.category === category).length;
          return (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                active === category
                  ? "border-terracotta bg-terracotta text-ivory"
                  : "border-ivory/15 bg-white/5 text-ivory/65 hover:border-gold/40"
              )}
            >
              {category} ({count})
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((item, i) => (
          <Reveal key={item.label} delay={(i % 8) * 0.05}>
            <PhotoPlaceholder
              label={item.label}
              icon={icons[item.icon]}
              tone={item.tone}
              image={item.image}
              className="aspect-square"
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
