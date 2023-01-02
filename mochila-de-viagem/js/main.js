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
        itemAtual.id

    }
    
   
  
    criarElemento(itemAtual)
    itens.push(itemAtual)
    localStorage.setItem("itens",JSON.stringify(itens))

    
})
function criarElemento(item){
    const novoItem = document.createElement('li')
    novoItem.classList.add('item')

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade
    novoItem.appendChild(numeroItem)

    novoItem.innerHTML += item.nome
    lista.appendChild(novoItem)

   
 
}



