import { MapPin } from "lucide-react";
import BlurFade from "../magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DATA } from "../../data/resume";

export default function HeroSection({ blurFadeDelay }) {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between items-center">
          <div className="flex-col flex flex-1 space-y-1.5">
            <BlurFade delay={blurFadeDelay}>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I'm {DATA.name}
              </h1>
            </BlurFade>
            <BlurFade delay={blurFadeDelay * 1.5}>
              <p className="max-w-[600px] md:text-xl text-muted-foreground">
                {DATA.description}
              </p>
            </BlurFade>
            <BlurFade delay={blurFadeDelay * 2}>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 rounded-full border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                  <MapPin className="size-3.5" />
                  {DATA.location}
                </span>
              </div>
            </BlurFade>
          </div>
          <BlurFade delay={blurFadeDelay * 2}>
            <Avatar className="size-28 border shadow-sm">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">
                {DATA.initials}
              </AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}

