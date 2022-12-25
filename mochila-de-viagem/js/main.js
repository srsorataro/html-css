const  form = document.getElementById('novo-item')
const lista = document.getElementById('lista')
form.addEventListener('submit',(event)=>{
   
    event.preventDefault()
    const nome = event.target.elements['nome']
    const quantidade = event.target.elements['quantidade']
    
   criaElemento(nome.value,quantidade.value) 
   nome.value =''
  quantidade.value =''
    
})
function criaElemento(nome,quantidade){
 console.log(nome)
 console.log(quantidade)
 const novoItem =  document.createElement('li')
 novoItem.classList.add('item')
 const numeroItem = document.createElement('strong')
 numeroItem.innerHTML = quantidade
novoItem.appendChild(numeroItem)
novoItem.innerHTML +=  nome 

lista.appendChild(novoItem)
const itemAtual = {
    
}
localStorage.setItem('nome',nome)
localStorage.setItem('quantidade',quantidade)
}