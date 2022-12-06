
const controle  = document.querySelectorAll('.controle-ajuste')

controle.forEach((elemento) =>{
    elemento.addEventListener('click',(evento)=>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
       
      
    })
   
})

function manipulaDados(operacao,controle){
    const peca = controle.querySelector('[data-contador]')
    
 
   
    if(operacao === '-' ){
            peca.value--
        
        }else{
            peca.value++
        }    
}

