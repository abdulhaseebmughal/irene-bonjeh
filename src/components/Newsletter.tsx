import { MagneticButton } from "./MagneticButton";
import cta from "@/assets/cta-portrait.jpg";

export function Newsletter() {
  return (
    <section id="letters" className="py-32 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7">
            <p data-reveal className="eyebrow mb-8">The Comms Trap · weekly letter</p>
            <h2 data-reveal className="editorial-h2 text-5xl md:text-6xl lg:text-7xl">
              The mistakes
              <br />
              smart leaders
              <br />
              <span className="italic text-secondary">keep making.</span>
            </h2>
            <p data-reveal className="body-lead mt-10 text-foreground/80 max-w-xl">
              A short, honest letter every week on the patterns I see inside boardrooms,
              campaigns and brand teams — and what to do instead. Read by founders, comms
              leads and operators who would rather get it right quietly than loudly.
            </p>
            <div data-reveal className="mt-10 flex flex-wrap items-center gap-5">
              <MagneticButton
                as="a"
                href="https://bit.ly/4840ZYH"
                target="_blank"
                rel="noopener noreferrer"
              >
                Subscribe to The Comms Trap
              </MagneticButton>
              <span className="text-[13px] text-muted-foreground">No spam. One letter, every Wednesday.</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div data-reveal className="rounded-md border border-border-strong overflow-hidden bg-paper">
              <div className="aspect-[4/5] overflow-hidden border-b border-border-strong">
                <img src={cta} alt="Irene" loading="lazy" data-parallax className="h-full w-full object-cover" style={{ objectPosition: "center 15%" }} />
              </div>
              <div className="p-8">
                <p className="font-serif italic text-xl leading-snug text-foreground">
                  The week she wrote about the difference between being seen and being trusted
                  shifted how my whole team writes.
                </p>
                <p className="mt-5 text-[12px] uppercase tracking-[0.2em] text-muted-foreground">
                  Subscriber, Series-B founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
