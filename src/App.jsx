import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <main className="bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white transition-all duration-300">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </ThemeProvider>
  );
}

export default App;
