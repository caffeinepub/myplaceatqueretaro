import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { scrollToSection } from "../lib/scrollToSection";

export function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "hero" },
    { label: "Services", href: "features" },
    { label: "About", href: "about" },
    { label: "Contact", href: "contact" },
  ];

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-soft" : ""
      }`}
      style={{ backgroundColor: "#9B3E2A" }}
    >
      <div className="container mx-auto px-4">
        {/* Reduced height by ~20%: 141→113px base, 166→133px md */}
        <div className="flex items-center min-h-[113px] md:min-h-[133px] py-3">
          {/* Logo — reduced by ~20%: 128→102px base, 154→123px md */}
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className="flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-header-foreground rounded-md px-2 py-1"
            aria-label="Go to homepage"
          >
            <img
              src="/assets/Logo_Myplace_moslygraytransparent-1.png"
              alt="My Place at Querétaro logo"
              className="h-[102px] md:h-[123px] w-auto object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 ml-5">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="px-3 py-1.5 text-header-foreground hover:text-accent transition-colors font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-header-foreground rounded-md"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => scrollToSection("schedule-consultation")}
              className="ml-3 px-5 py-2.5 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all shadow-soft hover:shadow-soft-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Book
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden ml-auto p-2.5 text-header-foreground hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-header-foreground rounded-md"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-5 animate-slide-in max-h-[60vh] overflow-y-auto overflow-x-hidden">
            <div className="flex flex-col space-y-1.5">
              {navItems.map((item) => (
                <button
                  type="button"
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="px-4 py-2.5 text-left text-header-foreground hover:text-accent hover:bg-white/10 transition-colors font-medium rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-header-foreground min-h-[44px]"
                >
                  {item.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => handleNavClick("schedule-consultation")}
                className="mx-4 mt-1.5 px-5 py-2.5 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all shadow-soft text-center min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
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
