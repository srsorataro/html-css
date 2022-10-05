const menu = document.querySelector(".botao");
const navmenu = document.querySelector(".nav");
const header = document.querySelector(".cabeca");

menu.addEventListener('click', () =>{
    menu.classList.toggle('active');
    navmenu.classList.toggle('active');
    header.classList.toggle('active');
})