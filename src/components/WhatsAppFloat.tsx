"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/content";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappLink("Hi! I'd like to ask about the cooking experience.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-forest/20"
    >
      <MessageCircle size={26} fill="white" className="text-[#25D366]" />
    </motion.a>
  );
}
