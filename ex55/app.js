const btnMobile = document.querySelector('btn-menu')
function toggleMenu(){
    const nav = document.querySelector('nav1')
    nav.classList.toggle('active')
}
btnMobile.addEventListener('click',toggleMenu)