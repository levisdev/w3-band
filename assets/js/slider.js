const sliderList = document.querySelectorAll(".js-slider-item");
var currentSlide = Math.floor(Math.random() * 4);
showSlides();

function showSlides() {
  for (const slide of sliderList) {
    slide.style.display = "none";
  }
  currentSlide++;
  if (currentSlide > sliderList.length) {
    currentSlide = 1;
  }
  sliderList[currentSlide - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}
