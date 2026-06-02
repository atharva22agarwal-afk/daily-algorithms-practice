"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, FileText } from "lucide-react";
import SceneWrapper from "@/components/three/SceneWrapper";
import { SITE } from "@/lib/constants";

export default function Landing() {
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <SceneWrapper mouseRef={mouseRef as React.RefObject<{ x: number; y: number }>} />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-mono text-accent bg-accent/10 border border-accent/20 rounded-full">
            {"{ Full-Stack & AI Developer }"}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-gradient">{SITE.name.split(" ")[0]}</span>
          <br />
          <span className="text-foreground">{SITE.name.split(" ").slice(1).join(" ")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-muted max-w-lg mb-10 leading-relaxed"
        >
          {SITE.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex gap-4"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-xl hover:bg-accent-dark transition-all hover:shadow-lg hover:shadow-accent/25"
          >
            <ExternalLink size={18} />
            View Work
          </a>
          <a
            href={SITE.resumeUrl}
            className="flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-xl hover:border-accent hover:text-accent transition-all"
          >
            <FileText size={18} />
            Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted"
        >
          <span className="text-xs font-mono">Scroll to explore</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
