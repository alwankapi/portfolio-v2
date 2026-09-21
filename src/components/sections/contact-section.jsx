import BlurFade from "../magicui/blur-fade";
import { DATA } from "../../data/resume";

export default function ContactSection({ blurFadeDelay }) {
  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <BlurFade delay={blurFadeDelay * 16}>
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-semibold">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Want to chat? Just send me a{" "}
              <a
                href={DATA.contact.social.Instagram.url}
                className="text-orange-600 hover:underline dark:text-orange-400 font-medium"
                target="_blank"
                rel="noreferrer"
              >
                dm on Instagram
              </a>{" "}
              or email and I'll respond whenever I can.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
