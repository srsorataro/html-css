const menuBtn = document.querySelector('.btn-menu')
const menu = document.querySelector('.menu')
const  nav = document.querySelector('.nav')
const hed = document.querySelector('.hed')
const logo = document.querySelector('.logo')




menuBtn.addEventListener('click', () =>{
    menuBtn.classList.toggle('active')
    menu.classList.toggle('active')
    nav.classList.toggle('active')
    hed.classList.toggle('active')
    logo.classList.toggle('active')
    
})

