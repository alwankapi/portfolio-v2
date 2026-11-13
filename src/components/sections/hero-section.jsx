import { MapPin } from "lucide-react";
import BlurFade from "../magicui/blur-fade";
import { DATA } from "../../data/resume";

export default function HeroSection({ blurFadeDelay }) {
  return (
    <section id="hero" className="w-full">
      <BlurFade delay={blurFadeDelay}>
        <header className="flex items-center gap-4 sm:gap-5">
          <div className="relative shrink-0">
            <div className="size-[88px] sm:size-[92px] rounded-[14px] overflow-hidden border border-border/70 bg-muted shadow-sm transition-transform duration-300 hover:scale-[1.02]">
              <img
                src={DATA.avatarUrl}
                alt={DATA.fullName || DATA.name}
                className="size-full object-cover"
                loading="eager"
              />
            </div>
          </div>
          <div className="flex flex-col min-w-0">
            <h1 className="text-xl sm:text-[22px] font-bold text-foreground tracking-tight leading-tight">
              {DATA.fullName || DATA.name}
            </h1>
            <p className="text-sm sm:text-[15px] text-muted-foreground mt-0.5 leading-snug">
              {DATA.role || "Web Developer · UI/UX Designer"}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/90">
                <span className="relative flex size-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full size-2 bg-emerald-500"></span>
                </span>
                <span>{DATA.location} · Open to projects</span>
              </span>
            </div>
          </div>
        </header>
      </BlurFade>
    </section>
  );
}

