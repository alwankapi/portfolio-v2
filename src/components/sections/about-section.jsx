import { ExternalLink } from "lucide-react";
import BlurFade from "../magicui/blur-fade";
import { Highlighter } from "../magicui/highlighter";
import { DATA } from "../../data/resume";

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

// Turns a plain string containing [label](url) or [label|action|color](url)
// into text plus Magic UI Highlighter-wrapped interactive links.
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
    const [, fullLabel, href] = match;
    const parts = fullLabel.split("|");
    const label = parts[0];
    const action = parts[1] || (key % 2 === 0 ? "underline" : "highlight");
    const color = parts[2] || (action === "underline" ? "#FF9800" : "#87CEFA");
    const isHighlight = action === "highlight";

    out.push(
      <Highlighter
        key={key++}
        action={action}
        color={color}
        className={
          isHighlight
            ? "text-zinc-950 dark:text-zinc-950 font-semibold px-1 rounded-sm mx-0.5"
            : "mx-0.5"
        }
      >
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="about-link"
        >
          {label}
          <ExternalLink className="about-link-icon ml-0.5" />
        </a>
      </Highlighter>
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
        <h2 className="text-xl font-bold">About</h2>
      </BlurFade>
      <BlurFade delay={blurFadeDelay * 4}>
        <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-2 leading-relaxed">
          {renderWithLinks(DATA.summary)}
        </p>
      </BlurFade>
    </section>
  );
}


