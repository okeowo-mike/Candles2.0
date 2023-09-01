// sticky menu transparency
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    document.querySelector(".nav").style.background = " rgba(0, 0, 0, 0.7)";
  } else {
    document.querySelector(".nav").style.background = " rgba(0, 0, 0, 0)";
  }
});
// window.addEventListener("scroll", function () {
//   if (window.scrollY > 1000) {
//     document.querySelector("#primary-navigation").style.color = " rgb(132, 132, 132)";
//   } else {
//     document.querySelector("#primary-navigation").style.color = " rgb(255, 255, 255)";
//   }
// });

// hamburger menu

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});
