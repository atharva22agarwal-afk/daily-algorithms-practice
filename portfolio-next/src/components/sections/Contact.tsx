"use client";

import { Mail, Phone, MapPin, Code2, Link2, Globe } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SITE } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <ScrollReveal>
          <span className="text-xs font-mono text-accent mb-4 block">06 // CONTACT</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted mb-12 max-w-md mx-auto">
            Got a project in mind or want to collaborate? Let&apos;s build something great together.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-xl hover:border-accent/30 hover:shadow-lg transition-all group"
            >
              <Mail size={20} className="text-accent group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">{SITE.email}</span>
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-xl hover:border-accent/30 hover:shadow-lg transition-all group"
            >
              <Phone size={20} className="text-accent group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">{SITE.phone}</span>
            </a>
            <div className="flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-xl">
              <MapPin size={20} className="text-accent" />
              <span className="text-sm font-medium">{SITE.location}</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex justify-center gap-4">
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card border border-border rounded-xl hover:border-accent hover:text-accent transition-all hover:shadow-lg"
              aria-label="LinkedIn"
            >
              <Link2 size={22} />
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card border border-border rounded-xl hover:border-accent hover:text-accent transition-all hover:shadow-lg"
              aria-label="GitHub"
            >
              <Code2 size={22} />
            </a>
            <a
              href={SITE.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card border border-border rounded-xl hover:border-accent hover:text-accent transition-all hover:shadow-lg"
              aria-label="Portfolio"
            >
              <Globe size={22} />
            </a>
          </div>
        </ScrollReveal>
      </div>

      <footer className="mt-24 pt-8 border-t border-border text-center">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {SITE.name}. Built with Next.js, Three.js & lots of ☕
        </p>
      </footer>
    </section>
  );
}
