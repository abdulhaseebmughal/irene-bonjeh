import { useState } from "react";
import mark from "@/assets/irene-mark.png";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container-fluid pt-6">
        <div className="flex items-center justify-between rounded-md border border-border bg-paper/80 backdrop-blur-md px-5 py-3">
          <a href="#top" className="flex items-center gap-3">
            <span className="h-8 w-8 rounded-full overflow-hidden border border-border-strong">
              <img src={mark} alt="Irene Bonjeh Azong-Wara" className="h-full w-full object-cover" />
            </span>
            <span className="font-serif text-base tracking-tight">
              Clarity <span className="text-muted-foreground">Catalyst</span>
            </span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8 text-[13px] text-muted-foreground">
            <a href="#mission" className="hover:text-foreground transition-colors">Practice</a>
            <a href="#strategy" className="hover:text-foreground transition-colors">Approach</a>
            <a href="#services" className="hover:text-foreground transition-colors">Engagements</a>
            <a href="#voice" className="hover:text-foreground transition-colors">Voice</a>
            <a href="#letters" className="hover:text-foreground transition-colors">Letters</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://cal.com/irene-bonjeh/clarity-call"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 text-[13px] font-medium text-foreground border-b border-foreground/40 pb-0.5 hover:border-foreground transition-colors"
            >
              Book a Clarity Call
            </a>

            <button 
              className="md:hidden p-1 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="md:hidden mt-2 rounded-md border border-border bg-paper/95 backdrop-blur-md p-6 shadow-xl animate-in fade-in zoom-in-95 duration-200">
            <nav className="flex flex-col gap-5 text-sm font-medium">
              <a href="#mission" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Practice</a>
              <a href="#strategy" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Approach</a>
              <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Engagements</a>
              <a href="#voice" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Voice</a>
              <a href="#letters" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Letters</a>
              <hr className="border-border" />
              <a
                href="https://cal.com/irene-bonjeh/clarity-call"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold"
              >
                Book a Clarity Call
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

