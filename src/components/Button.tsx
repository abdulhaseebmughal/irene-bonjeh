import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type CommonProps = {
  variant?: "primary" | "ghost";
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };
type AnchorProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };

export function Button(props: ButtonProps | AnchorProps) {
  const variant = props.variant ?? "primary";
  const cls = `btn-professional ${variant === "primary" ? "btn-professional-primary" : "btn-professional-ghost"} ${props.className ?? ""}`;

  if ("as" in props && props.as === "a") {
    const { as: _as, variant: _v, className: _c, children, ...rest } = props;
    return (
      <a className={cls} {...rest}>
        {children}
        <Arrow />
      </a>
    );
  }
  const { variant: _v, className: _c, children, as: _as, ...rest } = props as ButtonProps;
  return (
    <button className={cls} {...rest}>
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

