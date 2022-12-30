const  form = document.getElementById('novoItem')
const lista = document.getElementById('lista')
const items = JSON.parse(localStorage.getItem("items")) || []


form.addEventListener('submit',(event)=>{
   
    event.preventDefault()
    const nome = event.target.elements['nome']
    const quantidade = event.target.elements['quantidade']
    
   criaElemento(nome.value, quantidade.value) 
   nome.value = ''
  quantidade.value = ''
    
})
function criaElemento(nome,quantidade){
 const novoItem =  document.createElement('li')
 novoItem.classList.add('item')
 const numeroItem = document.createElement('strong')
 numeroItem.innerHTML = quantidade
novoItem.appendChild(numeroItem)
novoItem.innerHTML +=  nome 

lista.appendChild(novoItem)
const itemAtual = {
    "nome": nome,
    "quantidade": quantidade
}
items.push(itemAtual)
localStorage.setItem('item',JSON.stringify(items))
}