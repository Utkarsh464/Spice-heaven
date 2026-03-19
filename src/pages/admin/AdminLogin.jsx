import { useState } from "react";
import { useApp } from "../../context/AppContext";

const CREDS = { username: "admin", password: "spice2024" };

export default function AdminLogin() {
  const { adminLogin, navigate } = useApp();
  const [form, setForm]     = useState({ username: "", password: "" });
  const [error, setError]   = useState("");
  const [loading, setLoading] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
      if (form.username === CREDS.username && form.password === CREDS.password) {
        adminLogin({ username: form.username, name: "Admin", role: "Manager" });
        navigate("AdminDashboard");
      } else {
        setError("Invalid credentials. Try admin / spice2024");
      }
      setLoading(false);
    }, 900);
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--ink)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      {/* Background texture */}
      <div style={{ position: "fixed", inset: 0, backgroundImage: "radial-gradient(ellipse at 30% 40%, rgba(200,100,30,.06) 0%, transparent 60%)", pointerEvents: "none" }} />

      <div style={{ width: "100%", maxWidth: 420, position: "relative" }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <button onClick={() => navigate("Home")} style={{ background: "none", border: "none", cursor: "pointer" }}>
            <div style={{ fontFamily: "var(--serif)", fontSize: 28, color: "var(--gold)", letterSpacing: "0.04em" }}>Spice Haven</div>
            <div style={{ fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--muted)", marginTop: 4 }}>Admin Portal</div>
          </button>
        </div>

        {/* Card */}
        <div style={{ background: "var(--ink3)", border: "1px solid rgba(200,160,90,.15)", padding: "48px 40px" }}>
          {/* Corner accents */}
          {[
            { top:0, left:0, borderTop:"1px solid var(--gold3)", borderLeft:"1px solid var(--gold3)" },
            { top:0, right:0, borderTop:"1px solid var(--gold3)", borderRight:"1px solid var(--gold3)" },
            { bottom:0, left:0, borderBottom:"1px solid var(--gold3)", borderLeft:"1px solid var(--gold3)" },
            { bottom:0, right:0, borderBottom:"1px solid var(--gold3)", borderRight:"1px solid var(--gold3)" },
          ].map((s, i) => <div key={i} style={{ position:"absolute", width:16, height:16, ...s }} />)}

          <div style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--cream)", marginBottom: 8 }}>Sign In</div>
          <div style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--muted)", marginBottom: 36, lineHeight: 1.6 }}>
            Access the Spice Haven management dashboard.
          </div>

          <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div>
              <label style={{ display: "block", fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 8 }}>Username</label>
              <input
                type="text" required autoComplete="username"
                placeholder="admin"
                value={form.username}
                onChange={(e) => setForm((p) => ({ ...p, username: e.target.value }))}
              />
            </div>
            <div>
              <label style={{ display: "block", fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 8 }}>Password</label>
              <input
                type="password" required autoComplete="current-password"
                placeholder="••••••••"
                value={form.password}
                onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
              />
            </div>

            {error && (
              <div style={{ background: "rgba(239,68,68,.1)", border: "1px solid rgba(239,68,68,.25)", padding: "10px 16px", fontFamily: "var(--sans)", fontSize: 12.5, color: "#ef4444" }}>
                {error}
              </div>
            )}

            <button type="submit" disabled={loading} style={{ marginTop: 8, padding: "15px", background: loading ? "var(--gold3)" : "var(--gold)", border: "none", cursor: loading ? "not-allowed" : "pointer", fontFamily: "var(--sans)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--ink)", transition: "background .3s", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              {loading ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 14 14" style={{ animation: "spin 1s linear infinite" }}>
                    <circle cx="7" cy="7" r="5" fill="none" stroke="var(--ink)" strokeWidth="1.5" strokeDasharray="22" strokeDashoffset="8" />
                  </svg>
                  Signing in…
                </>
              ) : "Sign In →"}
            </button>
          </form>

          {/* Demo hint */}
          <div style={{ marginTop: 28, padding: "12px 16px", background: "rgba(200,160,90,.06)", border: "1px solid rgba(200,160,90,.12)" }}>
            <div style={{ fontFamily: "var(--sans)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 4 }}>Demo Credentials</div>
            <div style={{ fontFamily: "var(--sans)", fontSize: 12.5, color: "var(--muted)" }}>Username: <strong style={{ color: "var(--warm)" }}>admin</strong> · Password: <strong style={{ color: "var(--warm)" }}>spice2024</strong></div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 28 }}>
          <button onClick={() => navigate("Home")} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "var(--sans)", fontSize: 11, letterSpacing: "0.15em", color: "var(--muted)", transition: "color .2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}>
            ← Back to Website
          </button>
        </div>
      </div>
    </div>
  );
}
