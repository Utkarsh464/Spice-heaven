import { useState, useEffect } from "react";
import { openIGDM } from "../../utils/instagram";
import { triggerIGToast } from "./IGToast";

/**
 * IGFloat — Fixed floating Instagram DM button (bottom-right).
 * Slides in 2.8s after load. Copies message to clipboard on click.
 */
export default function IGFloat() {
  const [show,    setShow]    = useState(false);
  const [pulse,   setPulse]   = useState(false);
  const [tooltip, setTooltip] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShow(true), 2800);
    const t2 = setTimeout(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 1000);
    }, 6000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    openIGDM("getWebsite");
    triggerIGToast();
  };

  return (
    <div style={{
      position:"fixed", bottom:32, right:32, zIndex:998,
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0) scale(1)" : "translateY(20px) scale(0.6)",
      transition:"opacity .45s var(--ease-spring), transform .45s var(--ease-spring)",
      display:"flex", flexDirection:"column", alignItems:"flex-end", gap:10,
    }}>
      {/* Tooltip */}
      <div style={{
        background:"var(--ink3)", border:"1px solid rgba(200,160,90,.2)",
        padding:"8px 14px", whiteSpace:"nowrap",
        opacity: tooltip ? 1 : 0,
        transform: tooltip ? "translateX(0)" : "translateX(8px)",
        transition:"all .25s var(--ease)", pointerEvents:"none",
      }}>
        <div style={{ fontFamily:"var(--sans)", fontSize:11, color:"var(--cream)", letterSpacing:"0.05em" }}>DM us on Instagram</div>
        <div style={{ fontFamily:"var(--sans)", fontSize:10, color:"var(--muted)", marginTop:2 }}>@webgrowth.in</div>
      </div>

      {/* Button */}
      <a
        href="https://ig.me/m/webgrowth.in"
        onClick={handleClick}
        title="DM us on Instagram"
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
        style={{
          width:58, height:58, borderRadius:"50%",
          background:"linear-gradient(135deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
          boxShadow: pulse
            ? "0 0 0 10px rgba(220,39,67,.0), 0 8px 28px rgba(220,39,67,.55)"
            : "0 8px 28px rgba(220,39,67,.4)",
          display:"flex", alignItems:"center", justifyContent:"center",
          textDecoration:"none", cursor:"pointer",
          transition:"transform .3s var(--ease-spring), box-shadow .3s",
          animation: pulse ? "igPulse .9s ease" : "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform="scale(1.13)";
          e.currentTarget.style.boxShadow="0 12px 40px rgba(220,39,67,.6)";
          setTooltip(true);
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform="scale(1)";
          e.currentTarget.style.boxShadow="0 8px 28px rgba(220,39,67,.4)";
          setTooltip(false);
        }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="6" ry="6" stroke="white" strokeWidth="1.8"/>
          <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.8"/>
          <circle cx="18" cy="6" r="1.2" fill="white"/>
        </svg>
      </a>

      <style>{`
        @keyframes igPulse {
          0%   { box-shadow:0 0 0 0 rgba(220,39,67,.55),0 8px 28px rgba(220,39,67,.4); }
          70%  { box-shadow:0 0 0 14px rgba(220,39,67,.0),0 8px 28px rgba(220,39,67,.4); }
          100% { box-shadow:0 0 0 0 rgba(220,39,67,.0),0 8px 28px rgba(220,39,67,.4); }
        }
      `}</style>
    </div>
  );
}
