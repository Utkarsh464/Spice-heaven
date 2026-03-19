import { useApp } from "../../context/AppContext";
import Btn from "../ui/Btn";
import Tag from "../ui/Tag";
import WAButton from "../ui/WAButton";
import { IMAGES as I } from "../../constants/images";
import { wa } from "../../utils/whatsapp";

export default function CTABanner() {
  const { navigate } = useApp();

  return (
    <section style={{ position: "relative", padding: "112px 60px", textAlign: "center", overflow: "hidden" }}>
      <img src={I.amb1} alt="background" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.18) saturate(.7)" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(200,120,40,.17) 0%, rgba(10,8,6,.65) 70%)" }} />

      <div style={{ position: "relative" }}>
        <Tag><span className="rv">Reserve Your Evening</span></Tag>
        <h2 className="rv d1" style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.4rem,5vw,5rem)", fontWeight: 400, color: "var(--cream)", lineHeight: 1.1, marginBottom: 24 }}>
          An Evening Worth<br /><em style={{ fontStyle: "italic", color: "var(--gold2)" }}>Remembering</em>
        </h2>
        <p className="rv d2" style={{ fontFamily: "var(--sans)", fontSize: 14, fontWeight: 300, color: "var(--warm)", maxWidth: 500, margin: "0 auto 48px", lineHeight: 1.75 }}>
          Reserve your table today and let us craft a culinary memory that lingers long after the last sip of chai.
        </p>
        <div className="rv d3" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Btn onClick={() => navigate("Booking")} style={{ padding: "17px 56px" }}>Book Your Table</Btn>
        </div>
      </div>
    </section>
  );
}
