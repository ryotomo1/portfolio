// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    const offset = 70;
    window.scrollTo({ top: target.offsetTop - offset, behavior: "smooth" });
  });
});

// Nav shadow on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav");
  nav.style.boxShadow = window.scrollY > 10 ? "0 2px 16px rgba(0,0,0,0.08)" : "none";
});

// Fade-in on scroll
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
  { threshold: 0.12 }
);

document.querySelectorAll(
  ".problem-card, .service-card, .work-card, .flow-step, .faq-item, .about-inner, .hero-stats"
).forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(24px)";
  el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  observer.observe(el);
});

document.head.insertAdjacentHTML("beforeend", `
  <style>.visible { opacity: 1 !important; transform: none !important; }</style>
`);

// Form demo intercept
document.querySelector(".contact-form")?.addEventListener("submit", e => {
  e.preventDefault();
  alert("デモ用フォームです。実際のお問い合わせはGoogleフォームに差し替えてください。");
});
