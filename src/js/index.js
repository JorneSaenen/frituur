import '../css/style.scss';

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
