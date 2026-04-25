import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * useReveal — fade + lift on scroll for any [data-reveal] element inside the scope.
 * Use [data-reveal-stagger] on a parent to stagger its [data-reveal] children together.
 */
export function useReveal() {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scope.current) return;
    const ctx = gsap.context(() => {
      // Standalone reveals
      gsap.utils.toArray<HTMLElement>("[data-reveal]:not([data-reveal-stagger] [data-reveal])").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          },
        );
      });

      // Staggered groups
      gsap.utils.toArray<HTMLElement>("[data-reveal-stagger]").forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>("[data-reveal]");
        gsap.fromTo(
          items,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: { trigger: group, start: "top 80%", once: true },
          },
        );
      });

      // Image parallax
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });
    }, scope);

    return () => ctx.revert();
  }, []);

  return scope;
}
