const burger = document.querySelector(".burger");
const menu = document.querySelector(".nav-mobile");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
});

document
  .getElementById("year")
  .appendChild(document.createTextNode(new Date().getFullYear()));

// SMOOTH SCROLL
// const scroll = new Scrooth({
//   element: window,
//   strength: 10,
//   acceleration: 1.5,
//   deceleration: 0.975,
// });

// =============================
