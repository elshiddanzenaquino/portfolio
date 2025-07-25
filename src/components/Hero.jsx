import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Facebook, ArrowDown } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 text-center relative">
      

      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I’m <span className="text-blue-600 dark:text-blue-400">Elshid</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl mb-4 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Full-Stack Web Developer · React · Node.js · PostgreSQL · Tailwind CSS
      </motion.p>

      <p className="text-base text-zinc-600 dark:text-zinc-300 mb-6">
        I build scalable and aesthetic applications with clean code and smooth UX.
      </p>

      <div className="flex gap-4 mb-6">
        <Button asChild>
          <a href="https://github.com/elshiddanzenaquino" target="_blank" rel="noreferrer">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="https://www.facebook.com/elshiddanzen.aquino/" target="_blank" rel="noreferrer">
            <Facebook className="mr-2 h-4 w-4" /> Facebook
          </a>
        </Button>
      </div>

      <motion.a
        href="#projects"
        className="mt-4 inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        View My Work <ArrowDown className="ml-1 w-4 h-4" />
      </motion.a>
    </section>
  );
};

export default Hero;
