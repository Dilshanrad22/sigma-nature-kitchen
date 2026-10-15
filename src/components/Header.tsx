"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Menu, X } from "lucide-react";
import Container from "./Container";
import { business, nav, whatsappLink } from "@/lib/content";
import { FacebookIcon, InstagramIcon } from "./icons/SocialIcons";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-ivory/10 bg-charcoal/90 backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-charcoal/70 via-charcoal/30 to-transparent"
      )}
    >
      <Container className="flex h-[4.5rem] items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-gold/40">
            <Image src="/logo.jpeg" alt="Sigma House Nature Kitchen" fill sizes="44px" className="object-cover" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-xl text-ivory sm:text-2xl">
              Sigma House
            </span>
            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-light sm:inline">
              Nature Kitchen
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {nav.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative whitespace-nowrap py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition-colors",
                  isActive ? "text-gold-light" : "text-ivory/75 hover:text-ivory"
                )}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <div className="flex items-center gap-2">
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-ivory/10 text-ivory/80 transition-colors hover:bg-ivory/20 hover:text-gold-light"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href={business.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-ivory/10 text-ivory/80 transition-colors hover:bg-ivory/20 hover:text-gold-light"
            >
              <FacebookIcon size={16} />
            </a>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Find us on Google Maps"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-ivory/10 text-ivory/80 transition-colors hover:bg-ivory/20 hover:text-gold-light"
            >
              <MapPin size={16} />
            </a>
          </div>
          <a
            href={whatsappLink("Hi! I'd like to reserve a cooking experience.")}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-charcoal shadow-sm shadow-gold/30 transition-colors hover:bg-gold-light"
          >
            Reserve a Session
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-ivory xl:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-ivory/10 bg-charcoal xl:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-ivory/80 hover:bg-ivory/5 hover:text-ivory"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={whatsappLink("Hi! I'd like to reserve a cooking experience.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-full bg-gold px-5 py-2.5 text-center text-sm font-semibold text-charcoal"
              >
                Reserve a Session
              </a>
              <div className="mt-3 flex items-center justify-center gap-2">
                <a
                  href={business.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-ivory/10 text-ivory/80 hover:bg-ivory/20 hover:text-gold-light"
                >
                  <InstagramIcon size={16} />
                </a>
                <a
                  href={business.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-ivory/10 text-ivory/80 hover:bg-ivory/20 hover:text-gold-light"
                >
                  <FacebookIcon size={16} />
                </a>
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Find us on Google Maps"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-ivory/10 text-ivory/80 hover:bg-ivory/20 hover:text-gold-light"
                >
                  <MapPin size={16} />
                </a>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
