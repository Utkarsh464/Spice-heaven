import { useState } from "react";
import { openIGDM } from "../../utils/instagram";

/**
 * IGButton — Instagram-branded CTA button.
 *
 * On click:
 *   1. Copies the pre-filled message to clipboard (silently)
 *   2. Opens ig.me/m/webgrowth.in — works on ALL devices
 *   3. Shows a brief "Message copied! Just paste & send 📋" hint
 *
 * Props:
 *   messageKey — key from MESSAGES in instagram.js (default "general")
 *   children   — label
 *   size       — "sm" | "md" | "lg"
 *   variant    — "gradient" | "outline" | "ghost"
 *   style      — extra styles
 *   hint       — optional subtext below button
 *   href       — ignored (kept for API compat)
 */

const IG_ICON = (size = 16) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink:0 }}>
    <rect x="2" y="2" width="20" height="20" rx="6" ry="6" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="18" cy="6" r="1.2" fill="currentColor"/>
  </svg>
);

export default function IGButton({
  messageKey = "general",
  children,
  size = "md",
  variant = "gradient",
  style = {},
  hint,
  href: _href,
}) {
  const [hov, setHov]     = useState(false);
  const [copied, setCopied] = useState(false);

  const pad   = size === "sm" ? "9px 18px" : size === "lg" ? "18px 52px" : "13px 28px";
  const fSize = size === "sm" ? 10 : size === "lg" ? 12 : 11;
  const iconS = size === "sm" ? 13 : size === "lg" ? 17 : 15;

  const base = {
    display: "inline-flex", alignItems: "center", gap: 8,
    fontFamily: "var(--sans)", fontSize: fSize, fontWeight: 400,
    letterSpacing: "0.18em", textTransform: "uppercase",
    textDecoration: "none", cursor: "pointer", border: "none",
    padding: pad, transition: "all .3s var(--ease)",
  };

  const variants = {
    gradient: {
      background: "linear-gradient(135deg,#f09433 0%,#e6683c 22%,#dc2743 50%,#cc2366 78%,#bc1888 100%)",
      color: "white",
      boxShadow: hov ? "0 8px 28px rgba(220,39,67,.45)" : "0 4px 16px rgba(220,39,67,.25)",
      transform: hov ? "translateY(-2px) scale(1.02)" : "none",
    },
    outline: {
      background: hov ? "rgba(220,39,67,.08)" : "transparent",
      color: hov ? "#dc2743" : "#e6683c",
      border: `1px solid ${hov ? "rgba(220,39,67,.6)" : "rgba(220,39,67,.35)"}`,
    },
    ghost: {
      background: hov ? "rgba(220,39,67,.1)" : "rgba(220,39,67,.05)",
      color: "#dc2743",
      border: "1px solid rgba(220,39,67,.2)",
    },
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const didCopy = await openIGDM(messageKey);
    if (didCopy) {
      setCopied(true);
      setTimeout(() => setCopied(false), 3500);
    }
  };

  return (
    <div style={{ display:"inline-flex", flexDirection:"column", alignItems:"center", gap:8 }}>
      <a
        href={`https://ig.me/m/webgrowth.in`}
        onClick={handleClick}
        style={{ ...base, ...variants[variant], ...style }}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
      >
        {IG_ICON(iconS)}
        {children}
      </a>

      {/* Clipboard toast */}
      {copied && (
        <span style={{
          fontFamily:"var(--sans)", fontSize:10, color:"#dc2743",
          letterSpacing:"0.08em", textAlign:"center", lineHeight:1.5,
          background:"rgba(220,39,67,.08)", border:"1px solid rgba(220,39,67,.2)",
          padding:"4px 10px", borderRadius:4,
        }}>
          📋 Message copied — just paste &amp; send!
        </span>
      )}

      {/* Static hint (shown when not copying) */}
      {hint && !copied && (
        <span style={{ fontFamily:"var(--sans)", fontSize:10, color:"var(--muted)", letterSpacing:"0.08em", textAlign:"center", lineHeight:1.5 }}>
          {hint}
        </span>
      )}
    </div>
  );
}
