const menuBoton = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
function activateMenu() {
  menuBoton.addEventListener("click", () => {
    menu.classList.toggle("menu-active");
  });
}
activateMenu();
