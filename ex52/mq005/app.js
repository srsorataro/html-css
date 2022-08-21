const btnMenu = document.querySelector('.btn-menu');
const ulMenu= document.querySelector('.ul');



btnMenu.addEventListener('click', () =>{
    btnMenu.classList.toggle('active')
    ulMenu.classList.toggle('active')
})