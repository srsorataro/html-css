const btnToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const navC = document.querySelector('.nav-center');
const soI = document.querySelector('.social-icons');





btnToggle.addEventListener('click', () =>{
    btnToggle.classList.toggle('active')
    links.classList.toggle('active')
    navC.classList.toggle('active')
    soI.classList.toggle('active')
    
    
})