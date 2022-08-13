const hamb  =document.querySelector('.hamburgue')
const Menu1  =document.querySelector('.menu')
hamb.addEventListener('click', () =>{
    hamb.classList.toggle('active')
    Menu1.classList.toggle('active')
})

