
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
console.log(encontraMenores(lista[4], lista))