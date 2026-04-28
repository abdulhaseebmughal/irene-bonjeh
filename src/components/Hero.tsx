import { Button } from "./Button";
import hero from "@/assets/hero-portrait.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-48 md:pt-60 pb-8 md:pb-10 overflow-hidden section-gap"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/ea/2b/32/ea2b32c5e532f4337ee8ee864d9a98af.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* dark overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: "rgba(0,0,0,0.52)" }}
      />

      <div className="container-fluid relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — text */}
          <div className="flex flex-col w-full">
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
              I help leaders, founders and institutions move from noise to clarity, shaping the
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

          {/* Right — portrait */}
          <div className="w-full mt-10 md:mt-16 lg:mt-0 lg:pt-24">
            <div className="relative">
              <div
                className="overflow-hidden rounded-md aspect-[4/5]"
                style={{ border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <img
                  src={hero}
                  alt="Communications strategist"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: "top center" }}
                />
              </div>
              <div
                className="mt-5 flex items-baseline justify-between text-[12px] tracking-wide font-sans"
                style={{ color: "rgba(255,255,255,0.48)" }}
              >
                <span>Communications Strategy</span>
                <span className="font-serif italic" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Founder &amp; Principal
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* credibility row */}
        <div
          className="mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px rounded-md overflow-hidden"
          style={{
            backgroundColor: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
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
