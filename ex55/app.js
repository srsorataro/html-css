const menu = document.getElementById('menu')
const nav = document.getElementById('nav')
const bg = document.getElementById('menu-bg')

menu.addEventListener('click', () =>{
    menu.classList.toggle('change')
    nav.classList.toggle('change')
    bg.classList.toggle('change')
})
