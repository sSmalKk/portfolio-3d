import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StackSection from "@/components/StackSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import SEOHead from "@/components/SEOHead";
import AmbientLights from "@/components/AmbientLights";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useEffect } from "react";

const Index = () => {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView(window.location.pathname);
  }, []);

  return (
    <div className="min-h-[100svh] relative overflow-x-hidden">
      <SEOHead />
      <AmbientLights />
      <Header />
      <HeroSection />
      <AboutSection />
      <StackSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
