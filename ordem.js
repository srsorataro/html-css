const livros =require('./filtrar')
function mergeSort(array){
    if(array.length > 1 ){
        const meio = Math.floor(array.length / 2)
        const p1 = mergeSort(array.slice(0,meio)) 
        const p2 =  mergeSort(array.slice(meio,array.length)) 
        array  =ordena(p1,p2)

    }
    return array
}
function ordena(p1,p2){
    let posicaoAltualP1 = 0
    let posicaoAltualP2 = 0
    const resultado = []
    while (posicaoAltualP1 < p1.length &&  posicaoAltualP2 < p2.length)

}

console.log(mergeSort( livros))