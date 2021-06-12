import '../css/style.scss';

const home = document.querySelector('.nav__item:first-of-type a');
const top = document.querySelector('.to-top');
const sectionOne = document.querySelector('.section-one');

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

const topFunction = () => {
  sectionOne.scrollIntoView({
    behavior: 'smooth',
    alignTo: false,
    block: 'end',
  });
};

home.onclick = () => topFunction();
top.onclick = () => topFunction();
