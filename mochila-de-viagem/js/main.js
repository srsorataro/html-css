const form  = document.getElementById('novoItem')
const lista = document.getElementById('lista')
const itens = JSON.parse(localStorage.getItem("itens")) || []





itens.forEach((e)=>{
criarElemento(e)



})

form.addEventListener('submit',(evento) =>{
    evento.preventDefault()
    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']


    const exite = itens.find(e => e.nome === nome.value)
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

if(exite){
   
    itemAtual.id = exite.id
    atualizaElemento

}else{
    itemAtual.id = itens.length 
    itens.push(itemAtual)
    criarElemento(itemAtual)

}
   
  
    
    
    localStorage.setItem("itens",JSON.stringify(itens))

    
})
function criarElemento(item){
    const novoItem = document.createElement('li')
    novoItem.classList.add('item')

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade
    numeroItem.dataset.id = item.id
 
    novoItem.appendChild(numeroItem)

    novoItem.innerHTML += item.nome
    lista.appendChild(novoItem)

   
 
}
function atualizaElemento(item){
    console.log(document.querySelector("data-id='"+item.id+"']"))
}


