import { Button } from "./Button";
import hero from "@/assets/hero-portrait.jpg";

export function Hero() {
  return (
    <section id="top" className="relative pt-48 md:pt-60 pb-8 md:pb-10 overflow-hidden section-gap">
      <div className="container-fluid">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col w-full">
            <p className="eyebrow mb-14 flex flex-wrap gap-x-12 gap-y-4">
              <span>Strategic Communications</span>
              <span>Brand Voice</span>
              <span>Public Affairs</span>
            </p>
            <h1 className="editorial-display">
              Communication
              <br />
              that earns
              <br />
              <em className="italic font-light text-secondary">trust.</em>
            </h1>
            <p className="body-lead mt-10 text-foreground/80">
              I help leaders, founders and institutions move from noise to clarity shaping the narrative
              that puts their work, and their values, at the centre of the conversation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                as="a"
                href="https://cal.com/irene-bonjeh/clarity-call"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                Book a Clarity Call
              </Button>
              <Button as="a" href="#services" variant="ghost" className="w-full sm:w-auto">
                See how we work together
              </Button>
            </div>
          </div>

          <div className="w-full mt-10 md:mt-16 lg:mt-0 lg:pt-24">
            <div className="relative">
              <div className="overflow-hidden rounded-md border border-border-strong bg-muted aspect-[4/5]">
                <img
                  src={hero}
                  alt="Communications strategist"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: "top center" }}
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between text-[12px] tracking-wide text-muted-foreground font-sans">
                <span>Communications Strategy</span>
                <span className="font-serif italic text-foreground/70">Founder &amp; Principal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet credibility row */}
        <div className="mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border-strong border border-border-strong rounded-md overflow-hidden">
          {[
            ["15+", "Years in strategic comms"],
            ["3", "Continents of practice"],
            ["40+", "Leaders advised"],
            ["1", "Newsletter, weekly"],
          ].map(([n, l]) => (
            <div key={l} className="bg-paper px-6 py-7">
              <div className="font-serif text-3xl">{n}</div>
              <div className="mt-2 text-[12px] uppercase tracking-[0.18em] text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

