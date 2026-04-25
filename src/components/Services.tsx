import services from "@/assets/services-portrait.jpg";
import { MagneticButton } from "./MagneticButton";

const engagements = [
  {
    name: "Executive Voice",
    span: "8–12 weeks",
    body: "A focused engagement to find, articulate and stabilise the way you sound when it counts — keynotes, board rooms, op-eds, social. We end with a voice guide your team can actually use.",
    items: ["Voice & narrative audit", "Signature message architecture", "Speaking & writing playbook"],
  },
  {
    name: "The Comms Audit",
    span: "3–4 weeks",
    body: "An outside read on the gap between what you mean to say and what your audiences are actually receiving — across web, press, internal comms and stakeholder relationships.",
    items: ["Stakeholder perception scan", "Channel-by-channel diagnosis", "Priority interventions, ranked"],
  },
  {
    name: "Advisory Retainer",
    span: "Ongoing",
    body: "A senior thinking partner on call — for the launch, the difficult statement, the board update, the moment something breaks. Quiet, fast, considered.",
    items: ["Monthly strategy sessions", "On-call moments of pressure", "Drafting & sharpening on demand"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-10 md:py-14">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-7">
            <p data-reveal className="eyebrow mb-8">Engagements</p>
            <h2 data-reveal className="editorial-h2 text-5xl md:text-6xl lg:text-7xl">
              Three ways we&nbsp;
              <span className="italic text-secondary">work&nbsp;together.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <p data-reveal className="text-lg text-foreground/75 leading-relaxed">
              Each engagement is shaped to the room you are walking into next. None of them
              run on a template. All of them begin with a single conversation.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <div data-reveal-stagger className="lg:col-span-8 space-y-5">
            {engagements.map((e) => (
              <article
                key={e.name}
                data-reveal
                className="group rounded-md border border-border-strong bg-paper p-8 md:p-10 transition-colors hover:border-foreground/40"
              >
                <header className="flex flex-wrap items-baseline justify-between gap-4">
                  <h3 className="font-serif text-3xl md:text-[34px] tracking-tight">{e.name}</h3>
                  <span className="text-[12px] tracking-[0.2em] uppercase text-muted-foreground">{e.span}</span>
                </header>
                <p className="mt-5 text-foreground/80 leading-relaxed max-w-2xl">{e.body}</p>
                <ul className="mt-8 grid sm:grid-cols-3 gap-x-6 gap-y-3 text-[14px]">
                  {e.items.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/85">
                      <span className="mt-[7px] h-[5px] w-[5px] rounded-full bg-secondary shrink-0" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <aside className="lg:col-span-4">
            <div data-reveal className="sticky top-32 rounded-md border border-border-strong overflow-hidden bg-paper">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={services} alt="Working session" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-8">
                <p className="font-serif text-xl leading-snug">
                  Not sure which fits? Start with a clarity call — we will know in twenty minutes.
                </p>
                <div className="mt-6">
                  <MagneticButton
                    as="a"
                    href="https://cal.com/irene-bonjeh/clarity-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full justify-center"
                  >
                    Book a Clarity Call
                  </MagneticButton>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
