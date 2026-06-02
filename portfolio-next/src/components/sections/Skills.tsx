"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SKILLS } from "@/lib/constants";

const skillIcons: Record<string, string> = {
  python: "🐍",
  javascript: "JS",
  java: "☕",
  cpp: "C++",
  c: "C",
  react: "⚛️",
  tailwind: "🌊",
  html: "🌐",
  css: "🎨",
  bootstrap: "🅱️",
  nodejs: "🟢",
  express: "⚡",
  postgresql: "🐘",
  rest: "🔗",
  llm: "🧠",
  prompt: "💬",
  gemini: "✨",
  claude: "🤖",
  git: "📦",
  github: "🐙",
  vscode: "💻",
  postman: "📮",
  vercel: "▲",
  socketio: "🔌",
  docker: "🐳",
  typescript: "TS",
};

function SkillBadge({ name, icon, index }: { name: string; icon: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, duration: 0.3 }}
      whileHover={{ scale: 1.08, y: -2 }}
      className="flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-xl hover:border-accent/30 hover:shadow-md hover:shadow-accent/5 transition-all cursor-default"
    >
      <span className="text-sm">{skillIcons[icon] || "⚙️"}</span>
      <span className="text-sm font-medium text-foreground">{name}</span>
    </motion.div>
  );
}

export default function Skills() {
  const categories = [
    { title: "Languages", skills: SKILLS.languages },
    { title: "Frontend", skills: SKILLS.frontend },
    { title: "Backend", skills: SKILLS.backend },
    { title: "AI & GenAI", skills: SKILLS.aiGenai },
    { title: "Tools", skills: SKILLS.tools },
    { title: "Learning", skills: SKILLS.learning },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="text-xs font-mono text-accent mb-4 block">03 // SKILLS</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Neural <span className="text-gradient">Stack</span>
          </h2>
        </ScrollReveal>

        <div className="space-y-10">
          {categories.map((cat) => (
            <ScrollReveal key={cat.title}>
              <h3 className="text-sm font-mono text-muted mb-4 uppercase tracking-wider">
                / {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} index={i} />
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
