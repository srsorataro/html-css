//Element.getBoundClientReact() method return the side oof an  element and ists position relativve to the viewport.
//pageYOffset is a read - only window property that return the number of pixels the document has been scrolled vertically.
//slice  extracts a section of a string without modifying original string
//offfsettop - A Number, representing the  top position  of the element, in pixels

//*************set date */
// select span
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
//*********close links */
const btn  = document.querySelector('.nav-toggle');
const linksContainer= document.querySelector('.links-container');
const links = document.querySelector('.links');
const menu = document.querySelector('.menu')




btn.addEventListener('click', function (){
   linksContainer.classList.toggle('show-links');
   menu.classList.toggle('active');
   window.addEventListener('scroll', function (){
    const  scrollHeight  = window.pageYOffset;
   
   if(scrollHeight >= 1000 ){
    console.log("helo");
    linksContainer.classList.add('show-links');
    menu.classList.add('active');
}else{
    linksContainer.classList.remove("show-links");
    menu.classList.remove('active');
}
   })
  
    const linksHeight = links.getBoundingClientRect().height;
    const  containerHeight = linksContainer.getBoundingClientRect().height;
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    } else{
        linksContainer.style.height = 0;
    }
   
  //console.log(linksContainer.getBoundingClientRect())  
  

});
//******fixed navbar******/
const navbar = document.getElementById('nav');
const topLinks = document.querySelector('.top-link');
window.addEventListener('scroll', function (){
    const  scrollHeight  = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight >  navHeight){
        navbar.classList.add('fixed-nav')

    }
    else{
        navbar.classList.remove('fixed-nav')
    }
    //setup back to top link


  
    
});
//select links

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav')
    let position = element.offsetTop - navHeight;
    if(!fixedNav){
        position  = position - navHeight;
    }
    if(navHeight > 82){
        position = position + containerHeight;
    }

    
   window.scrollTo({
    left:0,
    top:position,
   });
   //close
   linksContainer.style.height = 0;
  });
});
//clculete heights