const subtrair = document.querySelector('#subtrair') 
const somar = document.querySelector('#somar')
const braco = document.querySelector('#braco') 
somar.addEventListener('click', () =>{   
    manipulaDados('somar')
})
subtrair.addEventListener('click', () =>{   
    manipulaDados('subtrair')
})


function manipulaDados(operacao){
    if(operacao === 'subtrair'  ){
            braco.value--
        }else{
            braco.value++
        }
        
    
    
}

