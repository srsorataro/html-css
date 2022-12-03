const subtrair = document.querySelector('#subtrair') 
const somar = document.querySelector('#somar')
const braco = document.querySelector('#braco') 
somar.addEventListener('click', (envento) =>{
    braco.value++
})

subtrair.addEventListener("click", (evento) => {
    if(braco.value > 0){
        braco.value--
    }else{
        alert('Não pode ser  negativo ')
    }
   
})
function manipulaDados(operacao){
    if(operacao === "subtrair")
}

