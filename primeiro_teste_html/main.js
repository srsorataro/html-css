function pularLinha(){
    document.write('<br>')
    document.write('<br>')

}
function mostrar(frase){
    document.write(frase)
    pularLinha()
   

}
let  numeropP  = Math.round(Math.random() * 10)
 let tentantivas = 1
while(tentantivas <= 10){
    let chute = parseInt(prompt('Digite seu chute:'))
    if(chute == numeropP){
        mostrar("Acertou!")
        break
    }else{
        mostrar("Você errou, onúmero pensado foi" + numeropP)
    }

tentantivas++
}
mostrar('Fim')