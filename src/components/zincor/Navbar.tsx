import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Search, Globe, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Products', href: '#' },
    { label: 'Solutions', href: '#' },
    { label: 'Open Source', href: '#' },
    { label: 'Docs', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-200">
      <nav 
        className={`mx-auto max-w-7xl px-6 md:px-8 py-4 transition-all duration-200 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-sm shadow-elevation-sm border-b border-border' 
            : 'bg-background/100'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">Z</span>
              </div>
              <span className="font-semibold text-xl text-foreground">ZINCOR</span>
            </a>
            
            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    className="text-sm font-medium text-text-secondary hover:text-foreground transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
            
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Globe className="w-4 h-4 mr-2" />
              EN
            </Button>
            
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-border animate-fade-in">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    className="block py-2 text-sm font-medium text-text-secondary hover:text-foreground transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex gap-2 mt-4 pt-4 border-t border-border">
              <Button variant="ghost" size="sm" className="flex-1">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button variant="ghost" size="sm" className="flex-1">
                <Globe className="w-4 h-4 mr-2" />
                EN
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};