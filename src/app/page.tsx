export default function Home() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "3rem", color: "#0070f3" }}>🎟️ LuckyDraw (LDR)</h1>
      <p style={{ marginTop: "1rem", fontSize: "1.2rem" }}>
        Buy tickets & win daily prizes!
      </p>
      <button style={{
        marginTop: "2rem",
        padding: "1rem 2rem",
        backgroundColor: "#0070f3",
        color: "white",
        border: "none",
        borderRadius: "8px",
        fontSize: "1.2rem",
        cursor: "pointer"
      }}>
        Buy Ticket 🎫
      </button>
    </main>
  );
}
