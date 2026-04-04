// Selecting elements from page

const menuOpenButton = document.querySelector("#menu-open-button");
const menuOpen = document.querySelector("header .nav-bar .nav-menu");
const menuCloseButton = document.querySelector("#menu-close-button");
// Adding Events

menuOpenButton.addEventListener("click", function () {
  menuOpen.style.left = "0";
  document.querySelector("main").classList.add("overlay");
});

menuCloseButton.addEventListener("click", function () {
  menuOpen.style.left = "-450px";
  document.querySelector("main").classList.remove("overlay");
});

document.querySelector("main").addEventListener("click", () => {
  menuOpen.style.left = "-450px";
  document.querySelector("main").classList.remove("overlay");
});
