const menuButton = document.querySelector('.header__menu-button'),
      dropdownMenu = document.querySelector('.header__menu-dropdown');

menuButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('header__menu-dropdown_show');
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.header__menu-item')) {
    dropdownMenu.classList.remove('header__menu-dropdown_show');
  }
});

const burgerButton = document.querySelector('.header__burger-button'),
      header = document.querySelector('.header');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('active');
  header.classList.toggle('menu-opened');
});

document.querySelector('.year').textContent = new Date().getFullYear();