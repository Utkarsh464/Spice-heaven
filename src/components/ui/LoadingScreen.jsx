import { useEffect } from "react";

/**
 * LoadingScreen
 * Branded splash screen shown once on app load.
 * Fades out after 2.2s and calls onDone().
 */
export default function LoadingScreen({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "var(--ink)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 28,
        animation: "loadFadeOut .6s 1.7s forwards",
      }}
    >
      {/* Spinner ring */}
      <div style={{ position: "relative", width: 80, height: 80 }}>
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          style={{ position: "absolute", inset: 0, animation: "loadSpin 1.4s linear infinite" }}
        >
          <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(200,160,90,.15)" strokeWidth="2" />
          <circle
            cx="40" cy="40" r="34" fill="none"
            stroke="var(--gold)" strokeWidth="2"
            strokeDasharray="60 154" strokeLinecap="round"
          />
        </svg>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <polygon
              points="12,2 14.5,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9.5,9"
              fill="var(--gold)"
              opacity=".9"
            />
          </svg>
        </div>
      </div>

      {/* Brand name */}
      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: "var(--serif)", fontSize: 28, color: "var(--gold)", letterSpacing: "0.04em" }}>
          Spice Haven
        </div>
        <div
          style={{
            fontFamily: "var(--sans)",
            fontSize: 9,
            letterSpacing: "0.38em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginTop: 4,
          }}
        >
          Fine Indian Cuisine
        </div>
      </div>

      {/* Shimmer bar */}
      <div
        style={{
          width: 120,
          height: 1,
          background: "rgba(200,160,90,.15)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: "40%",
            background: "linear-gradient(to right, transparent, var(--gold), transparent)",
            animation: "shimmer 1.2s ease-in-out infinite",
          }}
        />
      </div>
    </div>
  );
}
