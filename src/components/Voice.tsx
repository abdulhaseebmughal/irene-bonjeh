import voice from "@/assets/voice-portrait.jpg";
import about from "@/assets/about-portrait.jpg";

export function Voice() {
  return (
    <section id="voice" className="section-gap bg-surface">
      <div className="container-fluid">
        <p className="eyebrow mb-10">In her own words</p>

        <figure className="max-w-5xl">
          <p className="editorial-h2 text-foreground">
            The brands and leaders we still believe in
            <span className="text-secondary italic"> are the ones who refused to sound like everyone else.</span>
            That refusal is not branding. It is character, made audible.
          </p>
          <figcaption className="mt-10 flex items-center gap-4 text-[13px] text-muted-foreground">
            <span>The Practice</span>
          </figcaption>
        </figure>

        <div className="mt-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-md border border-border-strong aspect-[3/4]">
              <img src={voice} alt="Irene at work" loading="lazy" className="h-full w-full object-cover" style={{ objectPosition: "top center" }} />
            </div>
            <div className="overflow-hidden rounded-md border border-border-strong aspect-[3/4]">
              <img src={about} alt="Irene portrait" loading="lazy" className="h-full w-full object-cover" style={{ objectPosition: "top center" }} />
            </div>
          </div>
          <div className="w-full">
            <p className="eyebrow mb-6">A short biography</p>
            <h3 className="editorial-h2">
              Cameroonian by origin. <em className="italic text-secondary">Strategic by trade.</em>
            </h3>
            <div className="mt-10 space-y-5 text-foreground/80 leading-relaxed text-[17px] max-w-2xl">
              <p>
                For more than fifteen years I have advised executives, founders and institutions
                across Africa, Europe and North America on how to be heard and, more importantly,
                on how to be believed.
              </p>
              <p>
                The work has spanned crisis, growth, transition and reinvention. The thread that runs
                through all of it is the same: a refusal to confuse visibility with credibility, and a
                quiet conviction that the right sentence, at the right moment, can change a room.
              </p>
              <p>
                Today, my practice is small by design. I take on a deliberately limited number of
                engagements each year so that the work and the people behind it stay first.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

