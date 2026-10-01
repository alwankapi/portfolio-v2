import { ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";
import { cn } from "../lib/utils";
import Safari from "./magicui/safari";

export default function ProjectCard({
  title,
  href,
  description,
  dates,
  technologies,
  links,
  image,
  video,
  url,
  className,
}) {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-border/70 bg-card/60 backdrop-blur-xs transition-all duration-300 hover:border-border hover:shadow-md hover:-translate-y-0.5 h-full",
        className
      )}
    >
      <a
        href={href || "#"}
        target={href ? "_blank" : undefined}
        rel="noreferrer"
        className="block cursor-pointer overflow-hidden"
      >
        {video ? (
          <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-muted/40 p-2 sm:p-2.5 pb-0 border-b border-border/50">
            <Safari
              videoSrc={video}
              url={url || (href ? href.replace(/^https?:\/\//, "").replace(/\/$/, "") : "simkos.app")}
              mode="simple"
              className="w-full shadow-xs rounded-t-md transition-transform duration-300 ease-out group-hover:scale-[1.02]"
            />
          </div>
        ) : image ? (
          <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-muted/40 border-b border-border/50">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-105"
            />
          </div>
        ) : (
          <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-muted/20 border-b border-border/50 flex flex-col items-center justify-center gap-1.5 p-4 text-center">
            <div className="size-9 rounded-lg bg-muted/60 border border-border/40 flex items-center justify-center text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <span className="text-muted-foreground text-xs font-medium tracking-tight line-clamp-1">{title}</span>
          </div>
        )}
      </a>

      <div className="flex flex-1 flex-col justify-between p-3.5 sm:p-4">
        <div className="space-y-1.5">
          <div className="flex items-start justify-between gap-2">
            <a
              href={href || "#"}
              target={href ? "_blank" : undefined}
              rel="noreferrer"
              className="font-semibold text-sm sm:text-base leading-snug tracking-tight text-foreground group-hover:text-primary transition-colors inline-flex items-center gap-1 line-clamp-1"
            >
              <span>{title}</span>
              {href && (
                <ExternalLink className="size-3 opacity-0 -translate-y-px transition-opacity group-hover:opacity-70 shrink-0" />
              )}
            </a>
            {dates && (
              <time className="font-mono text-[10px] text-muted-foreground whitespace-nowrap shrink-0 pt-0.5">
                {dates}
              </time>
            )}
          </div>
          <p className="font-sans text-xs text-muted-foreground leading-relaxed line-clamp-2 sm:line-clamp-3">
            {description}
          </p>
        </div>

        <div className="mt-3 space-y-2.5">
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {technologies.map((tech, idx) => {
                const isObj = typeof tech === "object" && tech !== null;
                const name = isObj ? tech.name : tech;
                const Icon = isObj ? tech.icon : null;
                const color = isObj ? tech.color : undefined;

                return (
                  <Badge
                    key={isObj ? tech.name || idx : tech}
                    variant="secondary"
                    className="inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-normal text-muted-foreground rounded transition-colors hover:text-foreground"
                  >
                    {Icon && (
                      <Icon
                        className="size-3 shrink-0"
                        style={color ? { color } : undefined}
                      />
                    )}
                    <span>{name}</span>
                  </Badge>
                );
              })}
            </div>
          )}

          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {links.map((item, idx) => (
                <a
                  key={idx}
                  href={item?.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-md border border-border/70 bg-background/80 px-2 py-0.5 text-[11px] font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {item.icon && <item.icon className="size-3" />}
                  <span>{item.type}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

