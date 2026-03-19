/**
 * Tag — Small uppercase eyebrow label in gold.
 * Used above section headings as a category identifier.
 */
export default function Tag({ children }) {
  return (
    <p
      style={{
        fontFamily: "var(--sans)",
        fontSize: 10,
        letterSpacing: "0.35em",
        textTransform: "uppercase",
        color: "var(--gold)",
        marginBottom: 14,
      }}
    >
      {children}
    </p>
  );
}
