"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TiltCard from "@/components/ui/TiltCard";
import Lightbox from "@/components/ui/Lightbox";
import { CERTIFICATIONS } from "@/lib/constants";

export default function Certifications() {
  const [lightbox, setLightbox] = useState({ open: false, src: "", alt: "" });

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="text-xs font-mono text-accent mb-4 block">05 // CERTIFICATIONS</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Certified
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CERTIFICATIONS.map((cert, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <TiltCard className="overflow-hidden cursor-pointer h-full">
                <div
                  className="relative h-32 bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center"
                  onClick={() => setLightbox({ open: true, src: cert.image, alt: cert.title })}
                >
                  {cert.inProgress ? (
                    <div className="w-12 h-12 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <span className="text-3xl">📜</span>
                  )}
                </div>
                <div className="p-3">
                  <h4 className="text-sm font-bold text-foreground line-clamp-2">{cert.title}</h4>
                  <p className="text-xs text-muted mt-1">{cert.issuer}</p>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Lightbox
        isOpen={lightbox.open}
        imageSrc={lightbox.src}
        alt={lightbox.alt}
        onClose={() => setLightbox({ open: false, src: "", alt: "" })}
      />
    </section>
  );
}
