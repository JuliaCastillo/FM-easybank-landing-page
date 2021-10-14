const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const body = document.querySelector("body");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    //close
    header.classList.remove("open");
    body.classList.remove("noscroll");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    //open
    header.classList.add("open");
    body.classList.add("noscroll");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});
