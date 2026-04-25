import mark from "@/assets/irene-mark.png";

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-6">
        <div className="flex items-center justify-between rounded-md border border-border bg-paper/80 backdrop-blur-md px-5 py-3">
          <a href="#top" className="flex items-center gap-3">
            <span className="h-8 w-8 rounded-full overflow-hidden border border-border-strong">
              <img src={mark} alt="Irene Bonjeh Azong-Wara" className="h-full w-full object-cover" />
            </span>
            <span className="font-serif text-base tracking-tight">
              Irene Bonjeh <span className="text-muted-foreground">Azong-Wara</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-[13px] text-muted-foreground">
            <a href="#mission" className="hover:text-foreground transition-colors">Practice</a>
            <a href="#strategy" className="hover:text-foreground transition-colors">Approach</a>
            <a href="#services" className="hover:text-foreground transition-colors">Engagements</a>
            <a href="#voice" className="hover:text-foreground transition-colors">Voice</a>
            <a href="#letters" className="hover:text-foreground transition-colors">Letters</a>
          </nav>
          <a
            href="https://cal.com/irene-bonjeh/clarity-call"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-[13px] font-medium text-foreground border-b border-foreground/40 pb-0.5 hover:border-foreground transition-colors"
          >
            Book a Clarity Call
          </a>
        </div>
      </div>
    </header>
  );
}
