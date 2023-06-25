const livros =require('./filtrar')
function mergeSort(arr, nivelAninhamento = 0) {

    if (arr.length > 1) {
        const meio = Math.floor(arr.length / 2);
        const arrPt1 = mergeSort(arr.slice(0, meio), nivelAninhamento + 1);
        const arrPt2 = mergeSort(arr.slice(meio, arr.length), nivelAninhamento + 1);
        arr = ordena(arrPt1, arrPt2);
    }

    return arr;

}
   
   function ordena(parte1, parte2){
   
   let arrayOrganizado = [];
    let posicaoAtualParte1=0;
    let posicaoAtualParte2=0;
    //console.log("parte1 => "+parte1)
    //console.log("parte2 => "+parte2)
   
    while(posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length){
       let produtoAtualParte1 = parte1[posicaoAtualParte1];
       let produtoAtualParte2 = parte2[posicaoAtualParte2];
   
        if(produtoAtualParte1.preco < produtoAtualParte2.preco){
           arrayOrganizado.push(produtoAtualParte1)
           posicaoAtualParte1++
           console.log("parte1" +parte1)
           console.log("Array ordenado => ", arrayOrganizado)
       }else{
           arrayOrganizado.push(produtoAtualParte2)
           posicaoAtualParte2++
           console.log("parte2" +parte2)
           console.log("Array ordenado => ", arrayOrganizado)
       }
       }
       console.log("sai do while ")
       arrayOrganizado.concat(posicaoAtualParte1 < parte1.length 
           ? parte1.slice(posicaoAtualParte1)
           : parte2.slice(posicaoAtualParte2));
   }

console.log(mergeSort( livros))