const menuButton = document.querySelector('.menu-button');
const menuClose = document.querySelector('.menu-close');
const menu = document.querySelector('.nav-menu');

menuButton.addEventListener('click', () => {
  menu.classList.add('is-active');
  menuClose.classList.add('is-active');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('is-active');
  menuClose.classList.remove('is-active');
});
