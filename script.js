//vataibles decleartion
const banner = document.querySelector(".profile-info");
const allPprojects = document.querySelectorAll(".allprojects");
const sections = document.querySelectorAll(".section");
const sectionsCenter = document.querySelectorAll(".section-center");
const bars = document.querySelector(".bars");
const nav = document.querySelector(".nav-links");
const navAll = document.querySelectorAll(".nav-links li");
// const about = document.querySelector(".about-sec");
// const skill = document.querySelector(".skill-sec");
let click = true;
// click on nav
console.log(navAll);

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
  bars.classList.add("bar-x-rot");

  if (bars && click === true) {
    click = false;
    bar.style.display = "none";
    cancle.style.display = "block";
    bar.classList.add("bars-rot");
  } else {
    click = true;
    bar.style.display = "block";
    cancle.style.display = "none";
    cancle.classList.add("bar-x-rot");
  }
});

// scrollto
// navAll.forEach((nav) => {
//   nav.addEventListener("click", () => {
//     about.scrollIntoView({ behavior: "smooth" });
//     skill.scrollIntoView({ behavior: "smooth" });
//   });
// });

var form = document.getElementById("submitform");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);
