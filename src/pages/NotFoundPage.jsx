import { useApp } from "../context/AppContext";
import Btn from "../components/ui/Btn";

export default function NotFoundPage() {
  const { navigate } = useApp();

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "40px 24px" }}>
      <div style={{ fontFamily: "var(--serif)", fontSize: "clamp(6rem,20vw,14rem)", fontWeight: 400, color: "rgba(200,160,90,.12)", lineHeight: 1, marginBottom: 0 }}>
        404
      </div>
      <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 400, color: "var(--cream)", marginBottom: 16, marginTop: -20 }}>
        Page Not <em style={{ fontStyle: "italic", color: "var(--gold2)" }}>Found</em>
      </h1>
      <p style={{ fontFamily: "var(--sans)", fontSize: 14, color: "var(--muted)", maxWidth: 400, lineHeight: 1.75, marginBottom: 48 }}>
        The page you're looking for has wandered off the menu. Let us guide you back.
      </p>
      <Btn onClick={() => navigate("Home")}>Return Home</Btn>
    </div>
  );
}
