import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Facebook } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
      <ThemeToggle />
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I’m <span className="text-blue-600 dark:text-blue-400">Elshid</span>
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl mb-6 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        A passionate full-stack developer focused on clean UI and real-world apps.
      </motion.p>
      <div className="flex gap-4">
        <Button asChild>
          <a href="https://github.com/elshiddanzenaquino" target="_blank" rel="noreferrer">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="https://facebook.com/elshidpage" target="_blank" rel="noreferrer">
            <Facebook className="mr-2 h-4 w-4" /> Facebook
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
