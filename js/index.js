const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('is-open');
    burger.classList.toggle('is-active'); // Добавляем класс is-active бургеру
});