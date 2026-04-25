import { MagneticButton } from "./MagneticButton";
import hero from "@/assets/hero-portrait.jpg";

export function Hero() {
  return (
    <section id="top" className="relative pt-36 md:pt-44 pb-24 md:pb-32 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <p data-reveal className="eyebrow mb-8">
              Strategic Communications &nbsp;·&nbsp; Brand Voice &nbsp;·&nbsp; Public Affairs
            </p>
            <h1 data-reveal className="editorial-display text-[14vw] sm:text-[10vw] lg:text-[7.2vw] xl:text-[112px]">
              Communication
              <br />
              that earns
              <br />
              <em className="italic font-light text-secondary">trust.</em>
            </h1>
            <p data-reveal className="body-lead mt-10 max-w-xl text-foreground/80">
              I help leaders, founders and institutions move from noise to clarity — shaping the narrative
              that puts their work, and their values, at the centre of the conversation.
            </p>
            <div data-reveal className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton
                as="a"
                href="https://cal.com/irene-bonjeh/clarity-call"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Clarity Call
              </MagneticButton>
              <MagneticButton as="a" href="#services" variant="ghost">
                See how we work together
              </MagneticButton>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div data-reveal className="relative">
              <div className="overflow-hidden rounded-md border border-border-strong bg-muted aspect-[4/5]">
                <img
                  src={hero}
                  alt="Irene Bonjeh Azong-Wara, communications strategist"
                  data-parallax
                  className="h-full w-full object-cover scale-105"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between text-[12px] tracking-wide text-muted-foreground">
                <span>Irene Bonjeh Azong-Wara</span>
                <span className="font-serif italic text-foreground/70">Founder &amp; Principal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet credibility row */}
        <div data-reveal className="mt-24 lg:mt-32 grid grid-cols-2 md:grid-cols-4 gap-px bg-border-strong border border-border-strong rounded-md overflow-hidden">
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
