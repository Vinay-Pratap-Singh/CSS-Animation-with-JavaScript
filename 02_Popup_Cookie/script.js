const cookie_container = document.querySelector(".cookie_container");
const image = document.querySelector("img");
const cookie_container_right = document.querySelector(
  ".cookie_container_right"
);

// creating the iife for adding animation to the cookie container and its component
(() => {
  cookie_container.style.animation = "animateContainer 1s normal";
  cookie_container.addEventListener("animationend", () => {
    image.classList.add("animateTextFromLeft");
    cookie_container_right.style.animation = "animateTextFromRight 0.5s normal";

    //  removing the opcacity from image and right container to make them visible
    image.addEventListener("animationend", () => {
      image.style.opacity = "1";
      image.classList.remove("animateTextFromLeft");
      image.classList.add("bounceImg");
    });
    cookie_container_right.addEventListener("animationend", () => {
      cookie_container_right.style.opacity = "1";
    });
  });
})();

// image.style.animation = "bounceEffect 1.5s infinite";
