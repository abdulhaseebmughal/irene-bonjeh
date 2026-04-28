import { Button } from "./Button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-48 md:pt-60 pb-8 md:pb-10 overflow-hidden section-gap"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/47/85/8d/47858d858fe59255805a2af1c1972718.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* dark overlay so text stays legible */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: "rgba(0,0,0,0.52)" }} />

      <div className="container-fluid relative z-10">
        <div className="max-w-2xl">
          <p
            className="eyebrow mb-14 flex flex-wrap gap-x-12 gap-y-4"
            style={{ color: "rgba(255,255,255,0.58)" }}
          >
            <span>Strategic Communications</span>
            <span>Brand Voice</span>
            <span>Public Affairs</span>
          </p>

          <h1 className="editorial-display" style={{ color: "white" }}>
            Communication
            <br />
            that earns
            <br />
            <em className="italic font-light" style={{ color: "rgba(255,255,255,0.72)" }}>
              trust.
            </em>
          </h1>

          <p className="body-lead mt-10" style={{ color: "rgba(255,255,255,0.76)" }}>
            I help leaders, founders and institutions move from noise to clarity — shaping the
            narrative that puts their work, and their values, at the centre of the conversation.
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
            <Button
              as="a"
              href="#services"
              variant="ghost"
              className="w-full sm:w-auto"
              style={{ color: "white", borderColor: "rgba(255,255,255,0.32)" }}
            >
              See how we work together
            </Button>
          </div>
        </div>

        {/* credibility row */}
        <div
          className="mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px rounded-md overflow-hidden"
          style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          {[
            ["15+", "Years in strategic comms"],
            ["3", "Continents of practice"],
            ["40+", "Leaders advised"],
            ["1", "Newsletter, weekly"],
          ].map(([n, l]) => (
            <div key={l} className="px-6 py-7" style={{ backgroundColor: "rgba(0,0,0,0.32)" }}>
              <div className="font-serif text-3xl" style={{ color: "white" }}>
                {n}
              </div>
              <div
                className="mt-2 text-[12px] uppercase tracking-[0.18em]"
                style={{ color: "rgba(255,255,255,0.48)" }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
