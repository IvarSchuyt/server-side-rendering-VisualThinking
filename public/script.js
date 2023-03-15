let hoverImage = document.querySelector(".image-template");
let slideSpan = document.querySelector("span");

hoverImage.addEventListener("mouseover", showCategories);
hoverImage.addEventListener("mouseout", hideCategories);

function showCategories() {
  slideSpan.classList.add("categories-shown");
  // console.log(this); //this verwijst naar het element waarop wordt gemousovert
  console.log("PARENT", parent.querySelector("span"));
}

function hideCategories() {
  slideSpan.classList.remove("categories-shown");
}
