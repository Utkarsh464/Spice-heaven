import Tag from "../ui/Tag";
import GoldRule from "../ui/GoldRule";
import { pad2 } from "../../utils/helpers";

const PILLARS = [
  { n: "Heritage Spices",  d: "Single-origin spices from Kerala, Kashmir & Rajasthan — each dish carries centuries of tradition." },
  { n: "Master Chefs",     d: "Led by Chef Arjun Mehta — Oberoi-trained, 22 years of awards, a relentless passion for perfection." },
  { n: "Seasonal Menu",    d: "Our menu evolves with every harvest, keeping flavours bold, fresh, and always surprising." },
  { n: "Private Dining",   d: "Intimate rooms for proposals, celebrations & corporate evenings — fully curated end to end." },
];

export default function Pillars() {
  return (
    <section style={{ padding: "100px 60px" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <Tag><span className="rv">Why Spice Haven</span></Tag>
        <h2 className="rv d1" style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem,4vw,3.6rem)", fontWeight: 400, color: "var(--cream)", lineHeight: 1.1 }}>
          The Art of <em style={{ fontStyle: "italic", color: "var(--gold2)" }}>Distinction</em>
        </h2>
        <GoldRule />
      </div>

      <div className="pillars-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 2, maxWidth: 1200, margin: "0 auto" }}>
        {PILLARS.map((p, i) => (
          <div
            key={i}
            className={`rv d${i + 1} card-lift`}
            style={{ background: "var(--ink3)", padding: "44px 32px", borderTop: "2px solid var(--gold3)", transition: "all .4s var(--ease)" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--ink4)"; e.currentTarget.style.borderTopColor = "var(--gold)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "var(--ink3)"; e.currentTarget.style.borderTopColor = "var(--gold3)"; }}
          >
            <div style={{ fontFamily: "var(--serif)", fontSize: 38, fontWeight: 400, color: "rgba(200,160,90,.18)", marginBottom: 18, lineHeight: 1 }}>
              {pad2(i + 1)}
            </div>
            <h3 style={{ fontFamily: "var(--serif)", fontSize: 19, fontWeight: 400, color: "var(--cream)", marginBottom: 12 }}>{p.n}</h3>
            <p style={{ fontFamily: "var(--sans)", fontSize: 13, fontWeight: 300, color: "var(--muted)", lineHeight: 1.75 }}>{p.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
