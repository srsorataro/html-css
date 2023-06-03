const livros =require('./filtrar')
function inserir(lista){
    for(let i  = 0; i < lista.length; i++){
        let analise = i
        while(analise > 0 && lista[analise].preco < lista[analise - 1].preco){
            let itemAnterior = lista[analise - 1 ]
            let itemAnalise = lista[analise]
            lista[analise] = itemAnterior
            lista[analise - 1] = itemAnalise
            analise--
            

          

        }
       
    }
    console.log(lista)

}
inserir(livros)