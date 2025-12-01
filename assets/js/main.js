// Ano automático no rodapé
const anoSpan = document.getElementById("ano");
if (anoSpan) {
  anoSpan.textContent = new Date().getFullYear();
}

// Menu mobile
const toggleBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (toggleBtn && nav) {
  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // Fechar menu ao clicar em um link
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}
