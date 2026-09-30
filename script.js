const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menu?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
  menu.querySelector("[aria-hidden]").textContent = open ? "Close" : "Menu";
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav?.classList.contains("open")) {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
    menu.focus();
  }
});
function initAccordions(scope = document) {
  scope.querySelectorAll("[data-accordion-button]").forEach((button) =>
    button.addEventListener("click", () => {
      const panel = document.getElementById(
        button.getAttribute("aria-controls"),
      );
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      panel.hidden = expanded;
    }),
  );
}
initAccordions();
