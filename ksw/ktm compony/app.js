// Get the button
const backToTopBtn = document.getElementById("backToTop");

// Show the button when scrolling down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Smooth scroll to top when button is clicked
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

let currentSlide = 0;

// Select elements
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

// Function to show the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1)  % totalSlides; // Loop back to the first slide
    updateSlider();
}

// Function to show the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Loop back to the last slide
    updateSlider();
}

// Function to update the slider's position
function updateSlider() {
    const slideWidth = document.querySelector('.slide').clientWidth;
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Adjust slider when window resizes
window.addEventListener('resize', updateSlider);

//for cleint page

document.querySelector('#Client')

//for client images

const scrollToClientLink = document.getElementById('Client');
    
    // Wait for the DOM to be fully loaded
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  const scrollToClientLink = document.getElementById('Client');

  // Event listener for the 'Client' link to scroll to the section
  if (scrollToClientLink) {
    scrollToClientLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior (navigation)

      const targetElement = document.querySelector('.forcleint');
      // Check if the target element exists before attempting to scroll
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn('Element .forcleint not found.');
      }
    });
  }

  // Check if the page is loaded with a hash in the URL
  if (window.location.hash === "#forcleint") {
    // If the page is loaded with the #forcleint hash, scroll to the section smoothly
    const targetElement = document.getElementById('forcleint');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn('Element .forcleint not found on page load.');
    }
  }
});
