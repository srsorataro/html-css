
const lista = require('./filtrar')
function encontraMenores(pivo,array){
    let menores = 0
    for(let  i = 0; i < array.length; i++){
        let produtoAtual = array[i]
        if(produtoAtual.preco < pivo.preco){
            menores++
        }
    }

trocarDelugasr(array,array.indexOf(pivo),menores)
return array

 
}
function trocarDelugasr(array,de,para){
    const elem1 = array[de]
    const elemt2 = array[para]
    array[para] = elem1 
    array[de] = elemt2
}
function divideNoPivo(array){
    let pivo = array[Math.floor( array.length / 2)]
    encontraMenores(pivo,array)
    let valoresMenores = 0
    for(let i = 0; i < array.length; i++){
        let atual = array[i]
        if(atual.preco <= pivo.preco && atual !== pivo){
            trocarDelugasr(array,i,valoresMenores )
            valoresMenores++
        }
    }
    return array
   
}
module.exports = trocarDelugasr