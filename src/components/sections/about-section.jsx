import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import BlurFade from "../magicui/blur-fade";
import { DATA } from "../../data/resume";

export default function AboutSection({ blurFadeDelay }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn("Audio playback prevented:", err);
          setIsPlaying(false);
        });
    }
  };

  return (
    <section id="about" className="w-full">
      <article className="space-y-4 text-[15px] leading-[1.7] text-neutral-600 dark:text-neutral-400">
        <BlurFade delay={blurFadeDelay * 1.5}>
          <p className="text-[16px] font-medium text-foreground tracking-tight">
            Creativity is the actual skill. Tech is just the tool.
          </p>
        </BlurFade>

        <BlurFade delay={blurFadeDelay * 2}>
          <p>
            I design interfaces in{" "}
            <span className="kw kw-figma font-semibold text-foreground">
              Figma
            </span>
            , build responsive frontends in{" "}
            <span className="kw kw-dashed kw-react font-semibold text-foreground">
              React
              <span className="kw-coder" aria-hidden="true">
                <svg viewBox="0 0 26 20" className="w-full">
                  <g shapeRendering="crispEdges">
                    <g className="kw-coder-head">
                      <rect x="8" y="1" width="10" height="2" fill="#2c2c2c" />
                      <rect x="8" y="3" width="10" height="7" fill="#e8b88a" />
                      <rect x="8" y="3" width="1" height="4" fill="#2c2c2c" />
                      <rect x="17" y="3" width="1" height="4" fill="#2c2c2c" />
                      <rect x="10" y="6" width="2" height="2" fill="#2c2c2c" />
                      <rect x="14" y="6" width="2" height="2" fill="#2c2c2c" />
                    </g>
                    <rect x="4" y="11" width="18" height="6" fill="#3b5bff" />
                    <rect x="5" y="10" width="16" height="9" fill="#2c2c2c" />
                    <rect x="12" y="13" width="2" height="2" fill="#6b8aff" />
                    <rect className="kw-coder-hand" x="2" y="14" width="2" height="2" fill="#e8b88a" />
                    <rect className="kw-coder-hand kw-coder-hand-r" x="22" y="14" width="2" height="2" fill="#e8b88a" />
                  </g>
                </svg>
              </span>
            </span>{" "}
            and Next.js, and style them with{" "}
            <span className="kw kw-dashed kw-wavy font-semibold text-foreground">
              Tailwind CSS
              <span className="kw-waveclip" aria-hidden="true">
                <svg className="kw-wave" viewBox="0 0 80 6" preserveAspectRatio="none">
                  <path d="M0 3 Q2.5 0.6 5 3 T10 3 T15 3 T20 3 T25 3 T30 3 T35 3 T40 3 T45 3 T50 3 T55 3 T60 3 T65 3 T70 3 T75 3 T80 3" />
                </svg>
              </span>
            </span>
            . On the backend, I craft reliable architectures using PHP, Laravel, and CodeIgniter. The goal is simple: applications that look clean, feel fast, and solve real problems.
          </p>
        </BlurFade>

        <BlurFade delay={blurFadeDelay * 2.5}>
          <p>
            Currently, I am an Information Technology student based in Jakarta. I work on real-world information systems — from campus administration platforms and library portals to mobile experiences with{" "}
            <span className="kw kw-dashed font-semibold text-foreground">
              Flutter
            </span>
            . I care deeply about user experience, accessible layouts, and clean codebase architecture.
          </p>
        </BlurFade>

        <BlurFade delay={blurFadeDelay * 3}>
          <p>
            Everything I know came from finding well-crafted things on the internet, taking them apart to understand how they work, and rebuilding them better — usually with{" "}
            <span
              className="kw kw-dashed kw-music font-semibold text-foreground cursor-pointer select-none inline-flex items-center gap-0.5"
              onClick={toggleMusic}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && toggleMusic(e)}
              aria-label={isPlaying ? "Pause music" : "Play music"}
            >
              <span>music</span>
              {isPlaying && (
                <span className="kw-eq is-playing" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              )}
              <span
                className="kw-pop kw-pop--music"
                onClick={toggleMusic}
                aria-hidden="true"
              >
                <span className={`kw-vinyl ${isPlaying ? "is-playing" : ""}`}>
                  <span className="kw-vinyl-center">
                    {isPlaying ? (
                      <Pause className="size-2 text-white fill-current" />
                    ) : (
                      <Play className="size-2 text-white fill-current ml-[1px]" />
                    )}
                  </span>
                </span>
                <span className="flex flex-col text-left">
                  <span className="text-[12px] font-semibold text-foreground flex items-center gap-1">
                    <span>{DATA.music?.title || "Coding Focus"}</span>
                    <span className={`kw-eq ${isPlaying ? "is-playing" : ""}`}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </span>
                  <span className="text-[10px] text-muted-foreground flex items-center justify-between gap-3">
                    <span>{DATA.music?.artist || "Lofi Beats"}</span>
                    <span className="text-[9px] font-medium text-orange-500 dark:text-orange-400">
                      {isPlaying ? "Click to Pause" : "Click to Play"}
                    </span>
                  </span>
                </span>
              </span>
            </span>{" "}
            in my ears.
          </p>
        </BlurFade>
      </article>

      <audio
        ref={audioRef}
        src={DATA.music?.src || "/music.mp3"}
        preload="none"
        loop
        onEnded={() => setIsPlaying(false)}
      />
    </section>
  );
}


