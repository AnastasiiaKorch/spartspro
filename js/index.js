const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const body = document.body;

burger.addEventListener('click', () => {
    nav.classList.toggle('is-open');
    burger.classList.toggle('is-active');
    body.classList.toggle('no-scroll');
});

