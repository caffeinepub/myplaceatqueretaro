import { scrollToSection } from '../lib/scrollToSection';

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/myplace-hero2.jpeg"
          alt="Querétaro cityscape with jacaranda trees"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-fade-in text-balance drop-shadow-lg">
            Discover Your Perfect Place in Querétaro
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto animate-fade-in text-balance drop-shadow-md">
            Your trusted, on-the-ground team. From your very first question to the moment you feel fully at home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all shadow-soft-lg hover:shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 min-h-[44px]"
            >
              Start Your Journey
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="w-full sm:w-auto px-8 py-4 bg-background/80 backdrop-blur-sm text-foreground border-2 border-border rounded-lg font-semibold text-lg hover:bg-background transition-all shadow-soft hover:shadow-soft-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 min-h-[44px]"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-foreground/30 rounded-full" />
        </div>
      </div>
    </section>
  );
}
