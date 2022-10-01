const botao = document.querySelector(".botao");
const nav = document.querySelector('.nav');
const cab = document.querySelector('.cabeca');
const pro = document.querySelector('.produtos');

botao.addEventListener('click', ()=>{
    botao.classList.toggle('active');
    nav.classList.toggle('active');
    cab.classList.toggle('active');
    pro.classList.toggle('active');
    
})