
const teclas =[];
const sons =[];

 //butoes
 
 document.querySelector('.tecla_pom').onclick = butao;
 document.querySelector('.tecla_clap').onclick = butao1;
 document.querySelector('.tecla_tim').onclick = butao2;
 document.querySelector('.tecla_puff').onclick = butao3;
 document.querySelector('.tecla_toim').onclick = butao4;
 document.querySelector('.tecla_splash').onclick = butao5;
 document.querySelector('.tecla_psh').onclick = butao6;
 document.querySelector('.tecla_tic').onclick = butao7;
 document.querySelector('.tecla_tom').onclick = butao8;

//Sons
function butao(){
    document.querySelector('#som_tecla_pom').play();
}

function butao1(){
    document.querySelector('#som_tecla_clap').play();
}

function butao2(){
    document.querySelector('#som_tecla_tim').play();
}

function butao3(){
    document.querySelector('#som_tecla_puff').play();
}

function butao4(){
    document.querySelector('#som_tecla_splash').play();
}

function butao5(){
    document.querySelector('#som_tecla_toim').play();
}

function butao6(){
    document.querySelector('#som_tecla_psh').play();
}

function butao7(){
    document.querySelector('#som_tecla_tic').play();
}

function butao8(){
    document.querySelector('#som_tecla_tom').play();
}

