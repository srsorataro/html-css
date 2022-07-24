const pokemomName = document.querySelector('.pokemon__name')
const pokemomNumber = document.querySelector('.pokemom__number')
const pokemomImage = document.querySelector('.pokemon__image')

let searchPokemom = 1

const Form = document.querySelector('.form')
const input= document.querySelector('.input__search')
const buttonPrev = document.querySelector('.button-btn-prev')
const buttonNext = document.querySelector('.button-btn-next')


const fechPokemom = async(pokemom) =>{
    const APIResponse =   await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemom}`
    )
    if(APIResponse.status === 200){
        const data = await APIResponse.json()
        return data

    }
    

}
const  renderPokemom  = async(pokemom) =>{
    pokemomName.innerHTML ='Loading....'
    pokemomNumber.innerHTML =''
    const data = await fechPokemom(pokemom)
    if(data){
        pokemomImage.style.display = 'block'
        pokemomName.innerHTML = data.name
        pokemomNumber.innerHTML = data.id
        pokemomImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        input.value = ''
        searchPokemom = data.id

    }else{
        pokemomImage.style.display = 'none'
        pokemomName.innerHTML ='Not Found :c'
        pokemomNumber.innerHTML =''
    }
   
    
}
Form.addEventListener('submit',(event) =>{
    event.preventDefault()
    
renderPokemom(input.value.toLowerCase())

})
buttonPrev.addEventListener('click',() =>{
    if( searchPokemom > 1 ){
        searchPokemom -= 1
        renderPokemom(searchPokemom)
    }
   

})
buttonNext.addEventListener('click',() =>{
    searchPokemom += 1
    renderPokemom(searchPokemom)

})

renderPokemom('1')
