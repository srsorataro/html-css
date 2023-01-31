let input = document.querySelector('input')
let segredo = Math.round( Math.random()*10)
let botao = document.querySelector('button')
input.focus()
console.log(segredo)
function verifica(){
    if(input.value == segredo){
        alert('Se deu bem👍')
    }else{
        alert("Errou😢")
    }
    input.value = ""
    input.focus()


}
botao.addEventListener('click',()=>{
    verifica()
})
    




