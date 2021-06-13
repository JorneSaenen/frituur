import '../css/style.scss';

// intro logo
const topLogo = document.querySelector('.intro__img--one');
const middleLogo = document.querySelector('.intro__img--two');
const bottomLogo = document.querySelector('.intro__img--three');
const loader = document.querySelector('.intro .loader');
window.onload = () => {
  loader.style.display = 'none';
  middleLogo.style.opacity = '1';
  setTimeout(() => (topLogo.style.opacity = '1'), 1000);
  setTimeout(() => (bottomLogo.style.opacity = '1'), 2000);
};

// mobile menu
const hamburger = document.querySelector('.nav .hamburger');
const mobileMenu = document.querySelector('.mobile');
hamburger.onclick = () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('mobile--active');
};

// navigation scroll behavoir
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.onclick = function (e) {
    e.preventDefault();
    if (mobileMenu.classList.contains('mobile--active')) {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('mobile--active');
    }
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  };
});
