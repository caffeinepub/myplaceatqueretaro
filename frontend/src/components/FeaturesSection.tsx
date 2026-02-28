import { Home, MapPin, Shield, Star } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Home,
      title: 'Premium Accommodations',
      description: 'Carefully curated properties that combine comfort, style, and authentic Mexican hospitality for an unforgettable stay.',
    },
    {
      icon: MapPin,
      title: 'Prime Locations',
      description: 'Strategic locations throughout Querétaro, from the historic center to modern residential areas, ensuring convenience and accessibility.',
    },
    {
      icon: Shield,
      title: 'Trusted Service',
      description: 'Years of experience in the local market with a commitment to transparency, reliability, and exceptional customer care.',
    },
    {
      icon: Star,
      title: 'Personalized Experience',
      description: 'We provide tailored solutions that match your unique needs, whether you\'re looking to rent or invest for the long term.',
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            We provide exceptional service and unmatched local expertise to make your Querétaro experience extraordinary
          </p>
          <a
            href="https://www.youtube.com/watch?v=68lltMKke6E"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all shadow-soft-lg hover:shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 min-h-[44px]"
          >
            See Why Choose Us
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 md:p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl md:text-2xl text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
