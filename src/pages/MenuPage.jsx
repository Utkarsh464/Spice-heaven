import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { useApp } from "../context/AppContext";
import Tag from "../components/ui/Tag";
import GoldRule from "../components/ui/GoldRule";
import WAButton from "../components/ui/WAButton";
import { MENU_DATA, MENU_CATEGORIES } from "../constants/menu";
import { IMAGES as I } from "../constants/images";
import { wa } from "../utils/whatsapp";

export default function MenuPage() {
  useReveal();
  const { cart, addToCart, clearCart } = useApp();
  const [cat, setCat] = useState("Starters");
  const [added, setAdded] = useState({});

  const handleAdd = (name) => {
    setAdded((p) => ({ ...p, [name]: true }));
    setTimeout(() => setAdded((p) => ({ ...p, [name]: false })), 1800);
    addToCart(name);
  };

  return (
    <div style={{ paddingTop: 100, minHeight: "100vh" }}>
      {/* Page header */}
      <div style={{ position: "relative", padding: "64px 60px 72px", textAlign: "center", overflow: "hidden" }}>
        <img src={I.amb2} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.12) saturate(.5)", opacity: 0.7 }} />
        <div style={{ position: "relative" }}>
          <Tag>Our Offerings</Tag>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(3rem,6vw,6rem)", fontWeight: 400, color: "var(--cream)", lineHeight: 1, marginBottom: 16 }}>
            The <em style={{ fontStyle: "italic", color: "var(--gold2)" }}>Menu</em>
          </h1>
          <GoldRule />
          <p style={{ fontFamily: "var(--sans)", fontSize: 14, color: "var(--muted)", maxWidth: 500, margin: "0 auto 28px" }}>
            Every dish is a story told in spice — crafted with intention, served with warmth.
          </p>
        </div>
      </div>

      {/* Category tabs */}
      <div style={{ display: "flex", justifyContent: "center", borderBottom: "1px solid rgba(200,160,90,.1)", flexWrap: "wrap" }}>
        {MENU_CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            style={{
              background: cat === c ? "var(--gold)" : "transparent",
              color: cat === c ? "var(--ink)" : "var(--muted)",
              border: "none", padding: "16px 32px", cursor: "pointer",
              fontFamily: "var(--sans)", fontSize: 11, fontWeight: cat === c ? 400 : 300,
              letterSpacing: "0.18em", textTransform: "uppercase", transition: "all .3s",
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Menu items */}
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 48px 100px" }}>
        <div className="menu-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 2, paddingTop: 2 }}>
          {MENU_DATA[cat].map((item, i) => (
            <div
              key={i}
              className="rv img-zoom"
              style={{ display: "grid", gridTemplateColumns: "170px 1fr", background: "var(--ink3)", transition: "background .3s, border-left .3s", borderLeft: "3px solid transparent" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--ink4)"; e.currentTarget.style.borderLeftColor = "var(--gold3)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--ink3)"; e.currentTarget.style.borderLeftColor = "transparent"; }}
            >
              <div style={{ overflow: "hidden", height: 188 }}>
                <img src={item.img} alt={item.n} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.72) saturate(.85)" }} />
              </div>
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <h3 style={{ fontFamily: "var(--serif)", fontSize: 18, fontWeight: 400, color: "var(--cream)", flex: 1, paddingRight: 12, lineHeight: 1.2 }}>{item.n}</h3>
                    <span style={{ fontFamily: "var(--serif)", fontSize: 20, color: "var(--gold)", whiteSpace: "nowrap" }}>₹{item.p}</span>
                  </div>
                  <p style={{ fontFamily: "var(--sans)", fontSize: 12.5, color: "var(--muted)", lineHeight: 1.65 }}>{item.d}</p>
                </div>
                <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
                  <button
                    onClick={() => handleAdd(item.n)}
                    className="btn-scale"
                    style={{
                      background: added[item.n] ? "rgba(200,160,90,.12)" : "transparent",
                      border: `1px solid ${added[item.n] ? "var(--gold)" : "rgba(200,160,90,.22)"}`,
                      color: added[item.n] ? "var(--gold)" : "var(--warm)",
                      padding: "8px 16px", cursor: "pointer", fontFamily: "var(--sans)",
                      fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", transition: "all .3s",
                    }}
                  >
                    {added[item.n] ? "✓ Added" : "+ Add"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating cart bar */}
      {cart.length > 0 && (
        <div style={{ position: "fixed", bottom: 28, left: "50%", transform: "translateX(-50%)", zIndex: 997, background: "var(--ink3)", border: "1px solid var(--gold3)", padding: "14px 28px", display: "flex", alignItems: "center", gap: 16, boxShadow: "0 16px 48px rgba(0,0,0,.6)", animation: "fadeUp .3s ease", whiteSpace: "nowrap" }}>
          <span style={{ fontFamily: "var(--sans)", fontSize: 12, color: "var(--warm)" }}>
            🛒 {cart.length} item{cart.length > 1 ? "s" : ""} selected
          </span>
          <button onClick={clearCart} style={{ background: "none", border: "none", color: "var(--muted)", cursor: "pointer", fontSize: 20, lineHeight: 1 }}>×</button>
        </div>
      )}
    </div>
  );
}
