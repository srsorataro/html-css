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
console.log(mergeSort( livros))