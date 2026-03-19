import { useState, useEffect, useCallback } from "react";

/**
 * IGToast
 * A global toast that appears when the user clicks any IG DM button.
 * Tells them "Message copied — just paste it in Instagram DM".
 *
 * Usage:
 *   1. Render <IGToast /> once in App.jsx
 *   2. Trigger from anywhere: window.dispatchEvent(new Event("ig-dm-opened"))
 */

let toastTimeout = null;

export function triggerIGToast() {
  window.dispatchEvent(new CustomEvent("ig-dm-opened"));
}

export default function IGToast() {
  const [visible, setVisible]   = useState(false);
  const [leaving, setLeaving]   = useState(false);

  const show = useCallback(() => {
    clearTimeout(toastTimeout);
    setLeaving(false);
    setVisible(true);

    toastTimeout = setTimeout(() => {
      setLeaving(true);
      setTimeout(() => setVisible(false), 400);
    }, 3800);
  }, []);

  useEffect(() => {
    window.addEventListener("ig-dm-opened", show);
    return () => window.removeEventListener("ig-dm-opened", show);
  }, [show]);

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: 104,          // sits above the IGFloat button
      right: 32,
      zIndex: 2000,
      background: "var(--ink3)",
      border: "1px solid rgba(220,39,67,.3)",
      borderLeft: "3px solid #dc2743",
      padding: "14px 18px",
      maxWidth: 290,
      boxShadow: "0 12px 40px rgba(0,0,0,.5)",
      opacity: leaving ? 0 : 1,
      transform: leaving ? "translateY(8px)" : "translateY(0)",
      transition: "opacity .35s var(--ease), transform .35s var(--ease)",
      animation: !leaving ? "fadeUp .3s var(--ease) both" : "none",
    }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="toastIG" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#f09433"/><stop offset="1" stopColor="#bc1888"/>
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="20" height="20" rx="6" stroke="url(#toastIG)" strokeWidth="1.8"/>
          <circle cx="12" cy="12" r="4.5" stroke="url(#toastIG)" strokeWidth="1.8"/>
          <circle cx="18" cy="6" r="1.2" fill="#dc2743"/>
        </svg>
        <span style={{ fontFamily: "var(--sans)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#dc2743" }}>
          Message Copied!
        </span>
      </div>

      {/* Body */}
      <p style={{ fontFamily: "var(--sans)", fontSize: 12.5, color: "var(--warm)", lineHeight: 1.55, marginBottom: 8 }}>
        Instagram is opening. Just <strong style={{ color: "var(--cream)" }}>paste the message</strong> and hit send 🚀
      </p>

      {/* Shortcut hint */}
      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
        {["Ctrl", "+", "V"].map((k, i) => (
          <span key={i} style={{
            fontFamily: "var(--sans)",
            fontSize: k === "+" ? 12 : 10,
            color: k === "+" ? "var(--muted)" : "var(--cream)",
            background: k === "+" ? "none" : "rgba(200,160,90,.12)",
            border: k === "+" ? "none" : "1px solid rgba(200,160,90,.2)",
            padding: k === "+" ? "0 2px" : "2px 7px",
            letterSpacing: "0.08em",
          }}>{k}</span>
        ))}
        <span style={{ fontFamily: "var(--sans)", fontSize: 10, color: "var(--muted)", marginLeft: 4 }}>
          to paste · or long-press on mobile
        </span>
      </div>
    </div>
  );
}
