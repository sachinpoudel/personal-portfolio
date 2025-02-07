// 
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle classes on menu click
menu.onclick = () => {
    menu.classList.toggle('fa-bars'); // Removes/Restores the hamburger icon
    menu.classList.toggle('fa-xmark');
    menu.classList.add('fa-bars'); // Adds/Removes the close (X) icon
    navbar.classList.toggle('active'); // Toggles navbar visibility
};

// Remove classes on scroll
// window.onscroll = () => {
//   menu.classList.remove('bx-x');
//   navbar.classList.remove('active');
// };
// Swipe functionalityc
let touchStartX = 0;
let touchEndX = 0;
const swipeThreshold = 50; // Minimum distance for a swipe


// Detect swipe gestures
document.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeDistance = touchEndX - touchStartX;
  if (swipeDistance > swipeThreshold) {
    // Swipe right to close the menu
    menu.classList.remove('fa-xmark');
    menu.classList.add('fa-bars'); // Removes/Restores the hamburger icon

    navbar.classList.remove('active');
  } else if (swipeDistance < -swipeThreshold) {
    // Swipe left to open the menu
    menu.classList.add('fa-xmark');
    navbar.classList.add('active');
  }
}
 
// function handleSwipe() {
//   const swipeDistance = touchEndX - touchStartX;
//   if (swipeDistance > swipeThreshold) {
//     // Swipe right to close the menu
//     menu.classList.remove('bx-x');
//     navbar.classList.remove('active');
//   } else if (swipeDistance < -swipeThreshold) {
//     // Swipe left to open the menu
//     menu.classList.add('bx-x');
//     navbar.classList.add('active');
//   }
// }
