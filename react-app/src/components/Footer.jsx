import { useState, useEffect } from "react";

function Footer({ isDark }) {
  const [sysInfo, setSysInfo] = useState({
    platform: "",
    language: "",
    userAgent: ""
  });

  useEffect(() => {
    const data = {
      platform: navigator.platform,
      language: navigator.language,
      userAgent: navigator.userAgent,
    };
    localStorage.setItem("sysInfo", JSON.stringify(data));
    setSysInfo(JSON.parse(localStorage.getItem("sysInfo")));
  }, []);

  return (
    <footer style={{
      textAlign: "center",
      padding: "10px",
      backgroundColor: isDark ? "#1e293b" : "#e5e7eb",
      color: isDark ? "#94a3b8" : "inherit"
    }}>
      <p>© 2025 Олексюк Анна</p>
      <div style={{ marginTop: "10px", fontSize: "0.85em" }}>
        <p><strong style={{ color: isDark ? "#cbd5e1" : "inherit" }}>
          Інформація про систему (з LocalStorage):
        </strong></p>
        <p>Платформа: {sysInfo.platform}</p>
        <p>Мова: {sysInfo.language}</p>
        <p style={{ wordBreak: "break-all" }}>
          User-Agent: {sysInfo.userAgent}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
