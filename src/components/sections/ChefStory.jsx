import Tag from "../ui/Tag";
import { IMAGES as I } from "../../constants/images";

export default function ChefStory() {
  return (
    <section
      className="two-col"
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 580, background: "var(--ink2)" }}
    >
      {/* Image */}
      <div className="rv-l img-zoom" style={{ overflow: "hidden", position: "relative" }}>
        <img
          src={I.chef}
          alt="Chef Arjun Mehta"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", filter: "brightness(.65) saturate(.8)", minHeight: 480 }}
        />
        <div style={{ position: "absolute", left: 0, top: "15%", bottom: "15%", width: 3, background: "linear-gradient(to bottom, transparent, var(--gold), transparent)" }} />
      </div>

      {/* Copy */}
      <div className="rv-r" style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "72px 72px" }}>
        <Tag>The Story</Tag>
        <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem,4vw,3.6rem)", fontWeight: 400, color: "var(--cream)", lineHeight: 1.1, marginBottom: 28 }}>
          A Chef's<br /><em style={{ fontStyle: "italic", color: "var(--gold2)" }}>Obsession</em>
        </h2>
        <p style={{ fontFamily: "var(--sans)", fontSize: 14.5, fontWeight: 300, color: "var(--warm)", lineHeight: 1.85, marginBottom: 24 }}>
          Chef Arjun Mehta grew up in a home where cooking was devotion. Trained at the Oberoi Centre of Learning and refined in kitchens across Mumbai, London, and Singapore — he returned to Delhi with a singular vision: to present Indian cuisine in its most honest, elevated form.
        </p>
        <p style={{ fontFamily: "var(--sans)", fontSize: 14.5, fontWeight: 300, color: "var(--muted)", lineHeight: 1.85, marginBottom: 44 }}>
          Every dish is a memory. Every spice is a conversation between past and present.
        </p>
        <blockquote style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.1rem,2vw,1.5rem)", fontStyle: "italic", color: "var(--gold2)", lineHeight: 1.5, borderLeft: "2px solid var(--gold)", paddingLeft: 24 }}>
          "The greatest luxury is a dish that feels like home, no matter where you are."
        </blockquote>
        <p style={{ fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)", marginTop: 12 }}>
          — Chef Arjun Mehta
        </p>
      </div>
    </section>
  );
}
