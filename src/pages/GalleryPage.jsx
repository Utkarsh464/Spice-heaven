import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import Tag from "../components/ui/Tag";
import GoldRule from "../components/ui/GoldRule";
import { GALLERY_PHOTOS } from "../constants/gallery";

export default function GalleryPage() {
  useReveal();
  const [lightbox, setLightbox] = useState(null);

  return (
    <div style={{ paddingTop: 100, minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ textAlign: "center", padding: "64px 60px 64px", background: "linear-gradient(to bottom, var(--ink2), var(--ink))" }}>
        <Tag>Visual Stories</Tag>
        <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(3rem,6vw,6rem)", fontWeight: 400, color: "var(--cream)", lineHeight: 1, marginBottom: 16 }}>
          Our <em style={{ fontStyle: "italic", color: "var(--gold2)" }}>Gallery</em>
        </h1>
        <GoldRule />
        <p style={{ fontFamily: "var(--sans)", fontSize: 14, color: "var(--muted)", maxWidth: 500, margin: "0 auto" }}>
          Every frame is a flavour story — from kitchen to table to memory.
        </p>
      </div>

      {/* Masonry grid */}
      <div style={{ padding: "4px 4px 80px", maxWidth: 1440, margin: "0 auto" }}>
        <div
          className="gallery-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gridAutoRows: "220px", gap: 4 }}
        >
          {GALLERY_PHOTOS.map((p, i) => (
            <div
              key={i}
              className="rv img-zoom"
              onClick={() => setLightbox(p)}
              style={{
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                gridColumn: p.big ? "span 2" : "span 1",
                gridRow: p.big ? "span 2" : "span 1",
              }}
            >
              <img
                src={p.src}
                alt={p.label}
                style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.68) saturate(.85)" }}
              />
              {/* Hover label overlay */}
              <div
                style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,8,6,.88) 0%, transparent 55%)", opacity: 0, transition: "opacity .35s" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = 0)}
              >
                <div style={{ position: "absolute", bottom: 20, left: 20 }}>
                  <p style={{ fontFamily: "var(--serif)", fontSize: 16, color: "var(--cream)", fontStyle: "italic" }}>{p.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(10,8,6,.96)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, cursor: "zoom-out", animation: "fadeIn .2s ease" }}
        >
          <div style={{ maxWidth: 1000, width: "100%", position: "relative" }}>
            <img src={lightbox.src} alt={lightbox.label} style={{ width: "100%", maxHeight: "80vh", objectFit: "contain", display: "block" }} />
            <p style={{ textAlign: "center", fontFamily: "var(--serif)", fontSize: 18, color: "var(--gold2)", marginTop: 20, fontStyle: "italic" }}>
              {lightbox.label}
            </p>
            <button
              onClick={() => setLightbox(null)}
              style={{ position: "absolute", top: -20, right: 0, background: "none", border: "none", color: "var(--muted)", fontSize: 32, cursor: "pointer", lineHeight: 1 }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
