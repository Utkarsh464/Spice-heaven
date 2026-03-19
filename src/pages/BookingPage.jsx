import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { useApp } from "../context/AppContext";
import Tag from "../components/ui/Tag";
import GoldRule from "../components/ui/GoldRule";
import Btn from "../components/ui/Btn";
import IGButton from "../components/ui/IGButton";
import { IMAGES as I } from "../constants/images";
import { TIME_SLOTS, OCCASIONS } from "../constants/config";
import { ig } from "../utils/instagram";

const EMPTY_FORM = { name: "", email: "", phone: "", date: "", time: "", guests: "2", occasion: "", notes: "" };

const LABEL_STYLE = {
  display: "block",
  fontFamily: "var(--sans)",
  fontSize: 9,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "var(--muted)",
  marginBottom: 8,
};

export default function BookingPage() {
  useReveal();
  const { addBooking } = useApp();
  const [form, setForm] = useState(EMPTY_FORM);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const f = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      addBooking({ name: form.name, email: form.email, phone: form.phone, guests: parseInt(form.guests), date: form.date, time: form.time, occasion: form.occasion || "None", notes: form.notes });
      setLoading(false);
      setDone(true);
    }, 1800);
  };

  return (
    <div style={{ paddingTop: 100, minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ position: "relative", padding: "64px 60px 72px", textAlign: "center", overflow: "hidden" }}>
        <img src={I.amb2} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.12) saturate(.5)" }} />
        <div style={{ position: "relative" }}>
          <Tag>Reserve Your Seat</Tag>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(3rem,6vw,6rem)", fontWeight: 400, color: "var(--cream)", lineHeight: 1, marginBottom: 16 }}>
            Book a <em style={{ fontStyle: "italic", color: "var(--gold2)" }}>Table</em>
          </h1>
          <GoldRule />
          <p style={{ fontFamily: "var(--sans)", fontSize: 14, color: "var(--muted)", maxWidth: 480, margin: "0 auto 20px" }}>
            Reserve in minutes. We confirm within 2 hours with a personal message.
          </p>
          <IGButton href={ig.bookTable()} size="sm" variant="outline" hint="Contact via Instagram to get your website">
            Or DM us on Instagram
          </IGButton>
        </div>
      </div>

      {/* Form / Confirmation */}
      <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 32px 100px" }}>
        {done ? (
          <div style={{ textAlign: "center", padding: "72px 40px", background: "var(--ink3)", border: "1px solid rgba(200,160,90,.18)", animation: "scaleIn .6s ease" }}>
            <div style={{ width: 60, height: 60, border: "2px solid var(--gold)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontFamily: "var(--serif)", fontSize: 26, color: "var(--gold)" }}>✓</div>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: 34, fontWeight: 400, color: "var(--gold2)", marginBottom: 16 }}>Reservation Confirmed</h2>
            <p style={{ color: "var(--warm)", fontSize: 15, lineHeight: 1.7, marginBottom: 8 }}>
              Thank you, <strong style={{ color: "var(--cream)" }}>{form.name}</strong>. Table for{" "}
              <strong style={{ color: "var(--cream)" }}>{form.guests} guests</strong>
            </p>
            <p style={{ color: "var(--warm)", fontSize: 15, marginBottom: 40 }}>
              on <strong style={{ color: "var(--cream)" }}>{form.date}</strong> at{" "}
              <strong style={{ color: "var(--cream)" }}>{form.time}</strong>.
            </p>
            <p style={{ color: "var(--muted)", fontSize: 13, marginBottom: 44 }}>
              Confirmation sent to {form.email}. We look forward to welcoming you.
            </p>
            <Btn onClick={() => { setDone(false); setForm(EMPTY_FORM); }}>Make Another Reservation</Btn>
          </div>
        ) : (
          <form
            onSubmit={submit}
            className="booking-form"
            style={{ background: "var(--ink3)", border: "1px solid rgba(200,160,90,.12)", padding: "56px 56px" }}
          >
            <p style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 400, color: "var(--cream)", marginBottom: 36, borderBottom: "1px solid rgba(200,160,90,.1)", paddingBottom: 22 }}>
              Your Details
            </p>

            <div className="book-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px 24px" }}>
              <div>
                <label style={LABEL_STYLE}>Full Name *</label>
                <input required value={form.name} onChange={(e) => f("name", e.target.value)} placeholder="Arjun Mehta" />
              </div>
              <div>
                <label style={LABEL_STYLE}>Email *</label>
                <input required type="email" value={form.email} onChange={(e) => f("email", e.target.value)} placeholder="arjun@email.com" />
              </div>
              <div>
                <label style={LABEL_STYLE}>Phone</label>
                <input value={form.phone} onChange={(e) => f("phone", e.target.value)} placeholder="+91 98765 43210" />
              </div>
              <div>
                <label style={LABEL_STYLE}>Guests *</label>
                <select required value={form.guests} onChange={(e) => f("guests", e.target.value)}>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, "10+"].map((g) => (
                    <option key={g} value={g}>{g} Guest{g !== "1" && g !== 1 ? "s" : ""}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={LABEL_STYLE}>Date *</label>
                <input required type="date" value={form.date} onChange={(e) => f("date", e.target.value)} style={{ colorScheme: "dark" }} />
              </div>
              <div>
                <label style={LABEL_STYLE}>Time *</label>
                <select required value={form.time} onChange={(e) => f("time", e.target.value)}>
                  <option value="">Select time</option>
                  {TIME_SLOTS.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div style={{ gridColumn: "1/-1" }}>
                <label style={LABEL_STYLE}>Special Occasion</label>
                <select value={form.occasion} onChange={(e) => f("occasion", e.target.value)}>
                  {OCCASIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div style={{ gridColumn: "1/-1" }}>
                <label style={LABEL_STYLE}>Special Requests</label>
                <textarea
                  value={form.notes}
                  onChange={(e) => f("notes", e.target.value)}
                  rows={4}
                  placeholder="Dietary restrictions, seating preferences, arrangements…"
                  style={{ resize: "vertical", minHeight: 96 }}
                />
              </div>
            </div>

            {/* Quick info */}
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap", margin: "28px 0", padding: "20px 0", borderTop: "1px solid rgba(200,160,90,.08)" }}>
              {[["Open Daily", "12 PM – 11 PM"], ["Held 15 min", "After reserved time"], ["Large Groups", "+91 98765 00001"]].map(([a, b]) => (
                <div key={a}>
                  <span style={{ fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: 3 }}>{a}</span>
                  <span style={{ fontFamily: "var(--sans)", fontSize: 12.5, color: "var(--muted)" }}>{b}</span>
                </div>
              ))}
            </div>

            <Btn style={{ width: "100%", padding: "17px", display: "flex", justifyContent: "center" }}>
              {loading ? (
                <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" style={{ animation: "spin 1s linear infinite" }}>
                    <circle cx="8" cy="8" r="6" fill="none" stroke="var(--ink)" strokeWidth="2" strokeDasharray="28" strokeDashoffset="10" />
                  </svg>
                  Confirming…
                </span>
              ) : "Confirm Reservation →"}
            </Btn>
          </form>
        )}
      </div>
    </div>
  );
}
