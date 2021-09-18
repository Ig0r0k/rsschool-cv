const menu = document.querySelector('.nav-links');
const burger = document.querySelector('.hamburger');

burger.addEventListener('click', openMenu);
menu.addEventListener('click', closeMenu);

window.addEventListener('resize', () => {
  if (document.body.offsetWidth > 767) { closeMenu(); }
});

function openMenu() {
  menu.classList.toggle('opened');
  burger.classList.toggle('opened');
}

function closeMenu() {
  menu.classList.remove('opened');
  burger.classList.remove('opened');
}

