import Tag from "../ui/Tag";
import Btn from "../ui/Btn";
import { wa } from "../../utils/whatsapp";
import { SITE_CONFIG } from "../../constants/config";

const FEATURES = [
  { icon: "🌐", title: "Online Presence",   desc: "Show up on Google, get found by hungry customers searching near you." },
  { icon: "📲", title: "Mobile Orders",     desc: "Accept orders via WhatsApp & your website — no third-party commission." },
  { icon: "📅", title: "Table Bookings",    desc: "Let customers book tables 24/7 without calling — fully automated." },
  { icon: "⭐", title: "Review Management", desc: "Showcase your best reviews and build trust with new customers." },
  { icon: "🎨", title: "Custom Design",     desc: "A premium dark luxury website tailored to your restaurant's identity." },
  { icon: "⚡", title: "Fast Delivery",     desc: `Your website ready in ${SITE_CONFIG.deliveryDays} days, with lifetime support included.` },
];

const GUARANTEES = [
  "✓ 7-day delivery",
  "✓ Mobile-first design",
  "✓ WhatsApp integration",
  "✓ Lifetime support",
];

export default function BusinessCTA() {
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "120px 60px", background: "var(--ink)" }}>
      {/* Ambient glow */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 80% 50%, rgba(200,100,30,.08) 0%, transparent 60%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* ── Urgency bar ── */}
        <div className="rv" style={{ background: "rgba(200,160,90,.07)", border: "1px solid rgba(200,160,90,.2)", borderLeft: "3px solid var(--gold)", padding: "14px 24px", marginBottom: 72, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <span className="urgency-dot" />
          <span style={{ fontFamily: "var(--sans)", fontSize: 12, letterSpacing: "0.12em", color: "var(--gold)", textTransform: "uppercase" }}>
            Limited Slots Available This Month
          </span>
          <span style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--warm)", fontWeight: 300 }}>
            — We accept only {SITE_CONFIG.maxClientsPerMonth} new restaurant clients per month to ensure premium quality.
          </span>
          <div style={{ marginLeft: "auto" }}>
            <a
              href={wa.getWebsite()}
              target="_blank"
              rel="noreferrer"
              style={{ fontFamily: "var(--sans)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", textDecoration: "none", border: "1px solid rgba(200,160,90,.3)", padding: "8px 20px", transition: "background .3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(200,160,90,.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              Claim Your Slot →
            </a>
          </div>
        </div>

        {/* ── Main headline ── */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <div className="rv" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "linear-gradient(135deg,rgba(200,160,90,.12),rgba(200,160,90,.06))", border: "1px solid rgba(200,160,90,.25)", padding: "8px 20px", marginBottom: 28 }}>
            <svg width="14" height="14" viewBox="0 0 14 14">
              <polygon points="7,1 8.8,5.5 13.5,5.5 9.8,8.5 11.2,13 7,10.2 2.8,13 4.2,8.5 0.5,5.5 5.2,5.5" fill="var(--gold)" />
            </svg>
            <span className="shimmer-text" style={{ fontFamily: "var(--sans)", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase" }}>
              Used by Modern Restaurants
            </span>
          </div>

          <h2 className="rv d1" style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.4rem,5vw,5.5rem)", fontWeight: 400, color: "var(--cream)", lineHeight: 1.05, marginBottom: 24 }}>
            Own a Restaurant?<br />
            <em style={{ fontStyle: "italic", color: "var(--gold2)" }}>Get a Website Like This.</em>
          </h2>

          <p className="rv d2" style={{ fontFamily: "var(--sans)", fontSize: 16, fontWeight: 300, color: "var(--warm)", maxWidth: 600, margin: "0 auto 16px", lineHeight: 1.8 }}>
            Increase bookings, orders, and online presence — with a premium website that makes your restaurant look like a ₹50,000+ brand from day one.
          </p>

          <p className="rv d3" style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--muted)", letterSpacing: "0.05em" }}>
            Starting at just{" "}
            <strong style={{ color: "var(--gold)", fontFamily: "var(--serif)", fontSize: 16 }}>
              {SITE_CONFIG.startingPrice}
            </strong>{" "}
            · One-time · No hidden fees
          </p>
        </div>

        {/* ── Features grid ── */}
        <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2, marginBottom: 80 }}>
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className={`rv d${i + 1} card-lift`}
              style={{ background: "var(--ink3)", border: "1px solid rgba(200,160,90,.07)", padding: "40px 32px", transition: "all .4s var(--ease)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(200,160,90,.25)"; e.currentTarget.style.background = "var(--ink4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(200,160,90,.07)"; e.currentTarget.style.background = "var(--ink3)"; }}
            >
              <div style={{ fontSize: 28, marginBottom: 16 }}>{f.icon}</div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: 19, fontWeight: 400, color: "var(--cream)", marginBottom: 10 }}>{f.title}</h3>
              <p style={{ fontFamily: "var(--sans)", fontSize: 13, fontWeight: 300, color: "var(--muted)", lineHeight: 1.75 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* ── Final CTA box ── */}
        <div className="rv" style={{ textAlign: "center" }}>
          <div style={{ background: "var(--ink3)", border: "1px solid rgba(200,160,90,.18)", padding: "64px 60px", position: "relative", overflow: "hidden", maxWidth: 860, margin: "0 auto" }}>
            {/* Corner accents */}
            {[
              { top: 0,    left: 0,    borderTop: "2px solid var(--gold3)", borderLeft:  "2px solid var(--gold3)" },
              { top: 0,    right: 0,   borderTop: "2px solid var(--gold3)", borderRight: "2px solid var(--gold3)" },
              { bottom: 0, left: 0,    borderBottom: "2px solid var(--gold3)", borderLeft:  "2px solid var(--gold3)" },
              { bottom: 0, right: 0,   borderBottom: "2px solid var(--gold3)", borderRight: "2px solid var(--gold3)" },
            ].map((s, i) => (
              <div key={i} style={{ position: "absolute", width: 24, height: 24, ...s }} />
            ))}

            <div style={{ fontFamily: "var(--sans)", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>
              Ready to Grow Your Restaurant?
            </div>
            <h3 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 400, color: "var(--cream)", marginBottom: 16, lineHeight: 1.1 }}>
              Get Your Restaurant Website<br />
              <em style={{ fontStyle: "italic", color: "var(--gold2)" }}>Today</em>
            </h3>
            <p style={{ fontFamily: "var(--sans)", fontSize: 14, color: "var(--warm)", marginBottom: 40, lineHeight: 1.7, maxWidth: 480, margin: "0 auto 40px" }}>
              Join restaurants across India that are booking more tables and earning more — online, automatically, every day.
            </p>

            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Btn href={wa.getWebsite()} style={{ padding: "18px 56px", fontSize: 12, letterSpacing: "0.25em" }}>
                Get This Website →
              </Btn>
              <Btn href={wa.requestDemo()} outline style={{ padding: "18px 40px" }}>
                Request a Live Demo
              </Btn>
            </div>

            <div style={{ marginTop: 32, display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap" }}>
              {GUARANTEES.map((t) => (
                <span key={t} style={{ fontFamily: "var(--sans)", fontSize: 11.5, color: "var(--muted)", letterSpacing: "0.05em" }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
