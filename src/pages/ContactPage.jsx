import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import Tag from "../components/ui/Tag";
import GoldRule from "../components/ui/GoldRule";
import Btn from "../components/ui/Btn";
import { IMAGES as I } from "../constants/images";
import { SITE_CONFIG } from "../constants/config";
import { ig, IG_HANDLE } from "../utils/instagram";

const LABEL_STYLE = {
  display: "block",
  fontFamily: "var(--sans)",
  fontSize: 9,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "var(--muted)",
  marginBottom: 8,
};

const CONTACT_INFO = [
  { icon: "📍", label: "Address", val: SITE_CONFIG.address },
  { icon: "📞", label: "Phone",   val: `${SITE_CONFIG.phone1}\n${SITE_CONFIG.phone2}` },
  { icon: "✉",  label: "Email",   val: `${SITE_CONFIG.email1}\n${SITE_CONFIG.email2}` },
  { icon: "⏱",  label: "Hours",   val: SITE_CONFIG.hours },
];

export default function ContactPage() {
  useReveal();
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);

  return (
    <div style={{ paddingTop: 100, minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ textAlign: "center", padding: "64px 60px 64px", background: "linear-gradient(to bottom, var(--ink2), var(--ink))" }}>
        <Tag>Get In Touch</Tag>
        <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(3rem,6vw,6rem)", fontWeight: 400, color: "var(--cream)", lineHeight: 1, marginBottom: 16 }}>
          Contact <em style={{ fontStyle: "italic", color: "var(--gold2)" }}>Us</em>
        </h1>
        <GoldRule />
      </div>

      <div
        className="contact-grid"
        style={{ maxWidth: 1180, margin: "0 auto", padding: "0 48px 100px", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 48, alignItems: "start" }}
      >
        {/* Left: info */}
        <div>
          <div className="rv img-zoom" style={{ height: 260, overflow: "hidden", marginBottom: 36 }}>
            <img src={I.amb1} alt="Restaurant" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.58) saturate(.8)" }} />
          </div>

          {CONTACT_INFO.map(({ icon, label, val }) => (
            <div key={label} className="rv" style={{ display: "flex", gap: 18, marginBottom: 24, paddingBottom: 24, borderBottom: "1px solid rgba(200,160,90,.08)" }}>
              <span style={{ fontSize: 17, marginTop: 2, opacity: 0.7 }}>{icon}</span>
              <div>
                <p style={{ fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 6 }}>{label}</p>
                <p style={{ fontFamily: "var(--sans)", fontSize: 13.5, color: "var(--warm)", lineHeight: 1.7, whiteSpace: "pre-line" }}>{val}</p>
              </div>
            </div>
          ))}

          {/* Instagram — primary lead channel */}
          <div className="rv" style={{ marginBottom: 28 }}>
            <a
              href={ig.dm()}
              target="_blank"
              rel="noreferrer"
              style={{ display:"flex", alignItems:"center", gap:12, background:"rgba(220,39,67,.06)", border:"1px solid rgba(220,39,67,.2)", padding:"16px 20px", textDecoration:"none", transition:"background .3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(220,39,67,.13)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(220,39,67,.06)")}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="6" stroke="#dc2743" strokeWidth="1.8"/>
                <circle cx="12" cy="12" r="4.5" stroke="#dc2743" strokeWidth="1.8"/>
                <circle cx="18" cy="6" r="1.2" fill="#dc2743"/>
              </svg>
              <div>
                <div style={{ fontFamily:"var(--sans)", fontSize:9, letterSpacing:"0.22em", textTransform:"uppercase", color:"#dc2743", marginBottom:3 }}>DM on Instagram</div>
                <div style={{ fontFamily:"var(--sans)", fontSize:13, color:"var(--warm)" }}>@{IG_HANDLE}</div>
              </div>
            </a>
          </div>

          {/* Instagram DM — primary contact */}
          <div className="rv" style={{ marginBottom: 28 }}>
            <a
              href={ig.dm()}
              target="_blank"
              rel="noreferrer"
              style={{ display:"flex", alignItems:"center", gap:14, background:"rgba(220,39,67,.06)", border:"1px solid rgba(220,39,67,.2)", padding:"16px 20px", textDecoration:"none", transition:"all .3s", width:"100%" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(220,39,67,.12)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(220,39,67,.06)")}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <defs>
                  <linearGradient id="igContact2" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#f09433"/><stop offset="0.5" stopColor="#dc2743"/><stop offset="1" stopColor="#bc1888"/>
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="6" stroke="url(#igContact2)" strokeWidth="1.8"/>
                <circle cx="12" cy="12" r="4.5" stroke="url(#igContact2)" strokeWidth="1.8"/>
                <circle cx="18" cy="6" r="1.2" fill="#dc2743"/>
              </svg>
              <div>
                <div style={{ fontFamily:"var(--sans)", fontSize:9, letterSpacing:"0.22em", textTransform:"uppercase", color:"#dc2743", marginBottom:2 }}>DM on Instagram</div>
                <div style={{ fontFamily:"var(--sans)", fontSize:12, color:"var(--warm)" }}>@webgrowth.in · Opens Instagram</div>
              </div>
            </a>
          </div>

          {/* Social */}
          <div className="rv">
            <p style={{ fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 14 }}>Follow Us</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Instagram", "Facebook", "X", "YouTube"].map((s) => (
                <button
                  key={s}
                  style={{ background: "rgba(200,160,90,.06)", border: "1px solid rgba(200,160,90,.15)", color: "var(--warm)", padding: "8px 14px", cursor: "pointer", fontFamily: "var(--sans)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", transition: "all .3s" }}
                  onMouseEnter={(e) => { e.target.style.background = "rgba(200,160,90,.15)"; e.target.style.color = "var(--gold)"; }}
                  onMouseLeave={(e) => { e.target.style.background = "rgba(200,160,90,.06)"; e.target.style.color = "var(--warm)"; }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: map + form */}
        <div>
          {/* Map placeholder */}
          <div className="rv" style={{ height: 240, marginBottom: 32, position: "relative", overflow: "hidden", border: "1px solid rgba(200,160,90,.12)" }}>
            <img src={I.amb3} alt="Map" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.28) saturate(.4)" }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
              <div style={{ width: 32, height: 32, background: "var(--gold)", borderRadius: "50% 50% 50% 0", transform: "rotate(-45deg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ transform: "rotate(45deg)", fontSize: 13 }}>📍</span>
              </div>
              <p style={{ fontFamily: "var(--serif)", fontSize: 17, color: "var(--cream)", fontStyle: "italic" }}>
                {SITE_CONFIG.name}, {SITE_CONFIG.location}
              </p>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" style={{ fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", textDecoration: "none", border: "1px solid var(--gold3)", padding: "7px 18px" }}>
                Open in Maps ↗
              </a>
            </div>
          </div>

          {/* Message form */}
          <div className="rv d1" style={{ background: "var(--ink3)", border: "1px solid rgba(200,160,90,.1)", padding: "40px 40px" }}>
            <p style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 400, color: "var(--cream)", marginBottom: 28 }}>Send a Message</p>
            {sent ? (
              <div style={{ textAlign: "center", padding: "36px 0" }}>
                <div style={{ fontFamily: "var(--serif)", fontSize: 40, color: "var(--gold)", marginBottom: 14 }}>✦</div>
                <p style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--gold2)", marginBottom: 10 }}>Message Sent</p>
                <p style={{ color: "var(--muted)", fontSize: 13.5 }}>We'll respond within 24 hours.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={LABEL_STYLE}>Name</label>
                  <input value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} placeholder="Your name" />
                </div>
                <div>
                  <label style={LABEL_STYLE}>Email</label>
                  <input type="email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} placeholder="your@email.com" />
                </div>
                <div>
                  <label style={LABEL_STYLE}>Message</label>
                  <textarea value={form.msg} onChange={(e) => setForm((p) => ({ ...p, msg: e.target.value }))} rows={4} placeholder="How can we help you?" style={{ resize: "vertical" }} />
                </div>
                <Btn onClick={() => setSent(true)}>Send Message →</Btn>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
