// CATEGORY SLIDER
const [leftArrowButton, rightArrowButton] = [
  document.getElementById("category-slide-left"),
  document.getElementById("category-slide-right"),
];

const categoriesContainer = document.querySelector(".category-slide");

leftArrowButton.addEventListener("click", () => {
  categoriesContainer.scrollLeft -= 300;
});

rightArrowButton.addEventListener("click", () => {
  categoriesContainer.scrollLeft += 300;
});
