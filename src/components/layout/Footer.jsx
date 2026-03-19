import { useApp } from "../../context/AppContext";
import { SITE_CONFIG } from "../../constants/config";
import { ig, IG_HANDLE } from "../../utils/instagram";

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

            {/* Instagram — primary lead channel */}
            <a href={ig.profile()} target="_blank" rel="noreferrer"
              style={{ display:"inline-flex", alignItems:"center", gap:8, fontFamily:"var(--sans)", fontSize:10, letterSpacing:"0.15em", textTransform:"uppercase", color:"#dc2743", textDecoration:"none", transition:"opacity .2s" }}
              onMouseEnter={e => e.currentTarget.style.opacity=".7"}
              onMouseLeave={e => e.currentTarget.style.opacity="1"}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="6" stroke="#dc2743" strokeWidth="1.8"/>
                <circle cx="12" cy="12" r="4.5" stroke="#dc2743" strokeWidth="1.8"/>
                <circle cx="18" cy="6" r="1.2" fill="#dc2743"/>
              </svg>
              @{IG_HANDLE}
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
              Own a Business?
            </div>
            <div style={{ fontFamily: "var(--sans)", fontSize: 13.5, color: "var(--warm)" }}>
              Get a premium website like this — DM us on Instagram to get started.
            </div>
          </div>
          <a
            href={ig.getWebsite()}
            target="_blank"
            rel="noreferrer"
            style={{ display:"inline-flex", alignItems:"center", gap:8, fontFamily: "var(--sans)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "white", background: "linear-gradient(135deg,#f09433,#dc2743,#bc1888)", padding: "12px 28px", textDecoration: "none", whiteSpace: "nowrap", transition: "opacity .3s", boxShadow:"0 4px 16px rgba(220,39,67,.3)" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="6" stroke="white" strokeWidth="1.8"/>
              <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.8"/>
              <circle cx="18" cy="6" r="1.2" fill="white"/>
            </svg>
            DM on Instagram →
          </a>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "linear-gradient(to right, transparent, var(--gold3), transparent)", marginBottom: 28 }} />

        {/* Copyright */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontFamily: "var(--sans)", fontSize: 11.5, color: "var(--muted)" }}>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div style={{ display:"flex", gap:24, alignItems:"center" }}>
            <button onClick={() => navigate("AdminLogin")} style={{ background:"none", border:"none", cursor:"pointer", fontFamily:"var(--sans)", fontSize:11, color:"var(--dim)", transition:"color .25s", letterSpacing:"0.05em" }}
              onMouseEnter={(e) => (e.target.style.color="var(--muted)")}
              onMouseLeave={(e) => (e.target.style.color="var(--dim)")}>
              Admin Login
            </button>
            <p style={{ fontFamily: "var(--sans)", fontSize: 11.5, color: "var(--muted)" }}>
              Crafted with care · {SITE_CONFIG.location}, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
