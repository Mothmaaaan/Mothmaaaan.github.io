var hamburger = document.querySelector('.hamburger-menu');
var nav = document.querySelector('.header-nav');

hamburger.addEventListener('click', function () {
  nav.classList.toggle('open');
});