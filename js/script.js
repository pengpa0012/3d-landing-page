const navBurger = document.querySelector(".nav-burger");
const navContent = document.querySelector(".nav-links");

navBurger.addEventListener("click", toggleNav);

function toggleNav() {
  navContent.classList.toggle("active");
}
