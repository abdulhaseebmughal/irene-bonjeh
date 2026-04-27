import { Button } from "./Button";
import cta from "@/assets/cta-portrait.jpg";

export function Newsletter() {
  return (
    <section id="letters" className="section-gap">
      <div className="container-fluid">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="w-full">
            <p className="eyebrow mb-8">The Comms Trap weekly letter</p>
            <h2 className="editorial-h2">
              The mistakes
              <br />
              smart leaders
              <br />
              <span className="italic text-secondary">keep making.</span>
            </h2>
            <p className="body-lead mt-10 text-foreground/80 max-w-xl">
              A short, honest letter every week on the patterns I see inside boardrooms,
              campaigns and brand teams and what to do instead. Read by founders, comms
              leads and operators who would rather get it right quietly than loudly.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
              <Button
                as="a"
                href="https://bit.ly/4840ZYH"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                Subscribe to The Comms Trap
              </Button>
              <span className="text-[13px] text-muted-foreground">No spam. One letter, every Wednesday.</span>
            </div>
          </div>

          <div className="w-full">
            <div className="rounded-md border border-border-strong overflow-hidden bg-paper">
              <div className="aspect-[4/5] overflow-hidden border-b border-border-strong">
                <img src={cta} alt="Irene" loading="lazy" className="h-full w-full object-cover" style={{ objectPosition: "top center" }} />
              </div>
              <div className="p-8">
                <p className="font-serif text-xl leading-snug text-foreground">
                  The week she wrote about the difference between being seen and being trusted
                  shifted how my whole team writes.
                </p>
                <p className="mt-5 text-[12px] uppercase tracking-[0.2em] text-muted-foreground">
                  Subscriber, Series B founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

