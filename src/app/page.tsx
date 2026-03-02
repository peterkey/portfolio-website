import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import CertificationsSection from "./components/CertificationsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ToolsSection from "./components/ToolsSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import CaseStudiesSection from "./components/CaseStudiesSection";
import EnhancedContactSection from "./components/EnhancedContactSection";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceTimeline />
      <ProjectSection />
      <CaseStudiesSection />
      <ToolsSection />
      <CertificationsSection />
      <AchievementsSection />
      <TestimonialsSection />
      <EnhancedContactSection />
      <Footer />
    </main>
  );
} 