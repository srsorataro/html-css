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
    atualizaElemento(itemAtual)
    itens[exite.id] = itemAtual
   

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

    novoItem.appendChild(botaoDeleta(item.id))
    lista.appendChild(novoItem)
    

   
 
}
function atualizaElemento(item){
document.querySelector(`data-id="${item.id}"]`).innerHTML = item.quantidade
}

function  botaoDeleta(id){
    const elementoBotao = document.createElement("button")
    elementoBotao.innerText = "X"
    elementoBotao.addEventListener("click", function() {
        deletaElemento(this.parentNode,id)
        

    })
    return elementoBotao
}
function deletaElemento(tag,id){
    tag.remove()

    itens.splice(itens.findIndex(e => e.id === id),1)

    localStorage.setItem("itens",JSON.stringify(itens))
    
}
