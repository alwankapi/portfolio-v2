import BlurFade from "../magicui/blur-fade";
import { DATA } from "../../data/resume";

export default function AboutSection({ blurFadeDelay }) {
  return (
    <section id="about">
      <BlurFade delay={blurFadeDelay * 3}>
        <h2 className="text-xl font-bold">About</h2>
      </BlurFade>
      <BlurFade delay={blurFadeDelay * 4}>
        <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-2 leading-relaxed">
          {DATA.summary}
        </p>
      </BlurFade>
    </section>
  );
}
