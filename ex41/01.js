exibirAsteriscos(5)
function exibirAsteriscos(linhas){
   
    for(let linha = 1; linha <= linhas; linha++){
    let padrão = ''
    for( let i = 0; i < linha; i++){
        padrão += '*'
       
    }
    console.log(padrão)
    
   

    }
}
  