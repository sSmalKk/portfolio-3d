import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ThemesSection from "@/components/ThemesSection";
import BlogSection from "@/components/BlogSection";
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
      <ProjectsSection />
      <ThemesSection />
      <BlogSection />
    </div>
  );
};

export default Index;
