//data de avaliações locais
const  reviews =[
    {
        id: 1,
        name: "Capacete Preto",
        job: "ux Designer",
        img: "./person1.png",
        text: "Sou um ser ordinário que quer  usar um capacete preto. ",
    },
    {
        id: 2,
        name: "chupa cu ",
        job: "cu preto",
        img: "./person2.png",
        text: "Sou um chupar cu com muito orgulho. ",
    },
    {
        id: 3,
        name: "Nego ney ",
        job: "neguinho ney",
        img: "./person3.png",
        text: "Nego ney Nego ney Nego ney Nego ney.  ",
    }
]
//Selecionar item
const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job  = document.getElementById('job')
const info = document.getElementById('info')

const prevBtn = document.querySelector('prev-btn')
const nextBtn = document.querySelector('next-btn')
const randomBtn = document.querySelector('random-btn')

//definir item inicial

let currentItem = 0

//carregar item inicial
window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem)
    
})
//mostra pessoa de acordo com o item 
function showPerson(person){
    const item = reviews[person]
    img.src =  item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text


}

