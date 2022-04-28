const menuBtn = document.querySelector(".nav__burger");
const navigation = document.querySelector(".nav");
const navMenu = document.querySelector(".nav__menu");
const navLinks = document.querySelector(".nav__links");
const navBtnBts = document.querySelector(".nav_button_btc");
const navBtnDollar = document.querySelector(".nav_button_dollar");
const bodyLock = document.querySelector("body");

menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  menuBtn.classList.toggle("is-active");
  navigation.classList.toggle("is-active");
  navMenu.classList.toggle("is-active");
  navLinks.classList.toggle("is-active");
  navBtnBts.classList.toggle("is-active");
  navBtnDollar.classList.toggle("is-active");
  bodyLock.classList.toggle("locked");
});
