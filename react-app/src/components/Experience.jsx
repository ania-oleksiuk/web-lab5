function Experience({ isDark }) {
  const sectionStyle = {
    margin: "20px",
    padding: "20px",
    backgroundColor: isDark ? "#1e293b" : "white",
    borderRadius: "10px",
    boxShadow: isDark ? "0 4px 10px rgba(0,0,0,0.4)" : "0 4px 10px rgba(0,0,0,0.1)",
    color: isDark ? "#e2e8f0" : "inherit"
  };

  const headingStyle = {
    color: isDark ? "#93c5fd" : "inherit",
    marginBottom: "10px"
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Досвід роботи</h2>

      <article>
        <h3 style={headingStyle}>Front-End розробник</h3>
        <p><strong>Стажування</strong></p>
        <p>Вересень 2024 — Грудень 2024</p>
        <ul style={{ paddingLeft: "20px" }}>
          <li>Верстка вебсторінок на HTML та CSS</li>
          <li>Розробка інтерактивних елементів на JavaScript</li>
          <li>Робота з Git та командою розробників</li>
        </ul>
      </article>
    </section>
  );
}

export default Experience;
