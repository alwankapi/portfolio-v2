import { MapPin } from "lucide-react";
import hoverPhoto from "../../assets/foto-profil-hover.png";
import BlurFade from "../magicui/blur-fade";
import { DiaTextReveal } from "../ui/dia-text-reveal";
import { DATA } from "../../data/resume";

export default function HeroSection({ blurFadeDelay }) {
  return (
    <section id="hero" className="w-full">
      <BlurFade delay={blurFadeDelay}>
        <header className="flex items-center gap-4 sm:gap-5">
          <div className="profile-shine relative size-[88px] shrink-0 overflow-hidden rounded-[14px] border border-border/70 bg-muted shadow-sm sm:size-[92px]">
            <img
              src={hoverPhoto}
              alt={DATA.fullName || DATA.name}
              className="size-full object-cover object-[50%_25%]"
              loading="eager"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <h1 className="text-xl sm:text-[22px] font-bold text-foreground tracking-tight leading-tight">
              {DATA.fullName || DATA.name}
            </h1>
            <p className="text-sm sm:text-[15px] text-muted-foreground mt-0.5 leading-snug">
              <DiaTextReveal
                text={DATA.role || "Web Developer · UI/UX Designer"}
                colors={["#c2410c", "#d97706", "#c2410c"]}
                textColor="hsl(var(--muted-foreground))"
                delay={blurFadeDelay + 0.3}
                repeat
                repeatDelay={2}
              />
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/90">
                <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
                <span>{DATA.location} · Open to projects</span>
              </span>
            </div>
          </div>
        </header>
      </BlurFade>
    </section>
  );
}

