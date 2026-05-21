function Header({ isDark, onToggleTheme }) {
  return (
    <header style={{
      backgroundColor: isDark ? "#1e3a5f" : "#2563eb",
      color: "white",
      textAlign: "center",
      padding: "20px",
      position: "relative"
    }}>
      <button
        onClick={onToggleTheme}
        style={{
          position: "absolute",
          right: "20px",
          top: "20px",
          background: "rgba(255,255,255,0.2)",
          border: "none",
          color: "white",
          padding: "6px 12px",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        {isDark ? "☀️ Денна тема" : "🌙 Темна тема"}
      </button>
      <h1 style={{ marginBottom: "8px" }}>Олексюк Анна</h1>
      <p>Студентка · Кібербезпека та захист інформації</p>
      <address style={{ fontStyle: "normal" }}>
        <a href="mailto:anna.oleksiuk.kb.2023@lpnu.ua"
          style={{ color: "white" }}>
          anna.oleksiuk.kb.2023@lpnu.ua
        </a> |{" "}
        <a href="https://github.com/ania-oleksiuk"
          target="_blank"
          style={{ color: "white" }}>
          github.com/ania-oleksiuk
        </a>
      </address>
    </header>
  );
}

export default Header;