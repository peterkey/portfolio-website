import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import CertificationsSection from "./components/CertificationsSection";
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
      <CaseStudiesSection />
      <ProjectSection />
      <ToolsSection />
      <CertificationsSection />
      <EnhancedContactSection />
      <Footer />
    </main>
  );
}
