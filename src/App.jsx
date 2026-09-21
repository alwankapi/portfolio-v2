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
    <main className="flex flex-col min-h-[100dvh] space-y-10 max-w-2xl mx-auto py-12 sm:py-24 px-6 pb-32">
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
  );
}



