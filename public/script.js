// let hoverImage = document.querySelector(".image-template");
const current = document.querySelector("#section-main");
const parent = current.parentNode;
let slideSpan = parent.querySelector("span");
let hoverImages = parent.querySelectorAll(".image-template");

hoverImages.forEach((hoverImage) => {
  hoverImage.addEventListener("mouseover", showCategories);
  hoverImage.addEventListener("mouseout", hideCategories);
});

function showCategories() {
  // console.log(this); //this verwijst naar het element waarop wordt gemousovert
  console.log("PARENT", parent.querySelector("span"));
  slideSpan.classList.add("categories-shown");
  console.log(this);
}

function hideCategories() {
  slideSpan.classList.remove("categories-shown");
}
