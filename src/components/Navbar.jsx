import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="font-bold text-lg text-blue-600 dark:text-blue-400">
          Elshid.dev
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
          
          <ThemeToggle />
        </div>

        {/* Mobile Toggle Button */}
        <button onClick={toggleMenu} className="md:hidden p-1 z-50">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden px-4 pb-4 bg-white dark:bg-zinc-900 border-t dark:border-zinc-700">
          <ul className="space-y-2 text-sm font-medium">
            <li><a href="#projects" onClick={closeMenu} className="block py-2 hover:text-blue-600">Projects</a></li>
            <li><a href="#about" onClick={closeMenu} className="block py-2 hover:text-blue-600">About</a></li>
            <li><a href="#contact" onClick={closeMenu} className="block py-2 hover:text-blue-600">Contact</a></li>
            
          </ul>
          <div className="mt-4">
            <ThemeToggle />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
