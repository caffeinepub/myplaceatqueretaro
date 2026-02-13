import { useState, useEffect } from 'react';
import { scrollToSection } from '../lib/scrollToSection';

export function ScheduleConsultationSection() {
  const [showCalendly, setShowCalendly] = useState(false);

  const handleBookClick = () => {
    // Show the Calendly embed
    setShowCalendly(true);
    
    // Load the Calendly widget script if not already loaded
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
    
    // Scroll to the embed after a short delay to ensure it's rendered
    setTimeout(() => {
      scrollToSection('calendly-embed');
    }, 100);
  };

  return (
    <section id="schedule-consultation" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
            Schedule your free consultation
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Prefer to book directly? Use our calendar below to schedule a consultation at your convenience.
          </p>
          <button
            onClick={handleBookClick}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-soft hover:shadow-soft-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 text-lg"
          >
            Book
          </button>
        </div>

        {/* Calendly Inline Widget */}
        {showCalendly && (
          <div
            id="calendly-embed"
            className="max-w-4xl mx-auto"
          >
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/myplaceatqueretaro/discovery-call"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
