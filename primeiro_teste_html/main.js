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

let nome = prompt("Qual  é o seu nome?: ")
let  alturaIformado = prompt("Informe a sua altura")
let pesoInformado = prompt("Informe o seu  Peso")
let resp = calcularImc(pesoInformado, alturaIformado)


document.write(nome + "O valor informado do seu imc   é " + resp)

