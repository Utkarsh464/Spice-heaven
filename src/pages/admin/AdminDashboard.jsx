import { useState } from "react";
import { useApp } from "../../context/AppContext";
import { formatPrice } from "../../utils/helpers";
import { MENU_DATA } from "../../constants/menu";

// ── helpers ───────────────────────────────────────────────────────────────────
const STATUS_STYLE = {
  confirmed:  { bg:"rgba(34,197,94,.12)",   text:"#22c55e", border:"rgba(34,197,94,.25)",   label:"Confirmed"  },
  pending:    { bg:"rgba(245,158,11,.12)",  text:"#f59e0b", border:"rgba(245,158,11,.25)",  label:"Pending"    },
  cancelled:  { bg:"rgba(239,68,68,.12)",   text:"#ef4444", border:"rgba(239,68,68,.25)",   label:"Cancelled"  },
  served:     { bg:"rgba(34,197,94,.12)",   text:"#22c55e", border:"rgba(34,197,94,.25)",   label:"Served"     },
  preparing:  { bg:"rgba(59,130,246,.12)",  text:"#60a5fa", border:"rgba(59,130,246,.25)",  label:"Preparing"  },
};

function StatusBadge({ status }) {
  const s = STATUS_STYLE[status] || STATUS_STYLE.pending;
  return (
    <span style={{ fontFamily:"var(--sans)", fontSize:10, letterSpacing:"0.12em", textTransform:"uppercase", padding:"3px 10px", background:s.bg, color:s.text, border:`1px solid ${s.border}`, whiteSpace:"nowrap" }}>
      {s.label}
    </span>
  );
}

function StatCard({ icon, label, value, sub, color = "var(--gold)" }) {
  return (
    <div style={{ background:"var(--ink3)", border:"1px solid rgba(200,160,90,.1)", padding:"24px 28px", transition:"all .35s var(--ease)" }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor="rgba(200,160,90,.28)"; e.currentTarget.style.transform="translateY(-3px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor="rgba(200,160,90,.1)"; e.currentTarget.style.transform="translateY(0)"; }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:16 }}>
        <div style={{ fontSize:24 }}>{icon}</div>
        {sub && <div style={{ fontFamily:"var(--sans)", fontSize:11, color:"#22c55e", background:"rgba(34,197,94,.1)", padding:"2px 8px" }}>{sub}</div>}
      </div>
      <div style={{ fontFamily:"var(--serif)", fontSize:30, color, lineHeight:1, marginBottom:6 }}>{value}</div>
      <div style={{ fontFamily:"var(--sans)", fontSize:11, letterSpacing:"0.12em", textTransform:"uppercase", color:"var(--muted)" }}>{label}</div>
    </div>
  );
}

// ── Sidebar ───────────────────────────────────────────────────────────────────
const TABS = [
  { id:"overview",  label:"Overview",  icon:"📊" },
  { id:"bookings",  label:"Bookings",  icon:"📅" },
  { id:"orders",    label:"Orders",    icon:"🛒" },
  { id:"menu",      label:"Menu",      icon:"🍽️" },
];

function Sidebar({ tab, setTab, adminUser, adminLogout, navigate }) {
  return (
    <div style={{ width:220, background:"var(--ink2)", borderRight:"1px solid rgba(200,160,90,.1)", display:"flex", flexDirection:"column", flexShrink:0 }}>
      {/* Logo */}
      <div style={{ padding:"24px 20px", borderBottom:"1px solid rgba(200,160,90,.1)" }}>
        <button onClick={() => navigate("Home")} style={{ background:"none", border:"none", cursor:"pointer", textAlign:"left" }}>
          <div style={{ fontFamily:"var(--serif)", fontSize:18, color:"var(--gold)" }}>Spice Haven</div>
          <div style={{ fontFamily:"var(--sans)", fontSize:8, letterSpacing:"0.28em", textTransform:"uppercase", color:"var(--muted)", marginTop:2 }}>Admin Panel</div>
        </button>
      </div>

      {/* Nav */}
      <nav style={{ flex:1, padding:"16px 0" }}>
        {TABS.map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            display:"flex", alignItems:"center", gap:10,
            width:"100%", textAlign:"left",
            padding:"12px 20px", background: tab===t.id ? "rgba(200,160,90,.1)" : "none",
            border:"none", borderLeft: tab===t.id ? "3px solid var(--gold)" : "3px solid transparent",
            cursor:"pointer", fontFamily:"var(--sans)", fontSize:13, letterSpacing:"0.05em",
            color: tab===t.id ? "var(--gold)" : "var(--muted)", transition:"all .25s",
          }}
            onMouseEnter={(e) => { if(tab!==t.id){ e.currentTarget.style.background="rgba(200,160,90,.05)"; e.currentTarget.style.color="var(--warm)"; }}}
            onMouseLeave={(e) => { if(tab!==t.id){ e.currentTarget.style.background="none"; e.currentTarget.style.color="var(--muted)"; }}}>
            <span>{t.icon}</span> {t.label}
          </button>
        ))}
      </nav>

      {/* User */}
      <div style={{ padding:"16px 20px", borderTop:"1px solid rgba(200,160,90,.1)" }}>
        <div style={{ fontFamily:"var(--sans)", fontSize:12, color:"var(--warm)", marginBottom:4 }}>{adminUser?.name || "Admin"}</div>
        <div style={{ fontFamily:"var(--sans)", fontSize:10, color:"var(--muted)", marginBottom:12 }}>{adminUser?.role || "Manager"}</div>
        <button onClick={adminLogout} style={{ background:"none", border:"1px solid rgba(200,160,90,.15)", color:"var(--muted)", fontFamily:"var(--sans)", fontSize:10, letterSpacing:"0.15em", textTransform:"uppercase", padding:"6px 14px", cursor:"pointer", transition:"all .25s" }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor="#ef4444"; e.currentTarget.style.color="#ef4444"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor="rgba(200,160,90,.15)"; e.currentTarget.style.color="var(--muted)"; }}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

