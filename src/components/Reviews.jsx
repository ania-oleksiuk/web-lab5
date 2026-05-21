import { useState, useEffect } from "react";

function Reviews({ isDark }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/26/comments")
      .then(res => res.json())
      .then(data => { setComments(data); setLoading(false); })
      .catch(err => { console.error(err); setLoading(false); });
  }, []);

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

  const cardStyle = {
    border: isDark ? "1px solid #334155" : "1px solid #e2e8f0",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "6px",
    backgroundColor: isDark ? "#0f172a" : "#f8fafc"
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Відгуки</h2>
      {loading ? (
        <p>Завантаження...</p>
      ) : (
        comments.map(c => (
          <div key={c.id} style={cardStyle}>
            <h4 style={{ margin: "0 0 4px", color: isDark ? "#93c5fd" : "#2563eb" }}>
              {c.name}
            </h4>
            <p style={{ margin: "0 0 8px", fontSize: "0.85em", color: isDark ? "#64748b" : "#6b7280" }}>
              {c.email}
            </p>
            <p style={{ margin: 0 }}>{c.body}</p>
          </div>
        ))
      )}
    </section>
  );
}

export default Reviews;