let currentSlide = 0; // Start from the first card
const slides = document.querySelectorAll('.testimonial-card'); // Select all testimonial cards

const container = document.querySelector('.testimonial-container'); // Select the container of testimonial cards
const cardsPerSlide = 3; // Number of cards to show at a time

// Function to show a particular set of cards (slide) by index
function showSlide(index) {
  // Calculate the scroll position for the current set of cards
  const scrollPosition = slides[index].offsetLeft - container.offsetLeft;
  container.scrollTo({
    left: scrollPosition,
    behavior: 'smooth',
  });

}
/*
// Function to go to the next slide
function nextSlide() {
  currentSlide = (currentSlide + cardsPerSlide) % slides.length;
  showSlide(currentSlide);
}
/*
function nextSlide(){
  currentSlide = (currentSlide+1)% (slides.length / cardsPerSlide);
  showSlide(currentSlide);
}
*/
function nextSlide(){
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
// Automatically change slides every 3 seconds
setInterval(nextSlide, 2000);


// Show the first slide initially
showSlide(currentSlide);
