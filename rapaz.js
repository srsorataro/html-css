const Livro = function (nome,editora,paginas) {
    gNome = nome,
    gEditora = editora,
    gPaginas = paginas

    this.getNome = () =>{
        return gNome

    }
    this.getEditora = () =>{
        return gEditora

    }
    this.getpagina = () =>{
        return gPaginas

    }

}
const Grafico  = new Livro("Grafico","casa do Codigo",125)
console.log(Grafico.getNome())
console.log(Grafico.getEditora())
console.log(Grafico.getpagina())
