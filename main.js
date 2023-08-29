// sticky menu transparency
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    document.querySelector(".nav").style.background = " rgba(0, 0, 0, 0.7)";
  } else {
    document.querySelector(".nav").style.background = " rgba(0, 0, 0, 0)";
  }
});
