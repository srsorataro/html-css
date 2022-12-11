
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}



const controle  = document.querySelectorAll('.controle-ajuste')




controle.forEach((elemento) =>{
    elemento.addEventListener('click',(evento)=>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaDados(evento.target.dataset.peca,evento.target.dataset.controle)
       
      
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
function atualizaDados(peca,operecao){
    

    const estatiticas  = document.querySelectorAll('[data-estatiticas]')
    
    estatiticas.forEach((elemento)=>{
        if(operecao === '+'){  
            ( elemento.textContent  = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatiticas])


        }else if(operecao === '-'){
            ( elemento.textContent  = parseInt(elemento.textContent) -  pecas[peca][elemento.dataset.estatiticas])

        }
        
         
        
   
    })
}

