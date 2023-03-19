const backButton = document.querySelector("#backToTop");
const header = document.querySelector("header");
const mobButton = document.querySelector(".mobile");
const nav = document.querySelector("nav ul");
const menuItems = document.querySelectorAll("nav ul li a");



window.onscroll = function () {
  scrollfunction();
  scrollfunctionHeader();
};

const scrollfunction = () => {
  if (
    document.body.scrollTop > 1200 ||
    document.documentElement.scrollTop > 1200
  ) {
    backButton.style.display = "block";
    // header.classList.add("bg");
  } else {
    backButton.style.display = "none";
    // header.classList.remove("bg");
  }
};

const scrollfunctionHeader = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    // backButton.style.display = "block";
    header.classList.add("bg");
  } else {
    // backButton.style.display = "none";
    header.classList.remove("bg");
  }
};



const getToTop = () => {
  document.body.scrollTop = 0; // for safari
  document.documentElement.scrollTop = 0; // for chrome, firefox, ....
};

const mobMenu = () => {
  for (const link of menuItems) {
    link.addEventListener("click", mobMenu);
  }
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
  } else {
    nav.classList.add("responsive");
  }
};



backButton.addEventListener("click", getToTop);
mobButton.addEventListener("click", mobMenu);


