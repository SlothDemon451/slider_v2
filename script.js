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

function previousSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  changeSlide(currentIndex);
}

// Touch event variables
let startX = 0;
let endX = 0;

// Touch start event
function touchStart(event) {
  startX = event.touches[0].clientX; // Get the starting touch position
}

// Touch end event
function touchEnd(event) {
  endX = event.changedTouches[0].clientX; // Get the ending touch position
  handleSwipe(); // Call the swipe handler
}

// Handle swipe direction
function handleSwipe() {
  if (startX > endX + 50) {
    // Swipe left
    nextSlide();
  } else if (startX < endX - 50) {
    // Swipe right
    previousSlide();
  }
}

// Add touch event listeners
const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('touchstart', touchStart);
sliderContainer.addEventListener('touchend', touchEnd);

// Start the interval for auto slide
setInterval(nextSlide, 5000); // Auto slide every 5 seconds

// Optional: Add click event to dots for navigation
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    changeSlide(currentIndex);
  });
});

// Add event listeners for navigation buttons
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

prevButton.addEventListener('click', previousSlide);
nextButton.addEventListener('click', nextSlide);
