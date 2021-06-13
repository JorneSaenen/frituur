import '../css/style.scss';

// mobile menu
const hamburger = document.querySelector('.nav .hamburger');
hamburger.onclick = () => hamburger.classList.toggle('active');

// navigation scroll behavoir
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.onclick = function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  };
});
