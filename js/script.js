const navBurger = document.querySelector(".nav-burger");
const navContent = document.querySelector(".nav-links");

navBurger.addEventListener("click", toggleNav);

function toggleNav() {
  navContent.classList.toggle("active");
}

const btnSecondary = document.querySelector(".button-secondary");
const character = document.querySelector("#walk");

btnSecondary.addEventListener("mouseenter", () => {
  character.style.animation = "walkanim 1s infinite steps(7)";
});

btnSecondary.addEventListener("mouseout", () => {
  character.style.animation = "";
});
