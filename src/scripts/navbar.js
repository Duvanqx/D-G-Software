export default function initNavbar() {
  const openBtn = document.querySelector('button[aria-label="Open main menu"]');
  const closeBtn = document.querySelector('button[aria-label="Close menu"]');
  const mobileMenu = document.querySelector('[role="dialog"]');

  if (openBtn && closeBtn && mobileMenu) {
    openBtn.addEventListener("click", () => mobileMenu.classList.remove("hidden"));
    closeBtn.addEventListener("click", () => mobileMenu.classList.add("hidden"));
  }
}