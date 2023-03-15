let hoverImage = document.querySelector(".template");
let slideSpan = document.querySelector("span");

hoverImage.addEventListener("mouseover", showCategories);
hoverImage.addEventListener("mouseout", hideCategories);

function showCategories() {
  slideSpan.classList.add("categories-shown");  
  console.log(this);
}

function hideCategories() {
  slideSpan.classList.remove("categories-shown");
}
