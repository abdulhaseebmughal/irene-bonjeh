import mission from "@/assets/mission-portrait.jpg";

export function Mission() {
  return (
    <section id="mission" className="py-32 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div data-reveal className="overflow-hidden rounded-md border border-border-strong aspect-[4/5]">
              <img src={mission} alt="Irene speaking on a leadership panel" loading="lazy" data-parallax className="h-full w-full object-cover scale-105" />
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <p data-reveal className="eyebrow mb-8">The Practice</p>
            <h2 data-reveal className="editorial-h2 text-5xl md:text-6xl lg:text-7xl">
              Words are not decoration.
              <br />
              <span className="text-secondary italic">They are infrastructure.</span>
            </h2>
            <div data-reveal-stagger className="mt-12 space-y-6 text-lg leading-relaxed text-foreground/85 max-w-2xl">
              <p data-reveal>
                For two decades I have sat at the table where reputations are built — and quietly,
                where they are lost. The lesson is the same on every continent: the leaders who
                endure are the ones whose communication carries the weight of their conviction.
              </p>
              <p data-reveal>
                My practice is built for that work. Not louder messaging. Not faster content.
                A clearer way to be understood by the people whose belief actually matters to you.
              </p>
              <p data-reveal className="font-serif italic text-xl text-foreground">
                &ldquo;Clarity is the most underrated form of leadership.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
