var hamburger_menu = document.querySelector(".hamburger-menu");
var links = document.querySelector(".links");
var write_ups = document.querySelector(".write-ups");


hamburger_menu.addEventListener("click", () => {
  links.classList.toggle("active");
});



write_ups.addEventListener("click", () => {
  write_ups.classList.toggle("active");
});
