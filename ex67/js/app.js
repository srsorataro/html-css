//Element.getBoundClientReact() method return the side oof an  element and ists position relativve to the viewport.
//pageYOffset is a read - only window property that return the number of pixels the document has been scrolled vertically.
//slice  extracts a section of a string without modifying original string
//offfsettop - A Number, representing the  top position  of the element, in pixels


const btn = document.querySelector('.nav-toggle');
const linksContainer= document.querySelector('.links-container');
const center= document.querySelector('.nav-center');
const menu= document.querySelector('.menu');
const links= document.querySelector('.links');

const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();


btn.addEventListener('click', ()=>{
   //linksContainer.classList.toggle('show-links')
   //center.classList.toggle('active')
    //menu.classList.toggle('active')
    const linksHeight = links.getBoundingClientRect().height
    const  containerHeight = linksContainer.getBoundingClientRect().height;
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`
    }
    else{
        linksContainer.style.height = 0
    }
   
    
  

})
const navbar = document.getElementById('nav')
const topLinks = document.querySelector('.top-link')
window.addEventListener('scroll',()=>{
    const  scrollHeight  = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight >  navHeight){
        navbar.classList.add('fixed-nav')

    }
    else{
        navbar.classList.remove('fixed-nav')
    }

    if(scrollHeight > 500){
        topLinks.classList.remove('show-links')
    }
  
    
})

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    
    const element = document.getElementById('id');
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height
    const fixedNav = navbar.classList.contains('fixed-nav')
    let position = element.offsetTop - navHeight;

    console.log(position);
   window.scrollTo({
    left:0,
    top:position,
   });
   linksContainer.style.height = 0;
  });
});