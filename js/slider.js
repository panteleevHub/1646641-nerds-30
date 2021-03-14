const sliderContainer = document.querySelector(".slider-container");
const sliderButtons = sliderContainer.querySelector(".slider-buttons");
const sliderItems = sliderContainer.querySelectorAll(".slider-item");

const sliderButtonClickHandler = ((evt) => {
  evt.preventDefault();
  const {target} = evt;
  if (target.tagName !== "BUTTON") {
    return;
  }
  if (target.classList.contains("active-button")) {
    target.blur();
    return;
  }
  const activeButton = sliderButtons.querySelector(".active-button");
  activeButton.classList.remove("active-button");
  const activeSlide = sliderContainer.querySelector(".slider-item-active");
  activeSlide.classList.remove("slider-item-active");

  sliderItems.forEach((item) => {

    if (item.className.includes(target.id)) {
      item.classList.add("slider-item-active");
      target.classList.add("active-button");
      target.blur();
    }
  });
});
sliderButtons.addEventListener("click", sliderButtonClickHandler);
