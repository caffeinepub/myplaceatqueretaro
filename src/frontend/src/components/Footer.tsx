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
    <footer className="bg-footer border-t border-footer-foreground/10">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src="/assets/Logo_Myplace_moslygraytransparent-1.png"
                alt="My Place at Querétaro logo"
                className="h-[128px] md:h-[154px] w-auto object-contain"
              />
            </div>
            <p className="text-footer-foreground/80 leading-relaxed">
              Your trusted partner for exceptional accommodations and real estate services in Querétaro, Mexico.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-footer-foreground mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-footer-foreground/80 hover:text-footer-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-footer-foreground rounded px-1 py-1 text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-footer-foreground mb-4">Legal</h3>
            <nav className="space-y-2">
              {legalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-footer-foreground/80 hover:text-footer-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-footer-foreground rounded px-1 py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-footer-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-footer-foreground/80 text-sm text-center md:text-left">
            © {currentYear} My Place at Querétaro. All rights reserved.
          </p>
          <p className="text-footer-foreground/80 text-sm flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-footer-foreground fill-footer-foreground" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-footer-foreground hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-footer-foreground rounded px-1"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
