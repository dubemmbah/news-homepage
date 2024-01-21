"use strict";

const btnMenu = document.querySelector(".mobile-menu");
const btnClose = document.querySelector(".menu-close");
const mobileMenu = document.querySelector(".menu");

btnMenu.addEventListener("click", () => {
  mobileMenu.classList.add("show");

  document.body.classList.add("menu-open");
  document.documentElement.classList.add("menu-open");
});

btnClose.addEventListener("click", () => {
  mobileMenu.classList.remove("show");

  document.body.classList.remove("menu-open");
  document.documentElement.remove("menu-open");
});
