const  livros = require('./filtrar')
const troca = require('./menores')

function suave(array,esquerda,direita){
    if(array.length  > 1 ){
        let indiceAtual  = particiona(array, esquerda, direita)
        if( esquerda  < indiceAtual - 1){
            suave(array,esquerda, indiceAtual -1)
        }
        if(indiceAtual < direita){
            suave(array,indiceAtual,direita)
        }
        return array
    }
    function particiona(array,equerda,direita){
        console.log('array',array)
        console.log('equerda,direita',esquerda,direita)
         let pivo = array[Math.floor((esquerda +direita)/ 2)]
    }
    let atualEsquerda = esquerda //0
    let atualDireita = direita  //10
    while(atualEsquerda <= atualDireita){
        while(array[atualEsquerda].preco < pivo.preco){
             atualEsquerda++

        }
        while(array[atualDireita].preco >  pivo.preco){
            atualDireita--

        }
        if(atualEsquerda <=  atualDireita){
            troca(array,atualEsquerda,atualDireita)
            atualEsquerda++
            atualDireita--

        }
    }
}
console.log(suave(livros, 0, livros.length - 1))