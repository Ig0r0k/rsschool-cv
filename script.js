const menu = document.querySelector('.nav-links');
const burger = document.querySelector('.hamburger');
const ytube = document.getElementById('ytube');

burger.addEventListener('click', openMenu);
menu.addEventListener('click', closeMenu);

window.addEventListener('resize', () => {
  if (document.body.offsetWidth > 767) { closeMenu(); };
  changeSizeVideo();
});

function openMenu() {
  menu.classList.toggle('opened');
  burger.classList.toggle('opened');
}

function closeMenu() {
  menu.classList.remove('opened');
  burger.classList.remove('opened');
}

function changeSizeVideo() {
  ytube.setAttribute('width', `${document.body.offsetWidth - 30}`);
  ytube.setAttribute('height', `${Math.floor((document.body.offsetWidth - 30) / 1.777)}`);
}

changeSizeVideo();