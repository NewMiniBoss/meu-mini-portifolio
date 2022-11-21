const menu = document.querySelector('[data-menu]');
const menuItens = document.querySelector('[data-menu="items"]');
const iconeMenu = document.querySelector('[data-menu="button"]');

menu.addEventListener('click', () => {
    menuItens.classList.toggle('menu__active');
    iconeMenu.classList.toggle('menu__active-icon');
})

