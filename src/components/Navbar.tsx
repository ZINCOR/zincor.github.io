import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <Zap className="h-8 w-8 text-blue-500 dark:text-blue-400" />
                <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">ZINCOR</span>
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">About</a>
              <a href="#services" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Services</a>
              <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Solutions</a>
              <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Blog</a>
              <a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Contact</a>
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-4 inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md">
          <a href="#" className="block px-3 py-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md">About</a>
          <a href="#services" className="block px-3 py-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md">Services</a>
          <a href="#" className="block px-3 py-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md">Solutions</a>
          <a href="#" className="block px-3 py-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md">Blog</a>
          <a href="#contact" className="block px-3 py-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;