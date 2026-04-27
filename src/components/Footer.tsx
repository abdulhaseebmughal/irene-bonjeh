import { Button } from "./Button";
import mark from "@/assets/irene-mark.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-paper section-gap pb-10">
      {/* Pre-footer CTA */}
      <section className="border-b border-paper/15">
        <div className="container-fluid py-7 md:py-8">
          <p className="eyebrow text-paper/60 mb-10">Begin</p>
          <h2 className="editorial-display text-paper">
            One conversation
            <br />
            <span className="italic text-accent">changes the room.</span>
          </h2>
          <p className="mt-10 max-w-xl text-paper/70 text-lg leading-relaxed">
            Twenty minutes. No pitch. We talk through what you are actually trying to be
            understood for and whether working together would make that easier.
          </p>
          <div className="mt-12">
            <Button
              as="a"
              href="https://cal.com/irene-bonjeh/clarity-call"
              target="_blank"
              rel="noopener noreferrer"
              className="!bg-paper !text-foreground !border-paper hover:!bg-accent hover:!border-accent w-full sm:w-auto"
            >
              Book a Clarity Call
            </Button>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-b border-paper/15 py-8">
        <div className="marquee-track flex whitespace-nowrap font-serif italic text-paper/40 text-3xl md:text-5xl">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center">
              {[
                "Communication",
                "Strategy",
                "Voice",
                "Trust",
                "Clarity",
                "Reputation",
                "Leadership",
              ].map((w) => (
                <span key={w + i} className="px-12 inline-flex items-center">
                  {w}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="container-fluid py-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="h-9 w-9 rounded-full overflow-hidden border border-paper/20">
                <img src={mark} alt="Practice" className="h-full w-full object-cover" />
              </span>
              <span className="font-serif text-lg">Clarity Catalyst</span>
            </div>
            <p className="mt-5 text-paper/60 text-sm max-w-sm leading-relaxed">
              An independent communications practice for leaders who would rather be
              understood than amplified.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-paper/40 text-[11px] tracking-[0.22em] uppercase mb-5">Practice</p>
            <ul className="space-y-3 text-paper/80 text-sm">
              <li><a href="#mission" className="hover:text-accent transition-colors">Practice</a></li>
              <li><a href="#strategy" className="hover:text-accent transition-colors">Approach</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Engagements</a></li>
              <li><a href="#voice" className="hover:text-accent transition-colors">About</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-paper/40 text-[11px] tracking-[0.22em] uppercase mb-5">Elsewhere</p>
            <ul className="space-y-3 text-paper/80 text-sm">
              <li>
                <a href="https://cal.com/irene-bonjeh/clarity-call" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  cal.com/irene-bonjeh/clarity-call
                </a>
              </li>
              <li>
                <a href="https://bit.ly/4840ZYH" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  The Comms Trap newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-paper/15 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-[12px] text-paper/50">
          <span>© {new Date().getFullYear()} All rights reserved.</span>
          <div className="flex items-center gap-2">
            <span>Built by</span>
            <a
              href="https://www.linkedin.com/in/abdul-haseeb-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-paper text-foreground px-3 py-1.5 rounded-md font-bold tracking-tight hover:bg-accent transition-colors"
            >
              Abdul Haseeb
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

