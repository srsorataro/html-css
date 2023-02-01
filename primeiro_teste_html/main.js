let input = document.querySelector('input')
let segredos = [10,5,4,12]
let botao = document.querySelector('button')
input.focus()
console.log(segredos)
function verifica(){
    achou = true
    for(let co  = 0; co < segredos.length; co ++){
        
        if(input.value == segredos[co]){
            alert('Se deu bem👍')
            achou = true
            break
        }
        if(achou == false){
            alert("Errou😢")
        }

    }
 
    input.value = ""
    input.focus()


}
botao.addEventListener('click',()=>{
    verifica()
})
    




