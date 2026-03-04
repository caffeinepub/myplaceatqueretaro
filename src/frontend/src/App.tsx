import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { LandingHeader } from "./components/LandingHeader";
import { ScheduleConsultationSection } from "./components/ScheduleConsultationSection";

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
