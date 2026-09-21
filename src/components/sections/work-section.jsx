import BlurFade from "../magicui/blur-fade";
import ResumeCard from "../resume-card";
import { DATA } from "../../data/resume";

export default function WorkSection({ blurFadeDelay }) {
  return (
    <section id="work">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={blurFadeDelay * 5}>
          <h2 className="text-xl font-bold">Work Experience</h2>
        </BlurFade>
        {DATA.work.map((work, id) => (
          <BlurFade key={work.company} delay={blurFadeDelay * 6 + id * 0.05}>
            <ResumeCard
              logoUrl={work.logoUrl}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.href}
              badges={work.badges}
              period={`${work.start} - ${work.end}`}
              description={work.description}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
