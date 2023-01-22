function pularLinha(){
    document.write('<br>')
    document.write('<br>')

}
function mostrar(frase){
    document.write(frase)
    pularLinha()

}

function calcularImc(peso, altura){
    return peso / (altura*altura)
 
   
}
let imcFlavio = calcularImc(60,1.80)
let imcRoberta = calcularImc(55,1.65)
let total  = imcFlavio + imcRoberta
  
mostrar(imcFlavio)
 
mostrar(imcRoberta)

mostrar(total)

