var logo = document.querySelector('.container')
var menu = document.querySelector('.menu')
var menul = document.querySelector('.menulogo')


logo.addEventListener('click',() =>{
    menu.classList.toggle('showmenu')
    menul.classList.toggle('showmenu')
     logo.classList.toggle('showmenu')

})