// ── Overview tab ──────────────────────────────────────────────────────────────
function OverviewTab({ bookings, orders }) {
  const todayRevenue = orders.filter(o => o.status === "served").reduce((s, o) => s + o.total, 0);
  const confirmedBookings = bookings.filter(b => b.status === "confirmed").length;
  const pendingOrders     = orders.filter(o => o.status === "pending").length;
  const totalGuests       = bookings.filter(b => b.status === "confirmed").reduce((s, b) => s + b.guests, 0);

  return (
    <div>
      <div style={{ marginBottom:32 }}>
        <div style={{ fontFamily:"var(--serif)", fontSize:26, color:"var(--cream)", marginBottom:4 }}>Good evening 👋</div>
        <div style={{ fontFamily:"var(--sans)", fontSize:13, color:"var(--muted)" }}>Here's what's happening at Spice Haven today.</div>
      </div>

      {/* Stat cards */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:12, marginBottom:40 }} className="admin-stats-grid">
        <StatCard icon="💰" label="Today's Revenue" value={formatPrice(todayRevenue)} sub="+18%" />
        <StatCard icon="📅" label="Confirmed Bookings" value={confirmedBookings} sub="+3" color="var(--cream)" />
        <StatCard icon="🛒" label="Pending Orders" value={pendingOrders} color="#f59e0b" />
        <StatCard icon="👥" label="Expected Guests" value={totalGuests} color="var(--cream)" />
      </div>

      {/* Two cols: recent bookings + recent orders */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }} className="admin-two-col">
        <div style={{ background:"var(--ink3)", border:"1px solid rgba(200,160,90,.1)", padding:"24px" }}>
          <div style={{ fontFamily:"var(--sans)", fontSize:10, letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--gold)", marginBottom:20 }}>Recent Bookings</div>
          {bookings.slice(0,4).map((b) => (
            <div key={b.id} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 0", borderBottom:"1px solid rgba(200,160,90,.06)" }}>
              <div>
                <div style={{ fontFamily:"var(--sans)", fontSize:13, color:"var(--cream)", marginBottom:2 }}>{b.name}</div>
                <div style={{ fontFamily:"var(--sans)", fontSize:11, color:"var(--muted)" }}>{b.date} · {b.time} · {b.guests} pax</div>
              </div>
              <StatusBadge status={b.status} />
            </div>
          ))}
        </div>

        <div style={{ background:"var(--ink3)", border:"1px solid rgba(200,160,90,.1)", padding:"24px" }}>
          <div style={{ fontFamily:"var(--sans)", fontSize:10, letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--gold)", marginBottom:20 }}>Recent Orders</div>
          {orders.slice(0,4).map((o) => (
            <div key={o.id} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 0", borderBottom:"1px solid rgba(200,160,90,.06)" }}>
              <div>
                <div style={{ fontFamily:"var(--sans)", fontSize:13, color:"var(--cream)", marginBottom:2 }}>{o.customer}</div>
                <div style={{ fontFamily:"var(--sans)", fontSize:11, color:"var(--muted)" }}>{o.items.length} item{o.items.length !== 1 ? "s" : ""} · {formatPrice(o.total)}</div>
              </div>
              <StatusBadge status={o.status} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Bookings tab ──────────────────────────────────────────────────────────────
function BookingsTab({ bookings, updateBookingStatus }) {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? bookings : bookings.filter(b => b.status === filter);

  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:28 }}>
        <div style={{ fontFamily:"var(--serif)", fontSize:24, color:"var(--cream)" }}>Bookings</div>
        <div style={{ display:"flex", gap:2 }}>
          {["all","confirmed","pending","cancelled"].map((f) => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding:"7px 16px", background: filter===f ? "var(--gold)" : "var(--ink4)",
              border:"1px solid rgba(200,160,90,.15)", color: filter===f ? "var(--ink)" : "var(--muted)",
              cursor:"pointer", fontFamily:"var(--sans)", fontSize:10, letterSpacing:"0.12em",
              textTransform:"capitalize", transition:"all .25s",
            }}>
              {f}
            </button>
          ))}
        </div>
      </div>

      <div style={{ background:"var(--ink3)", border:"1px solid rgba(200,160,90,.1)", overflow:"hidden" }}>
        {/* Table header */}
        <div style={{ display:"grid", gridTemplateColumns:"80px 1fr 80px 140px 100px 110px 120px", padding:"12px 20px", borderBottom:"1px solid rgba(200,160,90,.1)", background:"rgba(200,160,90,.04)" }}>
          {["ID","Name","Guests","Date & Time","Occasion","Status","Action"].map((h) => (
            <div key={h} style={{ fontFamily:"var(--sans)", fontSize:9, letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--muted)" }}>{h}</div>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div style={{ padding:"40px", textAlign:"center", fontFamily:"var(--sans)", fontSize:13, color:"var(--muted)" }}>No bookings found.</div>
        ) : filtered.map((b) => (
          <div key={b.id} style={{ display:"grid", gridTemplateColumns:"80px 1fr 80px 140px 100px 110px 120px", padding:"14px 20px", borderBottom:"1px solid rgba(200,160,90,.06)", alignItems:"center", transition:"background .2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.background="rgba(200,160,90,.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.background="transparent")}>
            <div style={{ fontFamily:"var(--sans)", fontSize:11, color:"var(--muted)" }}>{b.id}</div>
            <div style={{ fontFamily:"var(--sans)", fontSize:13, color:"var(--cream)" }}>{b.name}</div>
            <div style={{ fontFamily:"var(--sans)", fontSize:13, color:"var(--warm)" }}>{b.guests}</div>
            <div style={{ fontFamily:"var(--sans)", fontSize:12, color:"var(--warm)" }}>{b.date}<br/><span style={{ color:"var(--muted)", fontSize:11 }}>{b.time}</span></div>
            <div style={{ fontFamily:"var(--sans)", fontSize:12, color:"var(--muted)" }}>{b.occasion || "None"}</div>
            <StatusBadge status={b.status} />
            <div style={{ display:"flex", gap:4 }}>
              {b.status === "pending" && (
                <button onClick={() => updateBookingStatus(b.id,"confirmed")} style={{ padding:"4px 10px", background:"rgba(34,197,94,.1)", border:"1px solid rgba(34,197,94,.25)", color:"#22c55e", cursor:"pointer", fontFamily:"var(--sans)", fontSize:9, letterSpacing:"0.1em", transition:"all .2s" }}>Confirm</button>
              )}
              {b.status !== "cancelled" && (
                <button onClick={() => updateBookingStatus(b.id,"cancelled")} style={{ padding:"4px 10px", background:"rgba(239,68,68,.08)", border:"1px solid rgba(239,68,68,.2)", color:"#ef4444", cursor:"pointer", fontFamily:"var(--sans)", fontSize:9, letterSpacing:"0.1em", transition:"all .2s" }}>Cancel</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Orders tab ────────────────────────────────────────────────────────────────
function OrdersTab({ orders, updateOrderStatus }) {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? orders : orders.filter(o => o.status === filter);

  const STATUS_NEXT = { pending:"preparing", preparing:"served" };

  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:28 }}>
        <div style={{ fontFamily:"var(--serif)", fontSize:24, color:"var(--cream)" }}>Orders</div>
        <div style={{ display:"flex", gap:2 }}>
          {["all","pending","preparing","served"].map((f) => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding:"7px 16px", background: filter===f ? "var(--gold)" : "var(--ink4)",
              border:"1px solid rgba(200,160,90,.15)", color: filter===f ? "var(--ink)" : "var(--muted)",
              cursor:"pointer", fontFamily:"var(--sans)", fontSize:10, letterSpacing:"0.12em",
              textTransform:"capitalize", transition:"all .25s",
            }}>
              {f}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
        {filtered.length === 0 ? (
          <div style={{ padding:"40px", textAlign:"center", background:"var(--ink3)", border:"1px solid rgba(200,160,90,.1)", fontFamily:"var(--sans)", fontSize:13, color:"var(--muted)" }}>No orders found.</div>
        ) : filtered.map((o) => (
          <div key={o.id} style={{ background:"var(--ink3)", border:"1px solid rgba(200,160,90,.1)", padding:"20px 24px", transition:"border-color .2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor="rgba(200,160,90,.22)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor="rgba(200,160,90,.1)")}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:14 }}>
              <div>
                <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:4 }}>
                  <span style={{ fontFamily:"var(--serif)", fontSize:16, color:"var(--cream)" }}>{o.customer}</span>
                  <span style={{ fontFamily:"var(--sans)", fontSize:10, color:"var(--muted)" }}>{o.id}</span>
                </div>
                <div style={{ fontFamily:"var(--sans)", fontSize:11, color:"var(--muted)" }}>{o.createdAt}</div>
              </div>
              <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                <StatusBadge status={o.status} />
                {STATUS_NEXT[o.status] && (
                  <button onClick={() => updateOrderStatus(o.id, STATUS_NEXT[o.status])} style={{ padding:"6px 14px", background:"var(--gold)", border:"none", color:"var(--ink)", cursor:"pointer", fontFamily:"var(--sans)", fontSize:10, letterSpacing:"0.15em", textTransform:"uppercase", transition:"background .2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background="var(--gold2)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background="var(--gold)")}>
                    Mark {STATUS_NEXT[o.status] === "preparing" ? "Preparing" : "Served"}
                  </button>
                )}
              </div>
            </div>

            {/* Items */}
            <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:14 }}>
              {o.items.map((item) => (
                <div key={item.n} style={{ background:"rgba(200,160,90,.07)", border:"1px solid rgba(200,160,90,.12)", padding:"4px 12px", fontFamily:"var(--sans)", fontSize:11, color:"var(--warm)" }}>
                  {item.n} ×{item.qty}
                </div>
              ))}
            </div>

            <div style={{ display:"flex", justifyContent:"flex-end" }}>
              <span style={{ fontFamily:"var(--serif)", fontSize:18, color:"var(--gold)" }}>{formatPrice(o.total)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Menu preview tab ──────────────────────────────────────────────────────────
function MenuTab() {
  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:28 }}>
        <div style={{ fontFamily:"var(--serif)", fontSize:24, color:"var(--cream)" }}>Menu Items</div>
        <div style={{ fontFamily:"var(--sans)", fontSize:11, color:"var(--muted)" }}>
          {Object.values(MENU_DATA).flat().length} total items
        </div>
      </div>
      {Object.entries(MENU_DATA).map(([cat, items]) => (
        <div key={cat} style={{ marginBottom:28 }}>
          <div style={{ fontFamily:"var(--sans)", fontSize:9, letterSpacing:"0.28em", textTransform:"uppercase", color:"var(--gold)", marginBottom:12 }}>{cat}</div>
          <div style={{ background:"var(--ink3)", border:"1px solid rgba(200,160,90,.1)", overflow:"hidden" }}>
            {items.map((item, i) => (
              <div key={item.n} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"14px 20px", borderBottom: i < items.length-1 ? "1px solid rgba(200,160,90,.06)" : "none", transition:"background .2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.background="rgba(200,160,90,.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.background="transparent")}>
                <div>
                  <div style={{ fontFamily:"var(--serif)", fontSize:15, color:"var(--cream)", marginBottom:3 }}>{item.n}</div>
                  <div style={{ fontFamily:"var(--sans)", fontSize:12, color:"var(--muted)" }}>{item.d}</div>
                </div>
                <div style={{ fontFamily:"var(--serif)", fontSize:18, color:"var(--gold)", flexShrink:0, marginLeft:24 }}>₹{item.p}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Main dashboard ────────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const { adminUser, adminLogout, bookings, orders, updateBookingStatus, updateOrderStatus, navigate } = useApp();
  const [tab, setTab] = useState("overview");

  // Guard
  if (!adminUser) {
    navigate("AdminLogin");
    return null;
  }

  return (
    <div style={{ minHeight:"100vh", background:"var(--ink)", display:"flex" }}>
      <Sidebar tab={tab} setTab={setTab} adminUser={adminUser} adminLogout={() => { adminLogout(); navigate("Home"); }} navigate={navigate} />

      {/* Main content */}
      <div style={{ flex:1, overflowY:"auto", padding:"40px 48px" }}>
        {/* Top bar */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:40, paddingBottom:24, borderBottom:"1px solid rgba(200,160,90,.1)" }}>
          <div style={{ fontFamily:"var(--sans)", fontSize:11, letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--muted)" }}>
            {new Date().toLocaleDateString("en-IN", { weekday:"long", day:"numeric", month:"long", year:"numeric" })}
          </div>
          <div style={{ display:"flex", gap:8 }}>
            <div style={{ background:"rgba(34,197,94,.1)", border:"1px solid rgba(34,197,94,.2)", padding:"4px 12px", fontFamily:"var(--sans)", fontSize:10, color:"#22c55e", letterSpacing:"0.12em", textTransform:"uppercase" }}>
              ● Kitchen Open
            </div>
          </div>
        </div>

        {/* Tab content */}
        {tab === "overview" && <OverviewTab bookings={bookings} orders={orders} />}
        {tab === "bookings" && <BookingsTab bookings={bookings} updateBookingStatus={updateBookingStatus} />}
        {tab === "orders"   && <OrdersTab   orders={orders}     updateOrderStatus={updateOrderStatus} />}
        {tab === "menu"     && <MenuTab />}
      </div>

      <style>{`
        @media(max-width:1024px){ .admin-stats-grid{ grid-template-columns:repeat(2,1fr)!important; } .admin-two-col{ grid-template-columns:1fr!important; } }
        @media(max-width:768px){ .admin-stats-grid{ grid-template-columns:1fr!important; } }
      `}</style>
    </div>
  );
}
