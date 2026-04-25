import strategy from "@/assets/strategy-portrait.jpg";

const pillars = [
  {
    title: "Listen first",
    body: "Before a single word is written, I sit with the room you operate in — your audiences, your stakeholders, the silences. Strategy without listening is just noise rearranged.",
  },
  {
    title: "Find the through-line",
    body: "Every leader I work with is already saying something true. My work is to find it, sharpen it, and make sure it survives the meeting, the press call, the keynote and the inbox.",
  },
  {
    title: "Build for repetition",
    body: "Trust is earned by saying the same essential thing in a hundred ways across years. We design messaging that holds up under that kind of repetition.",
  },
  {
    title: "Protect the voice",
    body: "What separates a recognised leader from a generic one is voice. I treat yours as an asset — and I do not let trends or templates flatten it.",
  },
];

export function Strategy() {
  return (
    <section id="strategy" className="py-32 md:py-40 bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <p data-reveal className="eyebrow mb-8">Approach</p>
            <h2 data-reveal className="editorial-h2 text-5xl md:text-6xl">
              A method, not a&nbsp;
              <span className="italic text-secondary">megaphone.</span>
            </h2>
            <p data-reveal className="body-lead mt-8 text-foreground/80">
              Four commitments shape every engagement. They are quiet. They are stubborn.
              They are the reason this work travels.
            </p>
            <div data-reveal className="mt-10 overflow-hidden rounded-md border border-border-strong aspect-[4/5] max-w-sm">
              <img src={strategy} alt="Irene in a working session" loading="lazy" data-parallax className="h-full w-full object-cover" style={{ objectPosition: "center 20%" }} />
            </div>
          </div>

          <div data-reveal-stagger className="lg:col-span-7 border border-border-strong rounded-md overflow-hidden bg-paper divide-y divide-border-strong">
            {pillars.map((p) => (
              <article key={p.title} data-reveal className="p-8 md:p-10">
                <h3 className="font-serif text-2xl md:text-[28px] tracking-tight">{p.title}</h3>
                <p className="mt-4 text-foreground/75 leading-relaxed max-w-xl">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
