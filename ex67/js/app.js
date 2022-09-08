//Element.getBoundClientReact() method return the side oof an  element and ists position relativve to the viewport.
//pageYOffset is a read - only window property that return the number of pixels the document has been scrolled vertically.
//slice  extracts a section of a string without modifying original string
//offfsettop - A Number, representing the  top position  of the element, in pixels


const btn = document.querySelector('.nav-toggle');
const linksContainer= document.querySelector('.links-container');
const center= document.querySelector('.nav-center');
const menu= document.querySelector('.menu');



btn.addEventListener('click', ()=>{
    linksContainer.classList.toggle('show-links')
    center.classList.toggle('active')
    menu.classList.toggle('active')

  
})
