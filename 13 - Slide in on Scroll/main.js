
// Helps us run a particular function every 20 seconds
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// Selects all the images
const sliderImages = document.querySelectorAll('.slide-in');

// Function runs whenever the user scrolls
// Takes in the event as a parameter
function checkSlide(e) {
  sliderImages.forEach(sliderImage => {
    // Calculates whether or not the user is on the page

    // Tells us the position of the half image
    const slideInAt = (window.scrollY + window.innerHeight) - (sliderImage .height / 2);

    // offsetTop tells us how far it is from the top window
    // imageBottom tells us the position of the bottom image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const notScrolledPastImg = window.scrollY < imageBottom;

    // If half of the image is shown, fade in
    if(isHalfShown && notScrolledPastImg) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }

  });
};

window.addEventListener('scroll', debounce(checkSlide));
