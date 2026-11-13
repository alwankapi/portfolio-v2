import HeroSection from "./components/sections/hero-section";
import AboutSection from "./components/sections/about-section";
import EducationSection from "./components/sections/education-section";
import SkillsSection from "./components/sections/skills-section";
import ProjectsSection from "./components/sections/projects-section";
import CertificationsSection from "./components/sections/certifications-section";
import GithubContributionsSection from "./components/sections/github-contributions-section";
import ContactSection from "./components/sections/contact-section";
import Navbar from "./components/navbar";

const BLUR_FADE_DELAY = 0.04;

export default function App() {
  return (
    <div className="relative min-h-[100dvh] bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      {/* Top soft gradient edge like creativeatishay */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 inset-x-0 h-16 sm:h-20 z-20 bg-gradient-to-b from-background via-background/70 to-transparent"
      />

      <main className="flex flex-col space-y-12 max-w-[580px] mx-auto pt-16 sm:pt-24 px-5 sm:px-6 pb-32">
        <HeroSection blurFadeDelay={BLUR_FADE_DELAY} />
        <AboutSection blurFadeDelay={BLUR_FADE_DELAY} />
        <GithubContributionsSection blurFadeDelay={BLUR_FADE_DELAY} />
        <EducationSection blurFadeDelay={BLUR_FADE_DELAY} />
        <SkillsSection blurFadeDelay={BLUR_FADE_DELAY} />
        <ProjectsSection blurFadeDelay={BLUR_FADE_DELAY} />
        <CertificationsSection blurFadeDelay={BLUR_FADE_DELAY} />
        <ContactSection blurFadeDelay={BLUR_FADE_DELAY} />
        <Navbar />
      </main>
    </div>
  );
}



