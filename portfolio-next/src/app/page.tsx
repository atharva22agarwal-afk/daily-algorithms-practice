"use client";

import { useState, useEffect } from "react";
import Loader from "@/components/ui/Loader";
import Navbar from "@/components/ui/Navbar";
import Landing from "@/components/sections/Landing";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import { initLenis, destroyLenis } from "@/lib/smooth-scroll";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      initLenis();
      return () => destroyLenis();
    }
  }, [loading]);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Loader isLoading={loading} />

      {!loading && (
        <>
          <Navbar />
          <Landing />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Certifications />
          <Contact />
        </>
      )}
    </main>
  );
}
