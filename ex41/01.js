
function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log('Fazendo ligação.......')
        }
    }
    
}
const celularl= criarCelular('Zenfone',5.5,5000)
console.log(celularl)