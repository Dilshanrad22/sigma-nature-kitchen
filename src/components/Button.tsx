import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
  icon?: React.ReactNode;
};

const variants = {
  primary:
    "bg-terracotta text-ivory hover:bg-terracotta-light shadow-md shadow-terracotta/20",
  secondary:
    "bg-forest text-ivory hover:bg-forest-light shadow-md shadow-forest/20",
  ghost:
    "bg-transparent border-2 border-ivory/30 text-ivory hover:border-gold hover:bg-gold/10 hover:text-gold-light",
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className,
  icon,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5",
    variants[variant],
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {icon}
    </Link>
  );
}
