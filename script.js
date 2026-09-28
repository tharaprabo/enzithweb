document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll(".main-nav a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

const top = document.querySelector(".back-to-top");
if (top) {
  window.addEventListener("scroll", () => {
    top.classList.toggle("show", window.scrollY > 450);
  });
  top.addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}));
}
