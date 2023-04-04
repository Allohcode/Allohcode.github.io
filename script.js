const banner = document.querySelector(".profile-info");

const sections = document.querySelectorAll(".section");

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
