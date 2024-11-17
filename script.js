const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function changeSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  changeSlide(currentIndex);
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    changeSlide(currentIndex);
  });
});

setInterval(nextSlide, 5000); // Auto slide every 5 seconds
