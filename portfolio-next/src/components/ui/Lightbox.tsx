"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Lightbox({
  isOpen,
  imageSrc,
  alt,
  onClose,
}: {
  isOpen: boolean;
  imageSrc: string;
  alt: string;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            onClick={onClose}
          >
            <X size={32} />
          </motion.button>
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            src={imageSrc}
            alt={alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl border-2 border-accent/30"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
