const menu = document.querySelector('[data-menu]');
const menuItens = document.querySelector('[data-menu="items"]');

menu.addEventListener('click', () => {
    menuItens.classList.toggle('menu--active');
})