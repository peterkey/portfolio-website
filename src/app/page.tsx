import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsStrip from './components/StatsStrip';
import StatementSection from './components/StatementSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import LabSection from './components/LabSection';
import SkillsSection from './components/SkillsSection';
import WorkSection from './components/WorkSection';
import MarqueeStrip from './components/MarqueeStrip';
import AboutSection from './components/AboutSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import WritingTeaser from './components/WritingTeaser';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsStrip />
        <StatementSection />
        <ExperienceTimeline />
        <LabSection />
        <SkillsSection />
        <CertificationsSection />
        <WorkSection />
        <MarqueeStrip />
        <AboutSection />
        <ContactSection />
        <WritingTeaser />
      </main>
      <Footer />
    </>
  );
}
