import { Camera, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const gradients = {
  forest: "from-forest via-forest-light to-charcoal",
  terracotta: "from-terracotta via-terracotta-light to-gold",
  gold: "from-gold via-gold-light to-terracotta",
  charcoal: "from-charcoal via-forest to-forest-light",
};

export default function PhotoTile({
  title,
  subtitle,
  icon: Icon = Camera,
  tone = "forest",
  className,
}: {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  tone?: keyof typeof gradients;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grain-texture group relative flex aspect-square items-end overflow-hidden rounded-2xl bg-gradient-to-br",
        gradients[tone],
        className
      )}
    >
      <Icon
        size={28}
        strokeWidth={1.5}
        className="absolute right-4 top-4 text-ivory/50"
      />
      <div className="relative w-full bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent p-4">
        <p className="text-sm font-semibold text-ivory">{title}</p>
        {subtitle && <p className="text-xs text-ivory/70">{subtitle}</p>}
      </div>
    </div>
  );
}
