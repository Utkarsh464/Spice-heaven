import { useState } from "react";

/**
 * Btn — Primary button component.
 *
 * Props:
 *   children   — button label
 *   onClick    — click handler
 *   outline    — boolean; renders ghost/outline variant
 *   href       — if set, renders as <a> tag
 *   style      — additional inline styles
 *   className  — additional class names
 */
export default function Btn({ children, onClick, outline, href, style = {}, className = "" }) {
  const [hov, setHov] = useState(false);

  const base = {
    fontFamily: "var(--sans)",
    fontSize: 11,
    fontWeight: 400,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    cursor: "pointer",
    border: "none",
    padding: "14px 36px",
    transition: "all .35s var(--ease)",
    display: "inline-block",
    textDecoration: "none",
    ...style,
  };

  const solid = {
    ...base,
    background: "var(--gold)",
    color: "var(--ink)",
  };

  const ghost = {
    ...base,
    background: "transparent",
    color: "var(--cream)",
    border: "1px solid rgba(242,232,213,.25)",
  };

  const solidHov = {
    background: "var(--gold2)",
    transform: "translateY(-2px) scale(1.02)",
    boxShadow: "0 12px 32px rgba(200,160,90,.35)",
  };

  const ghostHov = {
    borderColor: "var(--gold)",
    color: "var(--gold)",
    background: "rgba(200,160,90,.07)",
  };

  const s = outline ? ghost : solid;
  const h = outline ? ghostHov : solidHov;
  const combined = hov ? { ...s, ...h } : s;

  const events = {
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
  };

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" style={combined} className={className} {...events}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} style={combined} className={className} {...events}>
      {children}
    </button>
  );
}
