import { ArrowUpRight } from "lucide-react";

export default function CertificationCard({ cert }) {
  return (
    <a
      href={cert.href || "#"}
      target="_blank"
      rel="noreferrer"
      className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-lg border bg-card p-5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-lg"
    >
      <img
        src={cert.image}
        alt={`Certificate: ${cert.title}`}
        loading="lazy"
        decoding="async"
        width={1200}
        height={813}
        className="aspect-[1200/813] w-full rounded-md border bg-white object-contain"
      />
      <span className="self-start rounded-full border px-2 py-0.5 text-[10px] font-medium tabular-nums text-muted-foreground">
        {cert.year}
      </span>

      <div className="flex flex-col gap-1">
        <h3 className="font-semibold leading-snug text-sm">{cert.title}</h3>
        <p className="text-xs font-medium text-muted-foreground">{cert.organization}</p>
        {cert.description && (
          <p className="mt-1 text-xs text-muted-foreground">{cert.description}</p>
        )}
      </div>

      <span className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-foreground/80 transition-colors group-hover:text-orange-600 dark:group-hover:text-orange-400">
        View certificate
        <ArrowUpRight className="size-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </a>
  );
}
