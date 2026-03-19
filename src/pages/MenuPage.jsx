import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { useApp } from "../context/AppContext";
import Tag from "../components/ui/Tag";
import GoldRule from "../components/ui/GoldRule";
import { MENU_DATA, MENU_CATEGORIES } from "../constants/menu";
import { IMAGES as I } from "../constants/images";
import { formatPrice } from "../utils/helpers";

export default function MenuPage() {
  useReveal();
  const { addToCart, cartItems, setCartOpen } = useApp();
  const [cat, setCat] = useState("Starters");
  const [justAdded, setJustAdded] = useState({});

  const handleAdd = (item) => {
    addToCart(item);
    setJustAdded((p) => ({ ...p, [item.n]: true }));
    setTimeout(() => setJustAdded((p) => ({ ...p, [item.n]: false })), 1600);
  };

  const getQtyInCart = (name) => cartItems.find((c) => c.item.n === name)?.qty || 0;

  return (
    <div style={{ paddingTop:100, minHeight:"100vh" }}>
      {/* Header */}
      <div style={{ position:"relative", padding:"64px 60px 72px", textAlign:"center", overflow:"hidden" }}>
        <img src={I.amb2} alt="" style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", filter:"brightness(.12) saturate(.5)", opacity:.7 }}/>
        <div style={{ position:"relative" }}>
          <Tag>Our Offerings</Tag>
          <h1 style={{ fontFamily:"var(--serif)", fontSize:"clamp(3rem,6vw,6rem)", fontWeight:400, color:"var(--cream)", lineHeight:1, marginBottom:16 }}>
            The <em style={{ fontStyle:"italic", color:"var(--gold2)" }}>Menu</em>
          </h1>
          <GoldRule/>
          <p style={{ fontFamily:"var(--sans)", fontSize:14, color:"var(--muted)", maxWidth:500, margin:"0 auto 24px" }}>
            Every dish is a story told in spice — crafted with intention, served with warmth.
          </p>
          {/* Cart shortcut */}
          {cartItems.length > 0 && (
            <button onClick={() => setCartOpen(true)} style={{ display:"inline-flex", alignItems:"center", gap:8, fontFamily:"var(--sans)", fontSize:11, letterSpacing:"0.18em", textTransform:"uppercase", color:"var(--gold)", background:"rgba(200,160,90,.08)", border:"1px solid rgba(200,160,90,.25)", padding:"10px 24px", cursor:"pointer", transition:"all .3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background="rgba(200,160,90,.16)")}
              onMouseLeave={(e) => (e.currentTarget.style.background="rgba(200,160,90,.08)")}>
              🛒 View Cart ({cartItems.reduce((s,c)=>s+c.qty,0)} items)
            </button>
          )}
        </div>
      </div>

      {/* Category tabs */}
      <div style={{ display:"flex", justifyContent:"center", borderBottom:"1px solid rgba(200,160,90,.1)", flexWrap:"wrap" }}>
        {MENU_CATEGORIES.map((c) => (
          <button key={c} onClick={() => setCat(c)} style={{
            background: cat===c ? "var(--gold)" : "transparent",
            color: cat===c ? "var(--ink)" : "var(--muted)",
            border:"none", padding:"16px 32px", cursor:"pointer",
            fontFamily:"var(--sans)", fontSize:11, fontWeight: cat===c ? 400 : 300,
            letterSpacing:"0.18em", textTransform:"uppercase", transition:"all .3s",
          }}>{c}</button>
        ))}
      </div>

      {/* Items grid */}
      <div style={{ maxWidth:1300, margin:"0 auto", padding:"4px 48px 100px" }}>
        <div className="menu-grid" style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:2, paddingTop:2 }}>
          {MENU_DATA[cat].map((item, i) => {
            const qty = getQtyInCart(item.n);
            const added = justAdded[item.n];
            return (
              <div key={i} className="rv" style={{ display:"grid", gridTemplateColumns:"170px 1fr", background:"var(--ink3)", transition:"background .3s, border-left .3s", borderLeft:"3px solid transparent" }}
                onMouseEnter={(e) => { e.currentTarget.style.background="var(--ink4)"; e.currentTarget.style.borderLeftColor="var(--gold3)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background="var(--ink3)"; e.currentTarget.style.borderLeftColor="transparent"; }}>

                {/* Image */}
                <div style={{ overflow:"hidden", height:200, flexShrink:0 }}>
                  <img src={item.img} alt={item.n} style={{ width:"100%", height:"100%", objectFit:"cover", filter:"brightness(.72) saturate(.85)", transition:"transform .7s var(--ease)" }}
                    onMouseEnter={(e) => (e.target.style.transform="scale(1.06)")}
                    onMouseLeave={(e) => (e.target.style.transform="scale(1)")}/>
                </div>

                {/* Details */}
                <div style={{ padding:"22px 22px", display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
                  <div>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:6 }}>
                      <h3 style={{ fontFamily:"var(--serif)", fontSize:17, fontWeight:400, color:"var(--cream)", flex:1, paddingRight:10, lineHeight:1.25 }}>{item.n}</h3>
                      <span style={{ fontFamily:"var(--serif)", fontSize:19, color:"var(--gold)", whiteSpace:"nowrap" }}>{formatPrice(item.p)}</span>
                    </div>
                    <p style={{ fontFamily:"var(--sans)", fontSize:12, color:"var(--muted)", lineHeight:1.65, marginBottom:0 }}>{item.d}</p>
                  </div>

                  {/* Add to cart */}
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginTop:16 }}>
                    {qty > 0 && (
                      <span style={{ fontFamily:"var(--sans)", fontSize:10, letterSpacing:"0.12em", color:"var(--gold)", background:"rgba(200,160,90,.1)", border:"1px solid rgba(200,160,90,.2)", padding:"3px 10px" }}>
                        {qty} in cart
                      </span>
                    )}
                    <div style={{ marginLeft:"auto" }}>
                      <button onClick={() => handleAdd(item)} className="btn-scale" style={{
                        padding:"9px 20px", cursor:"pointer", fontFamily:"var(--sans)", fontSize:10, letterSpacing:"0.18em", textTransform:"uppercase", transition:"all .3s",
                        background: added ? "var(--gold)" : "transparent",
                        border: `1px solid ${added ? "var(--gold)" : "rgba(200,160,90,.3)"}`,
                        color: added ? "var(--ink)" : "var(--warm)",
                        display:"flex", alignItems:"center", gap:6,
                      }}>
                        {added ? (
                          <><svg width="12" height="12" viewBox="0 0 12 10"><polyline points="1,5 4.5,9 11,1" fill="none" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round"/></svg> Added!</>
                        ) : "+ Add to Cart"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
