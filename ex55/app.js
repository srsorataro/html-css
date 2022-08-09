window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  })
  const hamburgue =document.querySelector('.burgue')
  const navmenu = document.querySelector('nav')

  hamburgue.addEventListener("click", () =>{
    hamburgue.classList.toggle("active")
    navmenu.classList.toggle("active")
  })