import { useApp } from "../../context/AppContext";
import Btn from "../ui/Btn";
import Tag from "../ui/Tag";
import GoldRule from "../ui/GoldRule";
import { FEATURED_DISHES } from "../../constants/menu";

export default function FeaturedDishes() {
  const { navigate } = useApp();

  return (
    <section style={{ padding: "120px 60px", maxWidth: 1400, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 72 }}>
        <Tag><span className="rv">Our Signature</span></Tag>
        <h2 className="rv d1" style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.4rem,5vw,4.4rem)", fontWeight: 400, color: "var(--cream)", lineHeight: 1.1 }}>
          Featured <em style={{ fontStyle: "italic", color: "var(--gold2)" }}>Dishes</em>
        </h2>
        <GoldRule />
      </div>

      <div className="featured-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 3 }}>
        {FEATURED_DISHES.map((d, i) => (
          <div
            key={i}
            className={`rv d${i + 1} img-zoom card-lift`}
            onClick={() => navigate("Menu")}
            style={{ position: "relative", overflow: "hidden", cursor: "pointer", background: "var(--ink2)" }}
          >
            <div style={{ height: 500, overflow: "hidden" }}>
              <img src={d.img} alt={d.name} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.72) saturate(.9)" }} />
            </div>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,8,6,.96) 0%, rgba(10,8,6,.15) 55%, transparent 100%)" }} />
            <div style={{ position: "absolute", top: 20, left: 20 }}>
              <span style={{ background: "var(--gold)", color: "var(--ink)", fontFamily: "var(--sans)", fontSize: 9, fontWeight: 400, letterSpacing: "0.25em", textTransform: "uppercase", padding: "5px 14px" }}>
                {d.tag}
              </span>
            </div>
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "28px 24px" }}>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 400, color: "var(--cream)", marginBottom: 8 }}>{d.name}</h3>
              <p style={{ fontFamily: "var(--sans)", fontSize: 12.5, color: "var(--warm)", lineHeight: 1.6, marginBottom: 14 }}>{d.sub}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "var(--serif)", fontSize: 24, color: "var(--gold)" }}>{d.price}</span>
                <span style={{ fontFamily: "var(--sans)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(242,232,213,.5)", borderBottom: "1px solid rgba(200,160,90,.4)", paddingBottom: 2 }}>View →</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rv" style={{ textAlign: "center", marginTop: 52 }}>
        <Btn onClick={() => navigate("Menu")} outline>View Full Menu</Btn>
      </div>
    </section>
  );
}
