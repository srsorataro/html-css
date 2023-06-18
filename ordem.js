const livros =require('./filtrar')
function mergeSort(array){
    if(array.length > 1 ){
        const meio = Math.floor(array.length / 2)
        const p1 = array.slice(0,meio)
        const p2 = array.slice(meio,array.length)

    }
    return array
}
console.log(mergeSort( livros))