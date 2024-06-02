let currentBackground = 1;
const backgrounds = ["bg1", "bg2", "bg3", "bg4"];
const contentDivs = document.querySelectorAll(".content");

setInterval(() => {
  document.body.classList.remove(backgrounds[currentBackground - 1]);
  contentDivs[currentBackground - 1].classList.add("hidden");
  currentBackground = (currentBackground % backgrounds.length) + 1;
  document.body.classList.add(backgrounds[currentBackground - 1]);
  contentDivs[currentBackground - 1].classList.remove("hidden");
}, 11000);

setTimeout(() => {
  document.querySelector(".bg1-content").classList.add("hidden");
}, 11000);
