// Selecting elements from page

const menuOpenButton = document.querySelector("#menu-open-button");
const menuOpen = document.querySelector("header .nav-bar .nav-menu");
const menuCloseButton = document.querySelector("#menu-close-button");
// Adding Events

menuOpenButton.addEventListener("click", function () {
  menuOpen.style.left = "0";
});

menuCloseButton.addEventListener("click", function () {
  menuOpen.style.left = "-450px";
});
