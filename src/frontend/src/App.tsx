import { LandingHeader } from './components/LandingHeader';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { ScheduleConsultationSection } from './components/ScheduleConsultationSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <LandingHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <ContactSection />
        <ScheduleConsultationSection />
      </main>
      <Footer />
    </div>
  );
}
