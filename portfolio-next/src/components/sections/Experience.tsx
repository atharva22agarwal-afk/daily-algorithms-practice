"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { EXPERIENCE } from "@/lib/constants";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="text-xs font-mono text-accent mb-4 block">04 // EXPERIENCE</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Experience <span className="text-gradient">Log</span>
          </h2>
        </ScrollReveal>

        <div className="relative border-l-2 border-border ml-4 md:ml-0">
          {EXPERIENCE.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="relative pl-8 pb-12 last:pb-0">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
                  className="absolute -left-[1.3rem] top-1 w-5 h-5 bg-background border-2 border-accent rounded-full"
                />

                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-accent/20 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <span className="text-xs font-mono text-accent">{exp.period}</span>
                    <span className="text-xs text-muted">{exp.type}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                  <p className="text-sm text-muted italic mb-3">{exp.company}</p>
                  <ul className="space-y-1.5">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="text-sm text-muted flex items-start gap-2">
                        <span className="text-accent mt-1.5 text-xs">▸</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
