//MDN
// o evento DOMContentLoanded é acionado quando o documento HTML inicial foi completamente carregado e analisado, sem esperar que as folhas de estilo, imagens, oe subquadros terminem de carregar.
//o evento load é acionado quando a página inteira é carregada, incluindo todos os recursos dependentes, como folhas de estilo e imagens.


const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", function () {
  if (!btn.classList.contains("active")) {
    btn.classList.add("active");
    video.pause()
    
  } else {
    btn.classList.remove("active");
    video.play()
    
   
  }
});

//pre-carregamento
const preloader = document.querySelector('.preloader')
window.addEventListener('load',function(){
    preloader.classList.add('hide-preloader')
})