let hoverImages = document.querySelectorAll(".image-template");

hoverImages.forEach((hoverImage) => {
  hoverImage.addEventListener("mouseover", function () {
    const parent = hoverImage.parentNode;
    let slideSpan = parent.querySelector("span");
    slideSpan.classList.add("categories-shown");
  });
  hoverImage.addEventListener("mouseout", function () {
    const parent = hoverImage.parentNode;
    let slideSpan = parent.querySelector("span");
    slideSpan.classList.remove("categories-shown");
  });
});
