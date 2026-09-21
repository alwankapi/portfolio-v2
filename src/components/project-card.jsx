import { Badge } from "./ui/badge";
import { cn } from "../lib/utils";

export default function ProjectCard({
  title,
  href,
  description,
  dates,
  technologies,
  link,
  links,
  image,
  video,
  className,
}) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full bg-card rounded-lg",
        className
      )}
    >
      <a href={href || "#"} className="block cursor-pointer">
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
          />
        )}
        {image && (
          <img
            src={image}
            alt={title}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
        {!image && !video && (
           <div className="h-40 w-full bg-muted flex items-center justify-center">
             <span className="text-muted-foreground text-xs uppercase tracking-widest">{title}</span>
           </div>
        )}
      </a>
      <div className="flex flex-col px-4 py-4 flex-grow">
        <div className="space-y-1">
          <h3 className="font-semibold text-base">{title}</h3>
          <time className="font-sans text-xs text-muted-foreground">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <p className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert mt-2">
            {description}
          </p>
        </div>
      </div>
      <div className="mt-auto flex flex-col px-4 pb-4">
        {technologies && technologies.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {technologies?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1 mt-4">
            {links?.map((link, idx) => (
              <a href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon && <link.icon className="h-3 w-3" />}
                  {link.type}
                </Badge>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
