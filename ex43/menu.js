const menuToggle = document.querySelector('.toggle')
const menuNavegation = document.querySelector('.navegation')
menuToggle.onclick = function(){
    menuToggle.classList.toggle('active')
   menuNavegation.classList.toggle('active')
}