const cores = ['Amarelo','Azul','Branco','Preto','Rosa','Vermelho']
const dataC = document.querySelector('[data-cor]')
const dataR = document.querySelector('[data-robo]')
let contador = 1 

dataC.addEventListener('click',() =>{
    if(i>=(cores.length) -1){
        i = - 1

    }
    i++
    dataC.setAttribute('src',`./img/Robotron 2000 -${cores[i]}/Robotron 2000 - ${cores[i]}.png`)
  
})




    //src=`./img/Robotron 2000-${alterar}.png/`

