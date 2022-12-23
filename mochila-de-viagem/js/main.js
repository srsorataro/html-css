const  form = document.getElementById('novo-item')
const lista = document.getElementById('lista')
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    
   criaElemento(event.target.elements['nome'].value,event.target.elements['quantidade'].value) 
    
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
}