import BlurFade from "../magicui/blur-fade";
import { FlickeringGrid } from "../magicui/flickering-grid";
import { DATA } from "../../data/resume";

export default function ContactSection({ blurFadeDelay }) {
  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <BlurFade delay={blurFadeDelay * 16}>
          <div className="border rounded-xl p-10 relative">
            <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
              <span className="text-background text-sm font-medium">
                Contact
              </span>
            </div>
            <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={2}
                gridGap={2}
                style={{
                  maskImage: "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black, transparent)",
                }}
              />
            </div>
            <div className="relative flex flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-lg text-muted-foreground text-balance">
                Want to chat? Just shoot me a dm{" "}
                <a
                  href={DATA.contact.social.Instagram.url}
                  className="text-blue-500 hover:underline underline-offset-4"
                  target="_blank"
                  rel="noreferrer"
                >
                  with a direct question on Instagram
                </a>{" "}
                and I&apos;ll respond whenever I can.
              </p>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

