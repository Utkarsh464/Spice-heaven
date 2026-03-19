import { useState, useEffect } from "react";
import { useApp } from "../../context/AppContext";
import Btn from "../ui/Btn";
import { NAV_ITEMS } from "../../constants/config";
import { wa } from "../../utils/whatsapp";

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
        position:"fixed", top:0, left:0, right:0, zIndex:900,
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
          <a href={wa.bookTable()} target="_blank" rel="noreferrer" style={{ display:"flex", alignItems:"center", gap:8, fontFamily:"var(--sans)", fontSize:13, letterSpacing:"0.12em", textTransform:"uppercase", color:"#25D366", textDecoration:"none" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.107.546 4.09 1.502 5.814L.057 23.78l6.16-1.447A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.96 9.96 0 01-5.387-1.573l-.387-.232-4.007.94.903-3.91-.252-.401A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            Book via WhatsApp
          </a>
        </div>
      )}
    </>
  );
}
