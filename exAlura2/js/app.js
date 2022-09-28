const botao = document.querySelector(".botao");
const nav = document.querySelector('.nav');
const cab = document.querySelector('.cabeca');

botao.addEventListener('click', ()=>{
    botao.classList.toggle('active');
    nav.classList.toggle('active');
    cab.classList.toggle('active');
    
})