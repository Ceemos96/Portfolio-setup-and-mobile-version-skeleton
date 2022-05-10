const bars = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('#close-menu');
const links = document.querySelector('#menu-items');

bars.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
  document.body.style.overflowY = "hidden";
});

closeMenu.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
  document.body.style.overflowY = "scroll";
});

links.addEventListener('click', ()=>{
    document.body.style.overflowY = "scroll";
})
