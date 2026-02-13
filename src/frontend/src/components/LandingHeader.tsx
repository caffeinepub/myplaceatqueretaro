import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../lib/scrollToSection';

export function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: 'hero' },
    { label: 'Services', href: 'features' },
    { label: 'About', href: 'about' },
    { label: 'Contact', href: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between min-h-[220px] md:min-h-[260px] py-4">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2 py-1"
            aria-label="Go to homepage"
          >
            <img
              src="/assets/Logo_Myplace_moslygraytransparent-1.png"
              alt="My Place at Querétaro logo"
              className="h-[200px] md:h-[240px] w-auto object-contain"
            />
            <span className="font-display font-bold text-xl md:text-2xl text-foreground">
              My Place at Querétaro
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('schedule-consultation')}
              className="ml-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-soft hover:shadow-soft-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Book
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 text-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-6 animate-slide-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="px-4 py-3 text-left text-foreground hover:text-primary hover:bg-muted transition-colors font-medium rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary min-h-[44px]"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('schedule-consultation')}
                className="mx-4 mt-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-soft text-center min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Book
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
