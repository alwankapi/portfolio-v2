import BlurFade from "../magicui/blur-fade";
import ResumeCard from "../resume-card";
import { DATA } from "../../data/resume";

export default function EducationSection({ blurFadeDelay }) {
  return (
    <section id="education">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={blurFadeDelay * 7}>
          <h2 className="text-xl font-bold">Education</h2>
        </BlurFade>
        {DATA.education.map((education, id) => (
          <BlurFade key={education.school} delay={blurFadeDelay * 8 + id * 0.05}>
            <ResumeCard
              logoUrl={education.logoUrl}
              altText={education.school}
              title={education.school}
              subtitle={education.degree}
              href={education.href}
              period={`${education.start} - ${education.end}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
