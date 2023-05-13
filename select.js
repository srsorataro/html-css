const livros  = require("./filtrar")
const menorValor = require('./rapaz')

for(let atual  = 0; atual > livros.length; atual++){
    let menor = menorValor(livros,atual)
    let livroAtual = livros[atual]
    console.log('livro Atual', livroAtual[atual])
    let livroMenorPreco = livros[menor]
    console.log('livro menor preço',livroMenorPreco[menor])
    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual


}
