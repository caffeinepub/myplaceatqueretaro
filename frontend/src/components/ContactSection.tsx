import { Mail, MapPin, Phone } from 'lucide-react';
import { SiFacebook, SiInstagram, SiYoutube } from 'react-icons/si';
import { ContactForm } from './ContactForm';

export function ContactSection() {
  const contactDetails = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+52 (442)  232 1248',
      href: 'tel:+524422321248',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contactus@myplaceatqueretaro.com',
      href: 'mailto:contactus@myplaceatqueretaro.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Querétaro, Qro., Mexico',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: SiFacebook, label: 'Facebook', href: 'https://www.facebook.com/MyPlaceAtQueretaro' },
    { icon: SiInstagram, label: 'Instagram', href: 'https://www.instagram.com/myplaceatqueretaro' },
    { icon: SiYoutube, label: 'YouTube', href: 'https://youtube.com/@myplaceatqueretaro?si=FI8rt31Wp4dxLMY2' },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Contact us
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to find your perfect place in Querétaro? We're here to help you every step of the way
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display font-semibold text-2xl text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactDetails.map((detail, index) => {
                  const Icon = detail.icon;
                  return (
                    <a
                      key={index}
                      href={detail.href}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-card transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">
                          {detail.label}
                        </div>
                        <div className="text-foreground font-medium">
                          {detail.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-display font-semibold text-2xl text-foreground mb-6">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-card rounded-xl p-6 shadow-soft">
              <h4 className="font-semibold text-lg text-foreground mb-3">
                Business Hours
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">Closed</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
