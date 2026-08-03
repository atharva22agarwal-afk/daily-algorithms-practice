"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ABOUT } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="text-xs font-mono text-accent mb-4 block">01 // ABOUT</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            The <span className="text-gradient">Hybrid Profile</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={0.1}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-xl group-hover:bg-accent/20 transition-all" />
              <div className="relative bg-card border border-border rounded-2xl overflow-hidden">
                <Image
                  src="/images/Atharva Agarwal.png"
                  alt="Atharva Agarwal"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg leading-relaxed text-muted mb-6">
              {ABOUT.summary}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Focus", value: "Full-Stack & AI" },
                { label: "Education", value: "BCA @ BIT Mesra" },
                { label: "Based in", value: "Jaipur, India" },
                { label: "Available", value: "For Opportunities" },
              ].map((item) => (
                <div key={item.label} className="p-4 bg-background rounded-xl border border-border">
                  <span className="text-xs font-mono text-accent block mb-1">{item.label}</span>
                  <span className="text-sm font-medium text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
