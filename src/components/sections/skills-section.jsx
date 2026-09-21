import BlurFade from "../magicui/blur-fade";
import { Badge } from "../ui/badge";
import { DATA } from "../../data/resume";

export default function SkillsSection({ blurFadeDelay }) {
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={blurFadeDelay * 9}>
          <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-1">
          {DATA.skills.map((skill, id) => (
            <BlurFade key={skill.name} delay={blurFadeDelay * 10 + id * 0.02}>
              <Badge key={skill.name} className="flex items-center gap-1.5 px-2.5 py-1">
                {skill.icon && <skill.icon className="size-3.5" style={{ color: skill.color }} />}
                {skill.name}
              </Badge>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
