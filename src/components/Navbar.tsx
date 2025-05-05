
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "about", label: "About" },
    { id: "research", label: "Research" },
    { id: "community", label: "Community" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container flex items-center justify-between">
        <a 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-navy text-xl font-semibold cursor-pointer font-[Raleway]"
        >
          Jose F. Brevil, Jr.
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {navLinks.map(link => (
            <Button 
              key={link.id}
              variant="ghost" 
              onClick={() => scrollToSection(link.id)}
              className="font-medium hover:text-highlight-purple"
            >
              {link.label}
            </Button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          className="md:hidden p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col items-end space-y-1.5">
            <span className={`block h-0.5 bg-navy transition-all duration-300 ${mobileMenuOpen ? 'w-6 -rotate-45 translate-y-2' : 'w-6'}`}></span>
            <span className={`block h-0.5 bg-navy transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
            <span className={`block h-0.5 bg-navy transition-all duration-300 ${mobileMenuOpen ? 'w-6 rotate-45 -translate-y-2' : 'w-5'}`}></span>
          </div>
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ${mobileMenuOpen ? 'max-h-60 py-3' : 'max-h-0 overflow-hidden'}`}>
        <div className="container flex flex-col space-y-2">
          {navLinks.map(link => (
            <Button 
              key={link.id}
              variant="ghost" 
              onClick={() => scrollToSection(link.id)}
              className="w-full justify-start font-medium"
            >
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
