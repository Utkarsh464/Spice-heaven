import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import Tag from "../components/ui/Tag";
import GoldRule from "../components/ui/GoldRule";
import Btn from "../components/ui/Btn";
import { IMAGES as I } from "../constants/images";
import { SITE_CONFIG } from "../constants/config";
import { wa } from "../utils/whatsapp";

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

          {/* WhatsApp quick contact */}
          <div className="rv" style={{ marginBottom: 28 }}>
            <a
              href={wa.general()}
              target="_blank"
              rel="noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 12, background: "rgba(37,211,102,.07)", border: "1px solid rgba(37,211,102,.25)", padding: "16px 20px", textDecoration: "none", transition: "background .3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(37,211,102,.14)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(37,211,102,.07)")}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.107.546 4.09 1.502 5.814L.057 23.78l6.16-1.447A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.96 9.96 0 01-5.387-1.573l-.387-.232-4.007.94.903-3.91-.252-.401A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              <div>
                <div style={{ fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "#25D366", marginBottom: 3 }}>Chat on WhatsApp</div>
                <div style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--warm)" }}>{SITE_CONFIG.phone2}</div>
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
