const menu = document.querySelector("#hamburger");
const links = document.querySelector("#navLinks");
const header = document.querySelector("#siteHeader");
const theme = document.querySelector(".theme-toggle");

function closeMenu() {
  if (!menu || !links) return;
  links.classList.remove("open");
  menu.classList.remove("active");
  menu.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-label", "Abrir menú");
}

if (menu && links) {
  menu.addEventListener("click", () => {
    const open = !links.classList.contains("open");
    links.classList.toggle("open", open);
    menu.classList.toggle("active", open);
    menu.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  });
  links.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("click", event => {
    if (!event.target.closest("#navLinks, #hamburger")) closeMenu();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });
}

window.addEventListener("scroll", () => {
  if (header) header.classList.toggle("scrolled", window.scrollY > 30);
});

if (theme) {
  theme.addEventListener("click", () => {
    document.body.classList.toggle("warm-theme");
    theme.setAttribute("aria-pressed", String(document.body.classList.contains("warm-theme")));
  });
}
