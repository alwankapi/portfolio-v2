import BlurFade from "../magicui/blur-fade";
import HackathonCard from "../hackathon-card";
import { DATA } from "../../data/resume";

export default function HackathonsSection({ blurFadeDelay }) {
  return (
    <section id="hackathons">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={blurFadeDelay * 13}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-semibold">
                Hackathons
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                I like building things
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-xl mx-auto">
                During my time as a developer, I attended hackathons and built incredible things in short periods of time.
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={blurFadeDelay * 14}>
          <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
            {DATA.hackathons.map((project, id) => (
              <BlurFade
                key={project.title + project.dates}
                delay={blurFadeDelay * 15 + id * 0.05}
              >
                <HackathonCard
                  title={project.title}
                  description={project.description}
                  location={project.location}
                  dates={project.dates}
                  image={project.image}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </ul>
        </BlurFade>
      </div>
    </section>
  );
}
