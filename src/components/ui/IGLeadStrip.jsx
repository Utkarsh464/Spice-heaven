import { useState } from "react";
import { ig, IG_HANDLE } from "../../utils/instagram";

/**
 * IGLeadStrip
 * A slim sticky banner that sits above the Navbar,
 * driving visitors to Instagram DM.
 * Dismissable. Shown once per session.
 */
export default function IGLeadStrip() {
  const [visible, setVisible] = useState(true);

  const dismiss = () => {
    setVisible(false);
    document.documentElement.style.setProperty("--strip-h", "0px");
  };

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 950,
      background: "linear-gradient(90deg, #bc1888 0%, #dc2743 40%, #f09433 100%)",
      padding: "9px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 16,
      flexWrap: "wrap",
    }}>
      {/* Message */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="6" stroke="white" strokeWidth="1.8"/>
          <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.8"/>
          <circle cx="18" cy="6" r="1.2" fill="white"/>
        </svg>
        <span style={{
          fontFamily: "var(--sans)",
          fontSize: 11,
          letterSpacing: "0.12em",
          color: "white",
          fontWeight: 400,
        }}>
          Want a website like this for your business?
        </span>
        <span style={{
          fontFamily: "var(--sans)",
          fontSize: 11,
          color: "rgba(255,255,255,.75)",
        }}>
          ·
        </span>
        <span style={{
          fontFamily: "var(--sans)",
          fontSize: 11,
          color: "rgba(255,255,255,.85)",
          letterSpacing: "0.05em",
        }}>
          @{IG_HANDLE}
        </span>
      </div>

      {/* CTA */}
      <a
        href={ig.getWebsite()}
        target="_blank"
        rel="noreferrer"
        style={{
          fontFamily: "var(--sans)",
          fontSize: 10,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,.95)",
          textDecoration: "none",
          background: "rgba(255,255,255,.18)",
          border: "1px solid rgba(255,255,255,.35)",
          padding: "4px 14px",
          transition: "all .25s",
          whiteSpace: "nowrap",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,.3)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,.18)")}
      >
        DM Now →
      </a>

      {/* Dismiss */}
      <button
        onClick={() => dismiss()}
        style={{
          position: "absolute",
          right: 14,
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "rgba(255,255,255,.7)",
          fontSize: 16,
          lineHeight: 1,
          padding: "4px",
          transition: "color .2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.7)")}
        title="Dismiss"
      >
        ×
      </button>
    </div>
  );
}
