/**
 * GoldRule — Decorative horizontal gold divider with a diamond center.
 * Placed between section headings and content.
 */
export default function GoldRule() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        margin: "20px auto 32px",
        maxWidth: 160,
      }}
    >
      <div
        style={{
          flex: 1,
          height: 1,
          background: "linear-gradient(to right, transparent, var(--gold))",
        }}
      />
      <svg width="10" height="10" viewBox="0 0 10 10">
        <polygon points="5,0 10,5 5,10 0,5" fill="var(--gold)" />
      </svg>
      <div
        style={{
          flex: 1,
          height: 1,
          background: "linear-gradient(to left, transparent, var(--gold))",
        }}
      />
    </div>
  );
}
