"use client";

import { ExternalLink, Code2 } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { PROJECTS } from "@/lib/constants";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="text-xs font-mono text-accent mb-4 block">02 // PROJECTS</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted mb-12 max-w-lg">
            Real projects built with real tech. Each one taught me something new.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.15}>
              <TiltCard className="h-full overflow-hidden">
                <div className="relative h-48 overflow-hidden" style={{ background: `linear-gradient(135deg, ${project.color}20, ${project.color}05)` }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-32 h-32 rounded-full blur-3xl opacity-30"
                      style={{ background: project.color }}
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-foreground/10 font-mono">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
                  <p className="text-sm text-accent font-mono mb-3">{project.subtitle}</p>
                  <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-mono bg-background border border-border rounded-lg text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border text-foreground rounded-lg hover:border-accent hover:text-accent transition-colors"
                    >
                      <Code2 size={14} />
                      GitHub
                    </a>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
