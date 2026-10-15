"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CookingPot } from "lucide-react";

export default function Splash() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem("sigma-splash-seen") === "1";
    } catch {
      alreadySeen = false;
    }

    if (alreadySeen) return;

    setVisible(true);
    const duration = shouldReduceMotion ? 400 : 1800;
    const timer = setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem("sigma-splash-seen", "1");
      } catch {
        // ignore storage failures (private mode, blocked storage, etc.)
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-charcoal via-forest to-charcoal"
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gold/15"
            >
              <CookingPot size={36} className="text-gold-light" strokeWidth={1.5} />
              {!shouldReduceMotion && (
                <>
                  <motion.span
                    animate={{ y: [-4, -18, -4], opacity: [0, 0.6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                    className="absolute -top-2 left-1/2 h-4 w-1 -translate-x-3 rounded-full bg-ivory/40"
                  />
                  <motion.span
                    animate={{ y: [-4, -20, -4], opacity: [0, 0.5, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -top-2 left-1/2 h-4 w-1 translate-x-2 rounded-full bg-ivory/40"
                  />
                </>
              )}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-5 font-display text-2xl text-ivory"
            >
              Sigma House
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="my-2 h-px w-10 bg-gold-light/60"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light/80"
            >
              Nature Kitchen
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
