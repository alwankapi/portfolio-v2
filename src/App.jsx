import HeroSection from "./components/sections/hero-section";
import AboutSection from "./components/sections/about-section";
import WorkSection from "./components/sections/work-section";
import EducationSection from "./components/sections/education-section";
import SkillsSection from "./components/sections/skills-section";
import ProjectsSection from "./components/sections/projects-section";
import HackathonsSection from "./components/sections/hackathons-section";
import ContactSection from "./components/sections/contact-section";
import Navbar from "./components/navbar";

const BLUR_FADE_DELAY = 0.04;

export default function App() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 max-w-2xl mx-auto py-12 sm:py-24 px-6 pb-28">
      <HeroSection blurFadeDelay={BLUR_FADE_DELAY} />
      <AboutSection blurFadeDelay={BLUR_FADE_DELAY} />
      <WorkSection blurFadeDelay={BLUR_FADE_DELAY} />
      <EducationSection blurFadeDelay={BLUR_FADE_DELAY} />
      <SkillsSection blurFadeDelay={BLUR_FADE_DELAY} />
      <ProjectsSection blurFadeDelay={BLUR_FADE_DELAY} />
      <HackathonsSection blurFadeDelay={BLUR_FADE_DELAY} />
      <ContactSection blurFadeDelay={BLUR_FADE_DELAY} />
      <Navbar />
    </main>
  );
}


