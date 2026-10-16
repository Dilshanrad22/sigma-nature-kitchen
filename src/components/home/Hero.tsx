"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChefHat, ChevronLeft, ChevronRight, Globe2, Leaf, Users } from "lucide-react";
import Container from "../Container";
import Button from "../Button";
import { heroCopy, whatsappLink } from "@/lib/content";
import { heroSlideAlts, heroSlides as slides } from "@/lib/images";

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[92vh] min-h-[640px] overflow-hidden text-ivory">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index]}
            alt={heroSlideAlts[index]}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/85" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-forest/25 blur-3xl" />

      <Container className="relative flex h-full flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-2 rounded-full border border-gold-light/30 bg-ivory/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light backdrop-blur-sm"
        >
          <ChefHat size={14} />
          {heroCopy.eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-balance text-4xl leading-tight sm:text-6xl lg:text-7xl"
        >
          <span className="text-ivory">Authentic Sri Lankan Cooking Class</span>
          <br />
          <span className="text-gold-light">with a Local Family</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-balance text-base text-ivory/85 sm:text-lg"
        >
          {heroCopy.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button
            href={whatsappLink("Hi! I'd like to reserve a cooking experience.")}
            external
            variant="primary"
            icon={<ArrowRight size={16} />}
          >
            {heroCopy.primaryCta}
          </Button>
          <Button
            href="/cooking-experience"
            variant="ghost"
            className="border-ivory/40 text-ivory hover:bg-ivory hover:text-forest"
          >
            {heroCopy.secondaryCta}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-ivory/70"
        >
          <span className="flex items-center gap-1.5">
            <Users size={14} /> Small groups only
          </span>
          <span className="flex items-center gap-1.5">
            <Leaf size={14} /> Garden-to-table ingredients
          </span>
          <span className="flex items-center gap-1.5">
            <Globe2 size={14} /> English-speaking host
          </span>
        </motion.div>
      </Container>

      <div className="absolute inset-x-0 bottom-7 flex items-center justify-center gap-4">
        <button
          aria-label="Previous background"
          onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-ivory/25 text-ivory/70 transition-colors hover:border-ivory/50 hover:text-ivory"
        >
          <ChevronLeft size={16} />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to background ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-gold-light" : "w-1.5 bg-ivory/35"
              }`}
            />
          ))}
        </div>
        <button
          aria-label="Next background"
          onClick={() => setIndex((i) => (i + 1) % slides.length)}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-ivory/25 text-ivory/70 transition-colors hover:border-ivory/50 hover:text-ivory"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </section>
  );
}
