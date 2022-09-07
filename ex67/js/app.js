//Element.getBoundClientReact() method return the side oof an  element and ists position relativve to the viewport.
//pageYOffset is a read - only window property that return the number of pixels the document has been scrolled vertically.
//slice  extracts a section of a string without modifying original string
//offfsettop - A Number, representing the  top position  of the element, in pixels



const  menu  = document.querySelector(".nav-toggle")
const  links = document.querySelector(".links-container")
const  cont = document.querySelector(".container")
const  nav = document.querySelector(".nav-center")



menu.addEventListener('click',()=>{
    //menu.classList.toggle('active')
    //links.classList.toggle('active')
    //cont.classList.toggle('active')
   // nav.classList.toggle('active')
   const containerHeight = nav.getBoundingClientRect()
   console.log(containerHeight)
  
})

//****************set date************
const date = document.getElementById("date")
date.innerHTML = new Date().getFullYear()
//***********fixed navbar */
//****************smooth scroll */
// select links*/