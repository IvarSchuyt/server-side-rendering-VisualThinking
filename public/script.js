let hoverImages = document.querySelectorAll(".image-template");

hoverImages.forEach((hoverImage) => {
  hoverImage.addEventListener("mouseover", showCategories);
  hoverImage.addEventListener("mouseout", hideCategories);
});

function showCategories() {
  // console.log(this); //this verwijst naar het element waarop wordt gemousovert
  const parent = this.parentNode;
  let slideSpan = parent.querySelector("span");
  slideSpan.classList.add("categories-shown");
}

function hideCategories() {
  const parent = this.parentNode;
  let slideSpan = parent.querySelector("span");
  slideSpan.classList.remove("categories-shown");
}
