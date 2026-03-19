import { useApp } from "../../context/AppContext";
import { SITE_CONFIG } from "../../constants/config";
import { wa } from "../../utils/whatsapp";

export default function Footer() {
  const { navigate } = useApp();

  const cols = [
    { t: "Navigate", l: ["Home", "Menu", "Gallery", "Booking", "Contact"] },
    { t: "Cuisine",  l: ["Starters", "Main Course", "Desserts", "Drinks", "Specials"] },
    { t: "Company",  l: ["About Us", "Private Dining", "Events", "Careers", "Press"] },
  ];

  return (
    <footer style={{ background: "var(--ink2)", borderTop: "1px solid rgba(200,160,90,.1)", padding: "72px 60px 36px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 60 }} className="footer-cols">

          {/* Brand column */}
          <div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 26, fontWeight: 500, color: "var(--gold)", marginBottom: 4 }}>
              {SITE_CONFIG.name}
            </div>
            <div style={{ fontFamily: "var(--sans)", fontSize: 8, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--warm)", marginBottom: 22 }}>
              {SITE_CONFIG.tagline}
            </div>
            <p style={{ fontFamily: "var(--sans)", fontSize: 13.5, color: "var(--muted)", lineHeight: 1.8, maxWidth: 290, marginBottom: 28 }}>
              Celebrating India's culinary heritage through contemporary, intentional dining since {SITE_CONFIG.established}.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
              {["IG", "FB", "X", "YT"].map((s) => (
                <div
                  key={s}
                  style={{ width: 32, height: 32, background: "rgba(200,160,90,.07)", border: "1px solid rgba(200,160,90,.15)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 10, color: "var(--gold)", transition: "all .3s", fontFamily: "var(--sans)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "var(--ink)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(200,160,90,.07)"; e.currentTarget.style.color = "var(--gold)"; }}
                >
                  {s}
                </div>
              ))}
            </div>

            {/* WhatsApp */}
            <a href={wa.general()} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--sans)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#25D366", textDecoration: "none" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.107.546 4.09 1.502 5.814L.057 23.78l6.16-1.447A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.96 9.96 0 01-5.387-1.573l-.387-.232-4.007.94.903-3.91-.252-.401A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.t}>
              <p style={{ fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 22, fontWeight: 400 }}>
                {col.t}
              </p>
              {col.l.map((item) => (
                <button
                  key={item}
                  onClick={() => col.t === "Navigate" && navigate(item)}
                  style={{ display: "block", background: "none", border: "none", cursor: col.t === "Navigate" ? "pointer" : "default", color: "var(--muted)", fontSize: 13.5, marginBottom: 12, fontFamily: "var(--sans)", fontWeight: 300, textAlign: "left", padding: 0, transition: "color .25s" }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--cream)")}
                  onMouseLeave={(e) => (e.target.style.color = "var(--muted)")}
                >
                  {item}
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* Business owner CTA strip */}
        <div
          style={{ background: "rgba(200,160,90,.05)", border: "1px solid rgba(200,160,90,.15)", borderLeft: "3px solid var(--gold)", padding: "20px 28px", marginBottom: 32, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}
        >
          <div>
            <div style={{ fontFamily: "var(--sans)", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 4 }}>
              Own a Restaurant?
            </div>
            <div style={{ fontFamily: "var(--sans)", fontSize: 13.5, color: "var(--warm)" }}>
              Get a premium website like this — increase bookings, orders &amp; online presence.
            </div>
          </div>
          <a
            href={wa.getWebsite()}
            target="_blank"
            rel="noreferrer"
            style={{ fontFamily: "var(--sans)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ink)", background: "var(--gold)", padding: "12px 28px", textDecoration: "none", whiteSpace: "nowrap", transition: "background .3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gold2)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--gold)")}
          >
            Get This Website →
          </a>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "linear-gradient(to right, transparent, var(--gold3), transparent)", marginBottom: 28 }} />

        {/* Copyright */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontFamily: "var(--sans)", fontSize: 11.5, color: "var(--muted)" }}>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p style={{ fontFamily: "var(--sans)", fontSize: 11.5, color: "var(--muted)" }}>
            Crafted with care · {SITE_CONFIG.location}, India
          </p>
        </div>
      </div>
    </footer>
  );
}
