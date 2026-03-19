import { useApp } from "../../context/AppContext";
import Btn from "../ui/Btn";
import IGButton from "../ui/IGButton";
import { IMAGES as I } from "../../constants/images";
import { ig } from "../../utils/instagram";

export default function HeroSection() {
  const { navigate } = useApp();

  return (
    <section style={{ position:"relative", height:"100vh", minHeight:640, overflow:"hidden" }}>
      <img src={I.hero} alt="hero" style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", filter:"brightness(.3) saturate(.85)", animation:"panSlow 14s ease forwards" }}/>
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(10,8,6,.9) 0%,rgba(10,8,6,.08) 60%,rgba(10,8,6,.5) 100%)" }}/>
      <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:"linear-gradient(to right,transparent,var(--gold),var(--gold),transparent)", opacity:.6 }}/>

      <div className="hero-pad" style={{ position:"relative", display:"flex", alignItems:"center", height:"100%", padding:"0 80px" }}>
        <div style={{ maxWidth:720 }}>
          {/* Premium badge */}
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(200,160,90,.1)", border:"1px solid rgba(200,160,90,.3)", padding:"6px 16px", marginBottom:24, animation:"fadeUp .7s .1s both" }}>
            <svg width="10" height="10" viewBox="0 0 10 10"><polygon points="5,0 10,5 5,10 0,5" fill="var(--gold)"/></svg>
            <span style={{ fontFamily:"var(--sans)", fontSize:9, letterSpacing:"0.3em", textTransform:"uppercase", color:"var(--gold)" }}>Premium Restaurant Website</span>
          </div>

          <p style={{ fontFamily:"var(--sans)", fontSize:10, letterSpacing:"0.4em", textTransform:"uppercase", color:"var(--warm)", marginBottom:20, animation:"fadeUp .8s .2s both" }}>
            Fine Indian Cuisine · New Delhi · Est. 2009
          </p>

          <h1 style={{ fontFamily:"var(--serif)", fontWeight:400, fontSize:"clamp(3.2rem,7vw,7.5rem)", lineHeight:.95, color:"var(--cream)", marginBottom:36, animation:"fadeUp .9s .35s both" }}>
            Where<br/><em style={{ fontStyle:"italic", color:"var(--gold2)" }}>Spice</em><br/>Meets Soul
          </h1>

          <p style={{ fontFamily:"var(--sans)", fontSize:15, fontWeight:300, color:"var(--warm)", lineHeight:1.75, maxWidth:460, marginBottom:48, animation:"fadeUp .9s .5s both" }}>
            A curated journey through India's most celebrated culinary traditions — reimagined for the contemporary palate by Chef Arjun Mehta.
          </p>

          <div style={{ display:"flex", flexDirection:"column", gap:18, animation:"fadeUp .9s .65s both" }}>
            {/* Primary CTA row */}
            <div style={{ display:"flex", gap:14, flexWrap:"wrap", alignItems:"center" }}>
              <Btn onClick={() => navigate("Menu")}>Explore Menu</Btn>
              <Btn onClick={() => navigate("Booking")} outline>Book a Table</Btn>
              {/* WhatsApp kept for demo — redirects to Instagram */}
              <button onClick={() => window.open(ig.dm(), "_blank", "noreferrer")}
                style={{ display:"inline-flex", alignItems:"center", gap:8, fontFamily:"var(--sans)", fontSize:10, letterSpacing:"0.15em", textTransform:"uppercase", color:"#25D366", background:"rgba(37,211,102,.07)", border:"1px solid rgba(37,211,102,.25)", padding:"12px 20px", cursor:"pointer", transition:"all .3s" }}
                onMouseEnter={e=>e.currentTarget.style.background="rgba(37,211,102,.15)"}
                onMouseLeave={e=>e.currentTarget.style.background="rgba(37,211,102,.07)"}
                title="Demo only — opens Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.107.546 4.09 1.502 5.814L.057 23.78l6.16-1.447A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.96 9.96 0 01-5.387-1.573l-.387-.232-4.007.94.903-3.91-.252-.401A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                WhatsApp (Demo)
              </button>
            </div>

            {/* Instagram lead CTA */}
            <div style={{ display:"flex", alignItems:"center", gap:12 }}>
              <IGButton
                messageKey="getWebsite"
                size="md"
                variant="gradient"
                hint="Contact via Instagram to get your website"
              >
                Get a Website Like This
              </IGButton>
            </div>
          </div>
        </div>

        {/* Stats card */}
        <div className="hero-stats" style={{ position:"absolute", right:80, bottom:80, background:"rgba(26,21,16,.92)", backdropFilter:"blur(20px)", border:"1px solid rgba(200,160,90,.2)", padding:"28px 36px", animation:"scaleIn 1s .9s both" }}>
          <div style={{ display:"flex", gap:36 }}>
            {[["15+","Years of Excellence"],["4.9","Google Rating"],["200+","Dishes Crafted"]].map(([n,l]) => (
              <div key={l} style={{ textAlign:"center" }}>
                <div style={{ fontFamily:"var(--serif)", fontSize:30, fontWeight:500, color:"var(--gold)", lineHeight:1 }}>{n}</div>
                <div style={{ fontFamily:"var(--sans)", fontSize:9, letterSpacing:"0.18em", textTransform:"uppercase", color:"var(--muted)", marginTop:6 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position:"absolute", bottom:44, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:8, animation:"drift 2.5s infinite" }}>
        <div style={{ width:1, height:44, background:"linear-gradient(to bottom,var(--gold),transparent)" }}/>
        <span style={{ fontFamily:"var(--sans)", fontSize:9, letterSpacing:"0.3em", textTransform:"uppercase", color:"var(--muted)" }}>Scroll</span>
      </div>
    </section>
  );
}
