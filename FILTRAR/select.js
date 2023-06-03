const  livros  = require("./filtrar")
const menorValor = require("./rapaz")

for(let i =  0; i < livros.length; i++){
    console.log("atual",i)
    
    let menor = menorValor(livros,i)
    let livroAtual = livros[i]
    let livroPreco = livros[menor]
    console.log('livro atual!',livroAtual)
    console.log('livro menor!',livroPreco)
 
}
