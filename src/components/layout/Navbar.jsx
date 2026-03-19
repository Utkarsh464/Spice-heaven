import { useState, useEffect } from "react";
import { useApp } from "../../context/AppContext";
import Btn from "../ui/Btn";
import { NAV_ITEMS } from "../../constants/config";
import { ig, IG_HANDLE } from "../../utils/instagram";

export default function Navbar() {
  const { page, navigate, cartCount, setCartOpen, adminUser } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <nav style={{
        position:"fixed", top:"var(--strip-h, 36px)", left:0, right:0, zIndex:900,
        display:"flex", alignItems:"center", justifyContent:"space-between",
        padding: scrolled ? "14px 48px" : "28px 48px",
        background: scrolled ? "rgba(10,8,6,.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(200,160,90,.14)" : "none",
        transition:"all .45s var(--ease)",
      }}>
        {/* Logo */}
        <button onClick={() => navigate("Home")} style={{ background:"none", border:"none", cursor:"pointer", textAlign:"left" }}>
          <div style={{ fontFamily:"var(--serif)", fontSize:22, fontWeight:500, color:"var(--gold)", letterSpacing:"0.04em", lineHeight:1 }}>Spice Haven</div>
          <div style={{ fontFamily:"var(--sans)", fontSize:8, letterSpacing:"0.35em", textTransform:"uppercase", color:"var(--warm)", marginTop:3 }}>Fine Indian Cuisine</div>
        </button>

        {/* Desktop nav */}
        <div className="desktop-nav" style={{ display:"flex", alignItems:"center", gap:36 }}>
          {NAV_ITEMS.map((n) => (
            <button key={n} onClick={() => navigate(n)} style={{
              background:"none", border:"none", cursor:"pointer",
              fontFamily:"var(--sans)", fontSize:11, fontWeight:400, letterSpacing:"0.18em",
              textTransform:"uppercase", color: page===n ? "var(--gold)" : "var(--warm)",
              transition:"color .3s", padding:"4px 0", position:"relative",
            }}
              onMouseEnter={(e) => (e.target.style.color="var(--gold2)")}
              onMouseLeave={(e) => (e.target.style.color=page===n?"var(--gold)":"var(--warm)")}>
              {n}
            </button>
          ))}

          {/* Cart icon button */}
          <button onClick={() => setCartOpen(true)} style={{ position:"relative", background:"none", border:"1px solid rgba(200,160,90,.2)", cursor:"pointer", color:"var(--warm)", width:38, height:38, display:"flex", alignItems:"center", justifyContent:"center", transition:"all .3s" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor="var(--gold)"; e.currentTarget.style.color="var(--gold)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor="rgba(200,160,90,.2)"; e.currentTarget.style.color="var(--warm)"; }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/>
            </svg>
            {cartCount > 0 && (
              <span style={{ position:"absolute", top:-6, right:-6, background:"var(--gold)", color:"var(--ink)", fontFamily:"var(--sans)", fontSize:9, fontWeight:600, width:18, height:18, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", animation:"scaleIn .2s var(--ease-spring)" }}>
                {cartCount > 9 ? "9+" : cartCount}
              </span>
            )}
          </button>

          <Btn onClick={() => navigate("Booking")} style={{ padding:"10px 24px", fontSize:10 }}>Reserve</Btn>

          {adminUser && (
            <button onClick={() => navigate("AdminDashboard")} style={{ background:"rgba(200,160,90,.08)", border:"1px solid rgba(200,160,90,.2)", cursor:"pointer", fontFamily:"var(--sans)", fontSize:9, letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--gold)", padding:"8px 14px", transition:"all .3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background="rgba(200,160,90,.15)")}
              onMouseLeave={(e) => (e.currentTarget.style.background="rgba(200,160,90,.08)")}>
              ⚙ Admin
            </button>
          )}
        </div>

        {/* Hamburger */}
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          {/* Mobile cart badge */}
          <button onClick={() => setCartOpen(true)} className="hamburger" style={{ display:"none", position:"relative", background:"none", border:"none", cursor:"pointer", color:"var(--warm)", width:36, height:36, alignItems:"center", justifyContent:"center" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/></svg>
            {cartCount > 0 && <span style={{ position:"absolute", top:-4, right:-4, background:"var(--gold)", color:"var(--ink)", fontFamily:"var(--sans)", fontSize:9, fontWeight:600, width:16, height:16, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }}>{cartCount}</span>}
          </button>

          <button className="hamburger" onClick={() => setOpen(!open)} style={{ display:"none", background:"none", border:"none", cursor:"pointer", flexDirection:"column", gap:5, padding:6 }}>
            {[0,1,2].map((i) => (
              <span key={i} style={{ display:"block", width:20, height:1.5, background:"var(--gold)", transition:"all .3s", transform: open?(i===0?"rotate(45deg) translateY(7px)":i===2?"rotate(-45deg) translateY(-7px)":"scaleX(0)"):"none", opacity: open&&i===1?0:1 }}/>
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div style={{ position:"fixed", inset:0, zIndex:899, background:"rgba(10,8,6,.97)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:36, animation:"fadeIn .3s ease" }}>
          {NAV_ITEMS.map((n) => (
            <button key={n} onClick={() => { navigate(n); setOpen(false); }} style={{ background:"none", border:"none", cursor:"pointer", fontFamily:"var(--serif)", fontSize:"clamp(2rem,6vw,3rem)", fontWeight:400, color:page===n?"var(--gold)":"var(--cream)", letterSpacing:"0.04em" }}>{n}</button>
          ))}
          <button onClick={() => { setCartOpen(true); setOpen(false); }} style={{ display:"flex", alignItems:"center", gap:8, background:"none", border:"1px solid rgba(200,160,90,.25)", cursor:"pointer", fontFamily:"var(--sans)", fontSize:13, letterSpacing:"0.12em", textTransform:"uppercase", color:"var(--gold)", padding:"12px 28px" }}>
            🛒 Cart {cartCount > 0 && `(${cartCount})`}
          </button>
          <a href={ig.dm()} target="_blank" rel="noreferrer" style={{ display:"flex", alignItems:"center", gap:8, fontFamily:"var(--sans)", fontSize:13, letterSpacing:"0.12em", textTransform:"uppercase", color:"#dc2743", textDecoration:"none" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="6" stroke="#dc2743" strokeWidth="1.8"/>
              <circle cx="12" cy="12" r="4.5" stroke="#dc2743" strokeWidth="1.8"/>
              <circle cx="18" cy="6" r="1.2" fill="#dc2743"/>
            </svg>
            DM on Instagram
          </a>
        </div>
      )}
    </>
  );
}
