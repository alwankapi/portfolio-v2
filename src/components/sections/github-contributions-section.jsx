import BlurFade from "../magicui/blur-fade";
import GithubContributionGraph from "../github-contribution-graph";
import { DATA } from "../../data/resume";

export default function GithubContributionsSection({ blurFadeDelay }) {
  return (
    <section id="github">
      <div className="space-y-8 w-full py-8">
        <BlurFade delay={blurFadeDelay * 15}>
          <div className="max-w-[800px] mx-auto">
            <GithubContributionGraph username={DATA.github} />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

