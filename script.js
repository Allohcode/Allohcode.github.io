//vataibles decleartion
const banner = document.querySelector(".profile-info");
const allPprojects = document.querySelectorAll(".allprojects");
const sections = document.querySelectorAll(".section");
const bars = document.querySelector(".bars");
const nav = document.querySelector(".nav-links");
let click = true;
// click on nav

//functions
const observer = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      entry.target.classList.toggle("section-show", entry.isIntersecting);
    },
    {
      root: null,
      // rootMargin: "-100px",
      threshold: 1,
    }
  );
});

sections.forEach((sec) => {
  observer.observe(sec);
});

// window.addEventListener("load", () => {
//   setTimeout(() => {
//     banner.classList.add("show-banner");
//     // banner.style.transition = "0.4s";
//   }, 1000);
// });
// console.log("melas");

bars.addEventListener("click", () => {
  let cancle = document.querySelector(".fa-times");
  let bar = document.querySelector(".bars .fa-bars");

  nav.classList.toggle("show-nav");
  bars.classList.add("bars-rot");

  if (bars && click === true) {
    click = false;
    bar.style.display = "none";
    cancle.style.display = "block";
    bar.classList.add("bars-rot");
  } else {
    click = true;
    bar.style.display = "block";
    cancle.style.display = "none";
    cancle.classList.add("bars-rot");
  }
});
