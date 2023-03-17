let hoverImages = document.querySelectorAll(".image-template");

hoverImages.forEach((hoverImage) => {
  hoverImage.addEventListener("mouseover", function () {
    // console.log(this); //this verwijst naar het element waarop wordt gemousovert
    const parent = hoverImage.parentNode;
    let slideSpan = parent.querySelector("span");
    slideSpan.classList.add("categories-shown");
  });
  hoverImage.addEventListener("mouseout", hideCategories);
});

function hideCategories() {
  const parent = this.parentNode;
  let slideSpan = parent.querySelector("span");
  slideSpan.classList.remove("categories-shown");
}
