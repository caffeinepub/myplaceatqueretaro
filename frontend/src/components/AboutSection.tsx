import { Award, Clock, Users } from 'lucide-react';

export function AboutSection() {
  const trustIndicators = [
    {
      icon: Clock,
      value: '36+',
      label: 'Years of Experience',
    },
    {
      icon: Users,
      value: '500+ per year',
      label: 'Happy Clients',
    },
    {
      icon: Award,
      value: '98%',
      label: 'Satisfaction Rate',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
              Your Gateway to Querétaro Living
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Our Commitment is simple: to make your Queretaro experience exceptional from start to finish. We can handle every detail with care, ensuring your journey is smooth, enjoyable,  and perfectly tailored to your needs.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {trustIndicators.map((indicator, index) => {
                const Icon = indicator.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="font-display font-bold text-2xl md:text-3xl text-foreground mb-1">
                      {indicator.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {indicator.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* About Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg">
              <img
                src="/assets/about-us-image.jpg"
                alt="MyPlace at Querétaro team"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
