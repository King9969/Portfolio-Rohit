let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
navbar.onclick = () => {
  navbar.classList.toggle("active");

};
menu.onclick = () => {
  navbar.classList.toggle("active");

};
const carouselItems = document.querySelectorAll('.carousel-item');
let currentItem = 0;
const intervalTime = 2000;

function nextItem() {
  carouselItems[currentItem].classList.remove('active');
  currentItem = (currentItem + 1) % carouselItems.length;
  carouselItems[currentItem].classList.add('active');
}

setInterval(nextItem, intervalTime);
var goToTopBtn = document.getElementById("tp");

goToTopBtn.addEventListener("click", function() {

  window.scrollTo(0, 0);
});