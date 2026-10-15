import { Camera, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const gradients = {
  forest: "from-forest via-forest-light to-charcoal",
  terracotta: "from-terracotta via-terracotta-light to-gold",
  gold: "from-gold via-gold-light to-terracotta",
  charcoal: "from-charcoal via-forest to-forest-light",
};

export default function PhotoPlaceholder({
  label,
  icon: Icon = Camera,
  tone = "forest",
  className,
}: {
  label: string;
  icon?: LucideIcon;
  tone?: keyof typeof gradients;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grain-texture relative flex items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br text-center",
        gradients[tone],
        className
      )}
    >
      <div className="flex flex-col items-center gap-3 px-6 py-10 text-ivory/90">
        <Icon size={32} className="opacity-80" strokeWidth={1.5} />
        <p className="max-w-[16rem] text-sm font-medium leading-snug opacity-90">
          {label}
        </p>
        <span className="rounded-full bg-ivory/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider">
          Photo placeholder
        </span>
      </div>
    </div>
  );
}
