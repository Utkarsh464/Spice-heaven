import Tag from "../ui/Tag";
import Btn from "../ui/Btn";
import { wa } from "../../utils/whatsapp";

const STATS = [
  { label: "Today's Bookings",  value: "24",    trend: "+8%",  icon: "📅" },
  { label: "Online Orders",     value: "₹42,800", trend: "+12%", icon: "🛒" },
  { label: "Table Occupancy",   value: "87%",   trend: "+5%",  icon: "🍽️" },
  { label: "Monthly Revenue",   value: "₹8.4L", trend: "+18%", icon: "📈" },
];

const RECENT_ORDERS = [
  { name: "Table 7 – Rogan Josh ×2, Dal Makhani ×1",            status: "Preparing",         time: "2 min ago" },
  { name: "Table 12 – Butter Chicken ×3, Gulab Jamun ×2",       status: "Served",            time: "8 min ago" },
  { name: "Delivery – 4 items to Connaught Place",              status: "Out for delivery",  time: "14 min ago" },
];

const STATUS_COLORS = {
  Served:            { bg: "rgba(34,197,94,.1)",   text: "#22c55e", border: "rgba(34,197,94,.2)" },
  Preparing:         { bg: "rgba(245,158,11,.1)",  text: "#f59e0b", border: "rgba(245,158,11,.2)" },
  "Out for delivery":{ bg: "rgba(59,130,246,.1)",  text: "#60a5fa", border: "rgba(59,130,246,.2)" },
};

const FEATURES = [
  "Real-time order tracking & kitchen display",
  "Table booking management with auto-reminders",
  "One-click menu updates — no tech skills needed",
  "Revenue analytics & monthly reports",
];

export default function AdminDashboard() {
  return (
    <section style={{ padding: "120px 60px", background: "var(--ink2)", position: "relative", overflow: "hidden" }}>
      {/* Subtle grid pattern */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(200,160,90,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(200,160,90,.03) 1px,transparent 1px)", backgroundSize: "64px 64px", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

          {/* ── Left: copy ── */}
          <div>
            <div className="rv" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,160,90,.08)", border: "1px solid rgba(200,160,90,.2)", padding: "6px 16px", marginBottom: 24 }}>
              <span style={{ fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)" }}>Included With Every Website</span>
            </div>

            <Tag><span className="rv d1">Restaurant Management</span></Tag>

            <h2 className="rv d2" style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem,4vw,3.8rem)", fontWeight: 400, color: "var(--cream)", lineHeight: 1.1, marginBottom: 28 }}>
              Manage Orders,<br />Bookings &<br /><em style={{ fontStyle: "italic", color: "var(--gold2)" }}>Menu Effortlessly</em>
            </h2>

            <p className="rv d3" style={{ fontFamily: "var(--sans)", fontSize: 14.5, fontWeight: 300, color: "var(--warm)", lineHeight: 1.85, marginBottom: 36 }}>
              Every website we build comes with a powerful admin dashboard — track orders, manage reservations, update your menu, and analyse revenue, all from one clean interface.
            </p>

            <div className="rv d4" style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 44 }}>
              {FEATURES.map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 20, height: 20, background: "rgba(200,160,90,.12)", border: "1px solid rgba(200,160,90,.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="9" height="9" viewBox="0 0 10 8"><polyline points="1,4 3.5,7 9,1" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </div>
                  <span style={{ fontFamily: "var(--sans)", fontSize: 13.5, color: "var(--warm)", fontWeight: 300 }}>{f}</span>
                </div>
              ))}
            </div>

            <div className="rv d5">
              <Btn href={wa.adminPanel()} style={{ padding: "16px 48px" }}>Get This Dashboard →</Btn>
            </div>
          </div>

          {/* ── Right: mockup ── */}
          <div className="rv-r" style={{ position: "relative" }}>
            <div style={{ position: "absolute", inset: -40, background: "radial-gradient(ellipse at center, rgba(200,160,90,.07) 0%, transparent 70%)", pointerEvents: "none" }} />

            <div style={{ background: "var(--ink3)", border: "1px solid rgba(200,160,90,.15)", overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,.6)" }}>
              {/* Titlebar */}
              <div style={{ padding: "16px 24px", borderBottom: "1px solid rgba(200,160,90,.1)", display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(200,160,90,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ fontFamily: "var(--serif)", fontSize: 15, color: "var(--gold)" }}>Spice Haven</div>
                  <div style={{ background: "rgba(200,160,90,.12)", border: "1px solid rgba(200,160,90,.2)", padding: "2px 10px", fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase" }}>Admin</div>
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                  {["#ef4444", "#f59e0b", "#22c55e"].map((c) => (
                    <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                  ))}
                </div>
              </div>

              <div style={{ padding: 24 }}>
                {/* Stats */}
                <div className="dash-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 8, marginBottom: 16 }}>
                  {STATS.map((s, i) => (
                    <div key={i} style={{ background: "var(--ink4)", border: "1px solid rgba(200,160,90,.1)", padding: "20px 24px", transition: "all .35s var(--ease)" }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(200,160,90,.3)"; e.currentTarget.style.background = "var(--ink3)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(200,160,90,.1)"; e.currentTarget.style.background = "var(--ink4)"; }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                        <span style={{ fontSize: 18 }}>{s.icon}</span>
                        <span style={{ fontFamily: "var(--sans)", fontSize: 10, color: "#22c55e", background: "rgba(34,197,94,.1)", padding: "2px 8px", letterSpacing: "0.1em" }}>{s.trend}</span>
                      </div>
                      <div style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--gold)", marginBottom: 4 }}>{s.value}</div>
                      <div style={{ fontFamily: "var(--sans)", fontSize: 10, letterSpacing: "0.1em", color: "var(--muted)", textTransform: "uppercase" }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Recent orders */}
                <div style={{ background: "var(--ink4)", border: "1px solid rgba(200,160,90,.08)", padding: 16 }}>
                  <div style={{ fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 12 }}>Recent Orders</div>
                  {RECENT_ORDERS.map((o, i) => {
                    const sc = STATUS_COLORS[o.status] || STATUS_COLORS.Preparing;
                    return (
                      <div key={i} style={{ padding: "10px 0", borderBottom: i < RECENT_ORDERS.length - 1 ? "1px solid rgba(200,160,90,.06)" : undefined, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                        <div>
                          <div style={{ fontFamily: "var(--sans)", fontSize: 11.5, color: "var(--warm)", marginBottom: 3, lineHeight: 1.4 }}>{o.name}</div>
                          <div style={{ fontFamily: "var(--sans)", fontSize: 10, color: "var(--muted)" }}>{o.time}</div>
                        </div>
                        <span style={{ fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", padding: "3px 10px", whiteSpace: "nowrap", flexShrink: 0, background: sc.bg, color: sc.text, border: `1px solid ${sc.border}` }}>
                          {o.status}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div style={{ position: "absolute", bottom: -18, right: -18, background: "var(--gold)", padding: "12px 20px", boxShadow: "0 8px 32px rgba(200,160,90,.35)", animation: "glowPulse 3s infinite" }}>
              <div style={{ fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ink)", fontWeight: 500 }}>Live Dashboard Preview</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
