import Tag from "../ui/Tag";
import GoldRule from "../ui/GoldRule";
import { IMAGES as I } from "../../constants/images";

const REVIEWS = [
  { name: "Priya Sharma",   loc: "Mumbai",    stars: 5, img: I.av1, txt: "The Dal Makhani here is beyond words — a velvety, smoky depth I've never experienced anywhere in fifteen years of dining." },
  { name: "James Mitchell", loc: "London",    stars: 5, img: I.av2, txt: "The Rogan Josh was extraordinary — the kind of dish that makes you close your eyes on the first bite. Truly unforgettable." },
  { name: "Ananya Patel",   loc: "Bangalore", stars: 5, img: I.av3, txt: "Impeccable service, a stunning space, and food that feels like a love letter from another era. My favourite table in Delhi." },
];

export default function Reviews() {
  return (
    <section style={{ padding: "100px 60px", background: "var(--ink2)" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <Tag><span className="rv">Guest Stories</span></Tag>
        <h2 className="rv d1" style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem,4vw,3.6rem)", fontWeight: 400, color: "var(--cream)", lineHeight: 1.1 }}>
          Words from Our <em style={{ fontStyle: "italic", color: "var(--gold2)" }}>Guests</em>
        </h2>
        <GoldRule />
      </div>

      <div className="reviews-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2, maxWidth: 1280, margin: "0 auto" }}>
        {REVIEWS.map((r, i) => (
          <div
            key={i}
            className={`rv d${i + 1} card-lift`}
            style={{ background: "var(--ink3)", padding: "48px 40px", position: "relative", transition: "background .4s var(--ease)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--ink4)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--ink3)")}
          >
            <div style={{ fontFamily: "var(--serif)", fontSize: 80, color: "var(--gold)", opacity: 0.1, position: "absolute", top: 10, left: 24, lineHeight: 1 }}>"</div>
            <div style={{ display: "flex", gap: 3, marginBottom: 22 }}>
              {[...Array(r.stars)].map((_, j) => (
                <svg key={j} width="13" height="13" viewBox="0 0 14 14">
                  <polygon points="7,1 8.8,5.5 13.5,5.5 9.8,8.5 11.2,13 7,10.2 2.8,13 4.2,8.5 0.5,5.5 5.2,5.5" fill="var(--gold)" />
                </svg>
              ))}
            </div>
            <p style={{ fontFamily: "var(--sans)", fontSize: 14, fontWeight: 300, color: "var(--warm)", lineHeight: 1.8, fontStyle: "italic", marginBottom: 36 }}>
              "{r.txt}"
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 16, borderTop: "1px solid rgba(200,160,90,.1)", paddingTop: 24 }}>
              <img src={r.img} alt={r.name} style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", border: "2px solid var(--gold3)" }} />
              <div>
                <div style={{ fontFamily: "var(--serif)", fontSize: 16, color: "var(--cream)" }}>{r.name}</div>
                <div style={{ fontFamily: "var(--sans)", fontSize: 10, letterSpacing: "0.15em", color: "var(--muted)", marginTop: 2 }}>{r.loc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
