const mediaqueries = window.matchMedia("(max-width:768px)");
const mybody = document.querySelector(".mybody");
const harmburgerIcon = document.getElementById("hamburger");
const closeIcon = document.getElementById("close");
const nav = document.querySelector(".nav_container");
const navLink = document.querySelector(".nav__navlink");
const BrandIcon = document.querySelector(".navBrand_icons");
const NavButton = document.getElementById("nav_btn");
let links = document.querySelectorAll(".link");

if (mediaqueries.matches) {
  harmburgerIcon.addEventListener("click", () => {
    //   nav.style.backgroundColor = "hsla(229, 31%, 21%,0.9)";
    mybody.style.backgroundColor = "hsla(229, 31%, 21%,0.9)";
    nav.style.flexDirection = "column";
    nav.style.textAlign = "center";
    nav.style.justifyContent = "flex-start";
    nav.style.marginTop = "0";
    nav.style.color = "white";
    //   nav.style.width = "100%";
    //   nav.style.height = "100vh";

    BrandIcon.style.margin = "1.5rem";
    navLink.style.display = "flex";
    navLink.style.flexDirection = "column";
    navLink.style.alignItems = "column";
    navLink.style.fontSize = "2rem";
    navLink.style.textAlign = "center";
    navLink.style.color = "white";

    links.forEach((link) => {
      link.style.margin = "2rem";
      link.style.borderTop = "1px solid hsl(229, 8%, 60%)";
    });

    NavButton.style.backgroundColor = "transparent";
    NavButton.style.width = "95%";
    NavButton.style.border = "1px solid white";
    NavButton.style.borderTop = "1px solid hsl(229, 8%, 60%)";
    closeIcon.style.display = "block";
    harmburgerIcon.style.display = "none";
  });
  closeIcon.addEventListener("click", () => {
    mybody.style.backgroundColor = "";
    nav.style.flexDirection = "";
    nav.style.justifyContent = "";
    nav.style.color = "";
    nav.style.width = "";
    nav.style.height = "";
    navLink.style.display = "";
    navLink.style.flexDirection = "";
    navLink.style.alignItems = "";
    harmburgerIcon.style.display = "block";
    closeIcon.style.display = "none";
  });
}

// bookmark,search add share
const bookmarkLink = document.getElementById("bookmarklink");
const searchLink = document.getElementById("searchlink");
const shareLink = document.getElementById("sharelink");
const bookmark = document.getElementById("bookmark");
const search = document.getElementById("search");
const share = document.getElementById("share");

searchLink.addEventListener("click", () => {
  search.classList.add("linkdisplay");
  bookmark.style.display = "none";
  share.style.display = "none";
});
shareLink.addEventListener("click", () => {
  share.classList.add("linkdisplay");
  search.style.display = "none";
  bookmark.style.display = "none";
});

bookmarkLink.addEventListener("click", () => {
  bookmark.style.display = "grid";
  share.style.display = "none";
  search.style.display = "none";
});

// faq accordion
const questions = document.querySelectorAll(".quiz");
questions.forEach((question) => {
  question.addEventListener("click", () => {
    question.classList.toggle("active");
  });
});

// email validation
let form = document.querySelector(".myform");
function handleSubmit(e) {
  let email = document.getElementById("email");
  let emailValue = email.value;
  let error_message = document.querySelector(".error_message");

  if (emailValue === "" || !emailValue.includes("@")) {
    e.preventDefault();
    error_message.textContent = "email is required";
    email.style.border = "2px solid hsl(0, 94%, 66%)";
  } else {
    form.submit();
  }
}
form.addEventListener("submit", handleSubmit);
