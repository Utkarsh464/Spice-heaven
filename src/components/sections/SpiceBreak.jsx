import { IMAGES as I } from "../../constants/images";

export default function SpiceBreak() {
  return (
    <div style={{ position: "relative", height: 340, overflow: "hidden" }}>
      <img
        src={I.spice}
        alt="Spices"
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", filter: "brightness(.3) saturate(1.1)" }}
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, var(--ink) 0%, transparent 40%, transparent 60%, var(--ink) 100%)" }} />
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 12 }}>
        <p className="rv" style={{ fontFamily: "var(--sans)", fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold)" }}>
          A Sensory Universe
        </p>
        <p className="rv d1" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,4vw,3.8rem)", fontWeight: 400, fontStyle: "italic", color: "var(--cream)", textAlign: "center" }}>
          Every grain of spice tells a story
        </p>
      </div>
    </div>
  );
}
