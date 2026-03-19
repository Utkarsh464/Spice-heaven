import { useApp } from "../../context/AppContext";
import { formatPrice } from "../../utils/helpers";
import { wa } from "../../utils/whatsapp";

// ── icon helpers ──────────────────────────────────────────────────────────────
const Icon = ({ d, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

const STATUS_CYCLE = { pending: "preparing", preparing: "served", served: "served" };
const STATUS_COLOR = {
  pending:   { bg: "rgba(245,158,11,.12)", text: "#f59e0b", border: "rgba(245,158,11,.25)" },
  preparing: { bg: "rgba(59,130,246,.12)", text: "#60a5fa", border: "rgba(59,130,246,.25)" },
  served:    { bg: "rgba(34,197,94,.12)",  text: "#22c55e", border: "rgba(34,197,94,.25)" },
};

export default function CartDrawer() {
  const {
    cartOpen, setCartOpen,
    cartItems, cartCount, cartTotal,
    updateQty, removeFromCart, clearCart,
    addOrder, navigate,
  } = useApp();

  // Build WhatsApp message from cart
  const buildWaMessage = () => {
    if (!cartItems.length) return wa.general();
    const lines = cartItems.map((c) => `${c.item.n} x${c.qty} (₹${c.item.p * c.qty})`);
    const text = `Hi Spice Haven! I'd like to order:\n\n${lines.join("\n")}\n\nTotal: ₹${cartTotal}`;
    const NUM = "919528073932";
    return `https://wa.me/${NUM}?text=${encodeURIComponent(text)}`;
  };

  const handleWhatsAppOrder = () => {
    if (!cartItems.length) return;
    // Record in orders
    addOrder(
      cartItems.map((c) => ({ n: c.item.n, qty: c.qty, p: c.item.p })),
      cartTotal,
      "WhatsApp"
    );
    window.open(buildWaMessage(), "_blank", "noreferrer");
    clearCart();
    setCartOpen(false);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setCartOpen(false)}
        style={{
          position: "fixed", inset: 0, zIndex: 1100,
          background: "rgba(10,8,6,.65)", backdropFilter: "blur(4px)",
          opacity: cartOpen ? 1 : 0,
          pointerEvents: cartOpen ? "auto" : "none",
          transition: "opacity .35s var(--ease)",
        }}
      />

      {/* Drawer panel */}
      <div style={{
        position: "fixed", top: 0, right: 0, bottom: 0,
        width: "min(440px, 100vw)", zIndex: 1101,
        background: "var(--ink2)",
        borderLeft: "1px solid rgba(200,160,90,.18)",
        display: "flex", flexDirection: "column",
        transform: cartOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform .4s var(--ease)",
        boxShadow: cartOpen ? "-24px 0 80px rgba(0,0,0,.5)" : "none",
      }}>

        {/* Header */}
        <div style={{ padding: "24px 28px", borderBottom: "1px solid rgba(200,160,90,.12)", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ fontFamily: "var(--serif)", fontSize: 20, color: "var(--cream)" }}>Your Order</div>
            {cartCount > 0 && (
              <div style={{ background: "var(--gold)", color: "var(--ink)", fontFamily: "var(--sans)", fontSize: 11, fontWeight: 500, width: 22, height: 22, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {cartCount}
              </div>
            )}
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {cartCount > 0 && (
              <button onClick={clearCart} style={{ background: "none", border: "1px solid rgba(200,160,90,.2)", color: "var(--muted)", cursor: "pointer", fontFamily: "var(--sans)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", padding: "6px 12px", transition: "all .3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#ef4444"; e.currentTarget.style.color = "#ef4444"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(200,160,90,.2)"; e.currentTarget.style.color = "var(--muted)"; }}>
                Clear
              </button>
            )}
            <button onClick={() => setCartOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--muted)", display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, transition: "color .2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cream)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}>
              <Icon d="M18 6L6 18M6 6l12 12" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div style={{ flex: 1, overflowY: "auto", padding: "8px 0" }}>
          {cartItems.length === 0 ? (
            /* Empty state */
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: 20, padding: 40, textAlign: "center" }}>
              <div style={{ width: 72, height: 72, border: "1px solid rgba(200,160,90,.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--dim)", fontSize: 28 }}>🍽️</div>
              <div>
                <div style={{ fontFamily: "var(--serif)", fontSize: 20, color: "var(--cream)", marginBottom: 8 }}>Your cart is empty</div>
                <div style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--muted)", lineHeight: 1.65 }}>Add items from our menu to begin your order.</div>
              </div>
              <button onClick={() => { navigate("Menu"); setCartOpen(false); }} style={{ fontFamily: "var(--sans)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", background: "var(--gold)", color: "var(--ink)", border: "none", padding: "12px 32px", cursor: "pointer", transition: "background .3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gold2)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--gold)")}>
                Browse Menu
              </button>
            </div>
          ) : (
            /* Cart items */
            cartItems.map(({ item, qty }) => (
              <div key={item.n} style={{ padding: "16px 28px", borderBottom: "1px solid rgba(200,160,90,.07)", display: "flex", gap: 14, alignItems: "flex-start" }}>
                {/* Image */}
                <div style={{ width: 64, height: 64, flexShrink: 0, overflow: "hidden" }}>
                  <img src={item.img} alt={item.n} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.75) saturate(.85)" }} />
                </div>

                {/* Details */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "var(--serif)", fontSize: 15, color: "var(--cream)", marginBottom: 4, lineHeight: 1.3 }}>{item.n}</div>
                  <div style={{ fontFamily: "var(--sans)", fontSize: 12, color: "var(--muted)", marginBottom: 10 }}>{formatPrice(item.p)} each</div>

                  {/* Qty controls */}
                  <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
                    <button onClick={() => updateQty(item.n, -1)} style={{ width: 30, height: 30, background: "rgba(200,160,90,.08)", border: "1px solid rgba(200,160,90,.2)", color: "var(--gold)", cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center", transition: "all .2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(200,160,90,.18)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(200,160,90,.08)")}>
                      −
                    </button>
                    <div style={{ width: 40, height: 30, background: "rgba(200,160,90,.06)", border: "1px solid rgba(200,160,90,.15)", borderLeft: "none", borderRight: "none", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--sans)", fontSize: 14, color: "var(--cream)" }}>
                      {qty}
                    </div>
                    <button onClick={() => updateQty(item.n, +1)} style={{ width: 30, height: 30, background: "rgba(200,160,90,.08)", border: "1px solid rgba(200,160,90,.2)", color: "var(--gold)", cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center", transition: "all .2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(200,160,90,.18)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(200,160,90,.08)")}>
                      +
                    </button>
                  </div>
                </div>

                {/* Right: subtotal + remove */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 20 }}>
                  <div style={{ fontFamily: "var(--serif)", fontSize: 17, color: "var(--gold)" }}>
                    {formatPrice(item.p * qty)}
                  </div>
                  <button onClick={() => removeFromCart(item.n)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--dim)", transition: "color .2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ef4444")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--dim)")}>
                    <Icon d="M18 6L6 18M6 6l12 12" size={15} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer — totals + checkout */}
        {cartItems.length > 0 && (
          <div style={{ padding: "24px 28px", borderTop: "1px solid rgba(200,160,90,.12)", flexShrink: 0 }}>
            {/* Breakdown */}
            <div style={{ marginBottom: 20 }}>
              {[
                ["Subtotal", formatPrice(cartTotal)],
                ["Taxes & charges", formatPrice(Math.round(cartTotal * 0.05))],
              ].map(([label, val]) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--muted)" }}>{label}</span>
                  <span style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--warm)" }}>{val}</span>
                </div>
              ))}
              <div style={{ height: 1, background: "rgba(200,160,90,.12)", margin: "12px 0" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "var(--serif)", fontSize: 17, color: "var(--cream)" }}>Total</span>
                <span style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--gold)" }}>
                  {formatPrice(cartTotal + Math.round(cartTotal * 0.05))}
                </span>
              </div>
            </div>

            {/* WhatsApp order button */}
            <button onClick={handleWhatsAppOrder} style={{ width: "100%", padding: "16px", background: "#25D366", border: "none", cursor: "pointer", fontFamily: "var(--sans)", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: "white", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, transition: "all .3s", marginBottom: 10 }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#20bc5a")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#25D366")}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.107.546 4.09 1.502 5.814L.057 23.78l6.16-1.447A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.96 9.96 0 01-5.387-1.573l-.387-.232-4.007.94.903-3.91-.252-.401A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Place Order via WhatsApp
            </button>

            <button onClick={() => navigate("Booking")} style={{ width: "100%", padding: "13px", background: "transparent", border: "1px solid rgba(200,160,90,.25)", cursor: "pointer", fontFamily: "var(--sans)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--warm)", transition: "all .3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(200,160,90,.25)"; e.currentTarget.style.color = "var(--warm)"; }}>
              Book a Table Instead
            </button>
          </div>
        )}
      </div>
    </>
  );
}
