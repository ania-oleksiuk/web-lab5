function Education({ isDark }) {
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
      <h2 style={headingStyle}>Освіта</h2>

      <article>
        <h3 style={headingStyle}>Бакалавр — Кібербезпека та захист інформації</h3>
        <p><strong>Університет «Львівська Політехніка»</strong></p>
        <p>Вересень 2023 — Червень 2027 (очікується)</p>
      </article>

      <article>
        <h3 style={headingStyle}>Середня освіта</h3>
        <p><strong>Меденицька СЗШ</strong></p>
        <p>Закінчила 2023</p>
      </article>
    </section>
  );
}

export default Education;
