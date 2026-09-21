import { ExternalLink } from "lucide-react";
import BlurFade from "../magicui/blur-fade";
import { DATA } from "../../data/resume";

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

// Turns a plain string containing [label](url) into text plus styled inline links.
function renderWithLinks(text) {
  const out = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  LINK_RE.lastIndex = 0;
  while ((match = LINK_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      out.push(text.slice(lastIndex, match.index));
    }
    const [, label, href] = match;
    out.push(
      <a
        key={key++}
        href={href}
        target="_blank"
        rel="noreferrer"
        className="about-link"
      >
        {label}
        <ExternalLink className="about-link-icon ml-0.5" />
      </a>
    );
    lastIndex = LINK_RE.lastIndex;
  }
  if (lastIndex < text.length) {
    out.push(text.slice(lastIndex));
  }
  return out;
}

export default function AboutSection({ blurFadeDelay }) {
  return (
    <section id="about">
      <BlurFade delay={blurFadeDelay * 3}>
        <h2 className="text-xl font-bold">
          About <span className="text-muted-foreground font-semibold">· {DATA.role}</span>
        </h2>
      </BlurFade>
      <BlurFade delay={blurFadeDelay * 4}>
        <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-2 leading-relaxed">
          {renderWithLinks(DATA.summary)}
        </p>
      </BlurFade>
    </section>
  );
}

