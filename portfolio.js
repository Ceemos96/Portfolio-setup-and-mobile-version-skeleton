const bars = document.querySelector('.nav-link');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('#close-menu');

bars.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
});

closeMenu.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
});
