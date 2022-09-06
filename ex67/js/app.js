const  menu  = document.querySelector(".nav-toggle")
const  links = document.querySelector(".links-container")
const  cont = document.querySelector(".container")



menu.addEventListener('click',()=>{
    menu.classList.toggle('active')
    links.classList.toggle('active')
    cont.classList.toggle('active')
   
})