"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

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
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-40 w-40 overflow-hidden rounded-full shadow-2xl shadow-black/40 sm:h-48 sm:w-48"
          >
            <Image
              src="/logo.jpeg"
              alt="Sigma House Nature Kitchen"
              fill
              sizes="192px"
              priority
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
