const livro = require("./filtrar")

 
let maisBarato = 0 
for(let atual = 0; atual <  livro.length; atual++){
  if(livro[atual].preco< livro[maisBarato].preco){
    maisBarato = atual
  
  }

}
console.log(livro[maisBarato].preco)

