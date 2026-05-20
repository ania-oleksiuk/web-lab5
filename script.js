window.addEventListener("DOMContentLoaded", () => {

  // 1. LocalStorage — системна інформація у футері
  const info = {
    platform: navigator.platform,
    language: navigator.language,
    userAgent: navigator.userAgent,
  };
  localStorage.setItem("sysInfo", JSON.stringify(info));

  const stored = JSON.parse(localStorage.getItem("sysInfo"));
  const footer = document.querySelector("footer");
  footer.innerHTML += `
    <p><strong>Інформація про систему (з LocalStorage):</strong></p>
    <p>Платформа: ${stored.platform}</p>
    <p>Мова: ${stored.language}</p>
    <p>User-Agent: ${stored.userAgent}</p>
  `;

  // 2. Fetch API — завантаження коментарів
  async function loadComments() {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts/26/comments"
      );
      const data = await res.json();
      const container = document.getElementById("reviews");
      data.forEach(comment => {
        const card = document.createElement("div");
        card.style.cssText = "border:1px solid #ddd; padding:1rem; margin:0.5rem 0; border-radius:4px;";
        card.innerHTML = `
          <h4 style="margin:0 0 0.3rem">${comment.name}</h4>
          <p style="margin:0 0 0.5rem; color:#888; font-size:0.9em">${comment.email}</p>
          <p style="margin:0">${comment.body}</p>
        `;
        container.appendChild(card);
      });
    } catch (err) {
      console.error("Помилка завантаження:", err);
    }
  }
  loadComments();

  // 3. Модальне вікно — показати через 60 секунд
  setTimeout(() => {
    const modal = document.getElementById("modal");
    modal.style.display = "flex";
  }, 60000);

  document.getElementById("close-btn").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
  });

  // 4. Тема — автоматичне визначення + ручний перемикач
  const hour = new Date().getHours();
  if (hour < 7 || hour >= 21) {
    document.body.classList.add("dark-mode");
  }

  const toggleBtn = document.getElementById("theme-toggle");
  toggleBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Денна тема"
    : "🌙 Темна тема";

  toggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = isDark ? "☀️ Денна тема" : "🌙 Темна тема";
  });

});