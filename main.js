window.addEventListener("load", function () {
  setTimeout(function () {
      document.getElementById("loader").style.display = "none";
  }, 3000);
});


const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
  delay: 3000,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 2900,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 3000,
});
ScrollReveal().reveal(".header__content h3", {
  ...scrollRevealOption,
  delay: 3500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 4000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 4500,
});

ScrollReveal().reveal(".intro__image", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".intro__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".intro__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".intro__description", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".intro__grid", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".intro__content h4", {
  ...scrollRevealOption,
  delay: 2500,
});
ScrollReveal().reveal(".intro__flex div", {
  ...scrollRevealOption,
  delay: 3000,
  interval: 500,
});

ScrollReveal().reveal(".journey__grid > div > div", {
  ...scrollRevealOption,
  interval: 500,
});
