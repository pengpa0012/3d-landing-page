const navBurger = document.querySelector(".nav-burger");
const navContent = document.querySelector(".nav-links");

navBurger.addEventListener("click", toggleNav);

function toggleNav() {
  navContent.classList.toggle("active");
}
/* 
const allImg = document.querySelectorAll(".img-hover");

let mouse = {
  x: undefined,
  y: undefined,
};

allImg.forEach((img) => {
  img.addEventListener("mouseover", (e) => {
    console.log(e.pageX);
  });
}); */
