import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import BookShowcase from "./pages/BookShowcase";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Hero />
        <Projects />
        <About />
        <Contact />
        <ScrollToTop /> 
        <footer className="text-center text-sm text-zinc-500 py-10">
          © {new Date().getFullYear()} Elshid Aquino. Built with React + Tailwind.
        </footer>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <main className="bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white transition-all duration-300">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book-showcase" element={<BookShowcase />} />
          </Routes>
        </main>
      </ThemeProvider>
    </Router>
  );
}

export default App;
