import { useState } from "react";

const WA_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.107.546 4.09 1.502 5.814L.057 23.78l6.16-1.447A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.96 9.96 0 01-5.387-1.573l-.387-.232-4.007.94.903-3.91-.252-.401A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

/**
 * WAButton — WhatsApp branded CTA link button.
 *
 * Props:
 *   href     — wa.me URL
 *   children — label text
 *   size     — "sm" | "md" (default "md")
 *   style    — additional styles
 */
export default function WAButton({ href, children, size = "md", style = {} }) {
  const [hov, setHov] = useState(false);

  const padding = size === "sm" ? "8px 14px" : "14px 24px";
  const fontSize = size === "sm" ? 10 : 11;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "var(--sans)",
        fontSize,
        fontWeight: 400,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "#25D366",
        textDecoration: "none",
        border: "1px solid rgba(37,211,102,.3)",
        padding,
        background: hov ? "rgba(37,211,102,.15)" : "rgba(37,211,102,.07)",
        borderColor: hov ? "rgba(37,211,102,.6)" : "rgba(37,211,102,.3)",
        transition: "all .3s var(--ease)",
        ...style,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {WA_ICON}
      {children}
    </a>
  );
}
