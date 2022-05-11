const bars = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('#close-menu');
const navLinks = document.querySelectorAll('ul > li.nav-link');

// open menu when nav toggler is clicked and disabe vertical scroll
bars.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
  document.body.style.overflowY = 'hidden';
});

// close menu when the close icon is clicked and allow vertical scroll
closeMenu.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
  document.body.style.overflowY = 'scroll';
});

// close the menu when item is clicked and allow vertical scroll
for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', () => {
    menu.classList.toggle('show-menu');
    document.body.style.overflowY = 'scroll';
  });
}
