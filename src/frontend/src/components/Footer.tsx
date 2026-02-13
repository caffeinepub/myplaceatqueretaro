import { Heart } from 'lucide-react';
import { scrollToSection } from '../lib/scrollToSection';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { label: 'Home', href: 'hero' },
    { label: 'Services', href: 'features' },
    { label: 'About', href: 'about' },
    { label: 'Contact', href: 'contact' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
  ];

  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname || 'myplaceatqueretaro')
    : 'myplaceatqueretaro';

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">MP</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                My Place at Querétaro
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Your trusted partner for exceptional accommodations and real estate services in Querétaro, Mexico.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 py-1 text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <nav className="space-y-2">
              {legalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} My Place at Querétaro. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-primary fill-primary" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
