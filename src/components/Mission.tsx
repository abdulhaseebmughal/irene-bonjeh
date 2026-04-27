import mission from "@/assets/mission-portrait.jpg";

export function Mission() {
  return (
    <section id="mission" className="section-gap">
      <div className="container-fluid">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-md border border-border-strong aspect-[4/5]">
              <img src={mission} alt="Irene speaking on a leadership panel" loading="lazy" className="h-full w-full object-cover" style={{ objectPosition: "top center" }} />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="eyebrow mb-8">The Practice</p>
            <h2 className="editorial-h2">
              Words are not decoration.
              <br />
              <span className="text-secondary italic">They are infrastructure.</span>
            </h2>
            <div className="mt-12 space-y-6 text-lg leading-relaxed text-foreground/85 max-w-2xl">
              <p>
                For two decades I have sat at the table where reputations are built and quietly,
                where they are lost. The lesson is the same on every continent: the leaders who
                endure are the ones whose communication carries the weight of their conviction.
              </p>
              <p>
                My practice is built for that work. Not louder messaging. Not faster content.
                A clearer way to be understood by the people whose belief actually matters to you.
              </p>
              <p className="font-serif text-xl text-foreground">
                Clarity is the most underrated form of leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

