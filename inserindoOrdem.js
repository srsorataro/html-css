const livros =  require("./filtrar")
function isecaoordem(lista){
    for(let i = 0; i < lista.length; i++){
        let analise = i 
        while( analise > 0 &&  lista[i].preco < lista[analise - 1].preco){
            let itemanalise = lista[analise]
            let itemAnterior = lista[analise - 1]
            lista[i] = itemAnterior
            lista[analise - 1] = itemanalise

            analise--
        }
    }
    console.log(lista)
}
isecaoordem(livros)