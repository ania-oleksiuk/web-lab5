function Skills({ isDark }) {
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
      <h2 style={headingStyle}>Навички</h2>
      <ul style={{ paddingLeft: "20px" }}>
        <li>HTML5 / CSS3</li>
        <li>JavaScript (базовий рівень)</li>
        <li>Git / GitHub</li>
        <li>Основи кібербезпеки</li>
        <li>Linux (базовий рівень)</li>
        <li>Англійська мова — B1</li>
      </ul>
    </section>
  );
}

export default Skills;
