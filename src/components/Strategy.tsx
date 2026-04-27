import strategy from "@/assets/strategy-portrait.jpg";

const pillars = [
  {
    title: "Listen first",
    body: "Before a single word is written, I sit with the room you operate in your audiences, your stakeholders, the silences. Strategy without listening is just noise rearranged.",
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
    body: "What separates a recognised leader from a generic one is voice. I treat yours as an asset and I do not let trends or templates flatten it.",
  },
];

export function Strategy() {
  return (
    <section id="strategy" className="section-gap bg-surface">
      <div className="container-fluid">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow mb-8">Approach</p>
            <h2 className="editorial-h2">
              A method, not a&nbsp;
              <span className="italic text-secondary">megaphone.</span>
            </h2>
            <p className="body-lead mt-8 text-foreground/80">
              Four commitments shape every engagement. They are quiet. They are stubborn.
              They are the reason this work travels.
            </p>
            <div className="mt-10 overflow-hidden rounded-md border border-border-strong aspect-[4/5] w-full">
              <img src={strategy} alt="Irene in a working session" loading="lazy" className="h-full w-full object-cover" style={{ objectPosition: "top center" }} />
            </div>
          </div>

          <div className="flex flex-col h-full border border-border-strong rounded-md overflow-hidden bg-paper divide-y divide-border-strong">
            {pillars.map((p) => (
              <article key={p.title} className="p-8 md:p-10 flex-1 flex flex-col justify-center">
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

