const cores = ['Amarelo','Azul','Branco','Preto','Rosa','Vermelho']
const corAtual = document.querySelector('[data-cor]');
const btnAlterarCor = document.querySelector('[data-botao]');
let i = -1;


btnAlterarCor.addEventListener("click", () =>{
    if(i >= (cores.length  -1 )){
        i -= i
    }
    i++;    
    corAtual.setAttribute('src',`./img/Robotron 2000 - ${cores[i]}.png`)    
})



    //src=`./img/Robotron 2000-${alterar}.png/`

