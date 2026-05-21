import { useState, useEffect } from "react";

function ContactForm({ isDark }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 60000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      onClick={() => setIsOpen(false)}
      style={{
        position: "fixed", inset: 0,
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: isDark ? "#1e293b" : "white",
          color: isDark ? "#e2e8f0" : "inherit",
          padding: "2rem",
          maxWidth: "400px",
          width: "100%",
          borderRadius: "10px",
          position: "relative",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
        }}
      >
        <button
          onClick={() => setIsOpen(false)}
          style={{
            position: "absolute", top: "1rem", right: "1rem",
            background: "none", border: "none",
            fontSize: "1.2rem", cursor: "pointer",
            color: isDark ? "#e2e8f0" : "inherit"
          }}
        >×</button>

        <h3 style={{ marginBottom: "1rem", color: isDark ? "#93c5fd" : "inherit" }}>
          Зв'язок зі мною
        </h3>

        <form
          action="https://formspree.io/f/mdabdvbp"
          method="POST"
          style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}
        >
          {["text", "email", "tel"].map((type, i) => (
            <input
              key={i}
              type={type}
              name={["name", "email", "phone"][i]}
              placeholder={["Ім'я", "Email", "Телефон"][i]}
              required={i < 2}
              style={{
                padding: "8px 12px",
                borderRadius: "6px",
                border: isDark ? "1px solid #334155" : "1px solid #d1d5db",
                backgroundColor: isDark ? "#0f172a" : "white",
                color: isDark ? "#e2e8f0" : "inherit"
              }}
            />
          ))}
          <textarea
            name="message"
            placeholder="Повідомлення"
            rows={4}
            style={{
              padding: "8px 12px",
              borderRadius: "6px",
              border: isDark ? "1px solid #334155" : "1px solid #d1d5db",
              backgroundColor: isDark ? "#0f172a" : "white",
              color: isDark ? "#e2e8f0" : "inherit",
              resize: "none"
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
