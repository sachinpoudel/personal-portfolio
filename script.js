let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
   // back function code
// const hamburger = document.getElementById('hamburger');
// const menu = document.getElementById('menu');

// let isMenuOpen = false; // Track the menu state

// Open and Close Menu
// menu.addEventListener('click', () => {
//     if (isMenuOpen) {
//         closeMenu();
//     } else {
//         openMenu();
//     }
// });

// // Open Menu Function
// function openMenu() {
//     navbar.style.display = 'flex';
//     isMenuOpen = true;

//     // Push a new state to history
//     history.pushState({ menuOpen: true }, null, '');
// }

// // Close Menu Function
// function closeMenu() {
//     navbar.style.display = 'none';
//     isMenuOpen = false;

//     // Go back in history
//     if (window.history.state && window.history.state.menuOpen) {
//         history.back();
//     }
// }

// // Listen for the back button (popstate event)
// window.addEventListener('popstate', (event) => {
//     if (isMenuOpen && (!event.state || !event.state.menuOpen)) {
//         closeMenu();
//     }
// });