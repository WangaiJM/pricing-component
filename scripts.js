const btnToggler = document.querySelector(".btn-toggle");
const toggler = document.querySelector(".toggler");
const prizeSwitch = document.querySelector(".card__container");

toggler.addEventListener("click", () => {
  btnToggler.classList.toggle("active");
  prizeSwitch.classList.toggle("active");
});
