import { useApp } from "../../context/AppContext";
import Btn from "../ui/Btn";
import WAButton from "../ui/WAButton";
import { IMAGES as I } from "../../constants/images";
import { wa } from "../../utils/whatsapp";

export default function HeroSection() {
  const { navigate } = useApp();

  return (
    <section style={{ position: "relative", height: "100vh", minHeight: 640, overflow: "hidden" }}>
      {/* Background */}
      <img src={I.hero} alt="Spice Haven interior" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.3) saturate(.85)", animation: "panSlow 14s ease forwards" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,8,6,.9) 0%, rgba(10,8,6,.08) 60%, rgba(10,8,6,.5) 100%)" }} />
      {/* Top gold line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, transparent, var(--gold), var(--gold), transparent)", opacity: 0.6 }} />

      {/* Content */}
      <div className="hero-pad" style={{ position: "relative", display: "flex", alignItems: "center", height: "100%", padding: "0 80px" }}>
        <div style={{ maxWidth: 720 }}>

          {/* Premium badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,160,90,.1)", border: "1px solid rgba(200,160,90,.3)", padding: "6px 16px", marginBottom: 24, animation: "fadeUp .7s .1s both" }}>
            <svg width="10" height="10" viewBox="0 0 10 10"><polygon points="5,0 10,5 5,10 0,5" fill="var(--gold)" /></svg>
            <span style={{ fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)" }}>Premium Restaurant Website</span>
          </div>

          <p style={{ fontFamily: "var(--sans)", fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--warm)", marginBottom: 20, animation: "fadeUp .8s .2s both" }}>
            Fine Indian Cuisine · New Delhi · Est. 2009
          </p>

          <h1 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: "clamp(3.2rem,7vw,7.5rem)", lineHeight: 0.95, color: "var(--cream)", marginBottom: 36, animation: "fadeUp .9s .35s both" }}>
            Where<br />
            <em style={{ fontStyle: "italic", color: "var(--gold2)" }}>Spice</em><br />
            Meets Soul
          </h1>

          <p style={{ fontFamily: "var(--sans)", fontSize: 15, fontWeight: 300, color: "var(--warm)", lineHeight: 1.75, maxWidth: 460, marginBottom: 52, animation: "fadeUp .9s .5s both" }}>
            A curated journey through India's most celebrated culinary traditions — reimagined for the contemporary palate by Chef Arjun Mehta.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", animation: "fadeUp .9s .65s both" }}>
            <Btn onClick={() => navigate("Menu")}>Explore Menu</Btn>
            <Btn onClick={() => navigate("Booking")} outline>Book a Table</Btn>
            <WAButton href={wa.bookTable()}>Book via WhatsApp</WAButton>
          </div>
        </div>

        {/* Stats card */}
        <div className="hero-stats" style={{ position: "absolute", right: 80, bottom: 80, background: "rgba(26,21,16,.92)", backdropFilter: "blur(20px)", border: "1px solid rgba(200,160,90,.2)", padding: "28px 36px", animation: "scaleIn 1s .9s both" }}>
          <div style={{ display: "flex", gap: 36 }}>
            {[["15+", "Years of Excellence"], ["4.9", "Google Rating"], ["200+", "Dishes Crafted"]].map(([n, l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--serif)", fontSize: 30, fontWeight: 500, color: "var(--gold)", lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: 44, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, animation: "drift 2.5s infinite" }}>
        <div style={{ width: 1, height: 44, background: "linear-gradient(to bottom, var(--gold), transparent)" }} />
        <span style={{ fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--muted)" }}>Scroll</span>
      </div>
    </section>
  );
}
