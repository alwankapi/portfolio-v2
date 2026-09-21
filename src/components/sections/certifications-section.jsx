import BlurFade from "../magicui/blur-fade";
import CertificationCard from "../certification-card";
import { DATA } from "../../data/resume";

export default function CertificationsSection({ blurFadeDelay }) {
  return (
    <section id="certifications">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={blurFadeDelay * 13}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-semibold">
                Certifications
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Always learning
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-xl mx-auto">
                A few of the certifications I've picked up while exploring web and
                mobile development.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {DATA.certifications.map((cert, id) => (
            <BlurFade key={cert.title} delay={blurFadeDelay * 14 + id * 0.05}>
              <CertificationCard cert={cert} />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
