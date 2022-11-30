const minutos = new Date()
const tempo  = minutos.getSeconds()
if(tempo > 10){
const conteudo = document.querySelector('body')

conteudo.style.background = '#fed02e'

}else{
    const conteudo = document.querySelector('body')
    conteudo.style.background = '#1000ff'
   

}

