import { useEffect, useRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import { gsap } from "gsap";

type CommonProps = {
  variant?: "primary" | "ghost";
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };
type AnchorProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };

export function MagneticButton(props: ButtonProps | AnchorProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const xTo = gsap.quickTo(el, "x", { duration: 0.55, ease: "elastic.out(1, 0.5)" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.55, ease: "elastic.out(1, 0.5)" });

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      xTo(x * 0.25);
      yTo(y * 0.35);
    };
    const onLeave = () => {
      xTo(0);
      yTo(0);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const variant = props.variant ?? "primary";
  const cls = `magnetic-btn ${variant === "primary" ? "magnetic-btn-primary" : "magnetic-btn-ghost"} ${props.className ?? ""}`;

  if ("as" in props && props.as === "a") {
    const { as: _as, variant: _v, className: _c, children, ...rest } = props;
    return (
      <a ref={ref as React.RefObject<HTMLAnchorElement>} className={cls} {...rest}>
        {children}
        <Arrow />
      </a>
    );
  }
  const { variant: _v, className: _c, children, as: _as, ...rest } = props as ButtonProps;
  return (
    <button ref={ref as React.RefObject<HTMLButtonElement>} className={cls} {...rest}>
      {children}
      <Arrow />
    </button>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 12L12 2M12 2H4.5M12 2V9.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square" />
    </svg>
  );
}
