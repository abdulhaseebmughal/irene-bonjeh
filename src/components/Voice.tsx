import voice from "@/assets/voice-portrait.jpg";
import about from "@/assets/about-portrait.jpg";

export function Voice() {
  return (
    <section id="voice" className="py-20 md:py-24 bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p data-reveal className="eyebrow mb-10">In her own words</p>

        <figure data-reveal className="max-w-5xl">
          <p className="editorial-h2 text-4xl md:text-5xl lg:text-6xl text-foreground">
            The brands and leaders we still believe in
            <span className="text-secondary italic"> are the ones who refused to sound like everyone else.</span>
            That refusal is not branding. It is character, made audible.
          </p>
          <figcaption className="mt-10 flex items-center gap-4 text-[13px] text-muted-foreground">
            <span className="h-px w-10 bg-foreground/40" />
            <span>Irene Bonjeh Azong-Wara</span>
          </figcaption>
        </figure>

        <div className="mt-28 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div data-reveal className="overflow-hidden rounded-md border border-border-strong aspect-[3/4]">
              <img src={voice} alt="Irene at work" loading="lazy" className="h-full w-full object-cover" style={{ objectPosition: "center 20%" }} />
            </div>
            <div data-reveal className="overflow-hidden rounded-md border border-border-strong aspect-[3/4]">
              <img src={about} alt="Irene portrait" loading="lazy" className="h-full w-full object-cover" style={{ objectPosition: "center 20%" }} />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p data-reveal className="eyebrow mb-6">A short biography</p>
            <h3 data-reveal className="editorial-h2 text-4xl md:text-5xl">
              Cameroonian by origin. <em className="italic text-secondary">Strategic by trade.</em>
            </h3>
            <div data-reveal-stagger className="mt-10 space-y-5 text-foreground/80 leading-relaxed text-[17px] max-w-2xl">
              <p data-reveal>
                For more than fifteen years I have advised executives, founders and institutions
                across Africa, Europe and North America on how to be heard — and, more importantly,
                on how to be believed.
              </p>
              <p data-reveal>
                The work has spanned crisis, growth, transition and reinvention. The thread that runs
                through all of it is the same: a refusal to confuse visibility with credibility, and a
                quiet conviction that the right sentence, at the right moment, can change a room.
              </p>
              <p data-reveal>
                Today, my practice is small by design. I take on a deliberately limited number of
                engagements each year so that the work — and the people behind it — stay first.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
