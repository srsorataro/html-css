const tela  = document.querySelector('canvas');
const pincel = tela.getContext('2d');
let xAleatorio = 0;
let yAleatorio = 0;
function quadro(){

pincel.fillStyle  ='lightgray'
pincel.fillRect(0,0,1000,400);

}

let raio = 10;
function desenhaCirculo(x,y,raio,cor){
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x,y,raio,0,2*Math.PI);
    pincel.fill();

}
function limaTela(){
    pincel.clearRect(0,0,1000,400)
}
function desenhaAlvo(x,y){
desenhaCirculo(x,y,raio+20,'red');
desenhaCirculo(x,y,raio+10,'white');
desenhaCirculo(x,y,raio,'red');

}


function sorteiaPosiçao(maximo){
    return Math.floor(Math.random() * maximo)

}
function atualizaTela(){
    limaTela();
    quadro();
    xAleatorio =  sorteiaPosiçao(1000);
    yAleatorio =  sorteiaPosiçao(400);

    desenhaAlvo(xAleatorio,yAleatorio);


}
function dispara(event){
   let x = event.pageX - tela.offsetLeft;
   let y = event.pageY - tela.offsetTop;
  
    if(x > xAleatorio - raio && 
        x < xAleatorio + raio && 
        y > yAleatorio - raio && 
        y < yAleatorio + raio ){
        alert("💥Acertou!💥")

    }
}
tela.onclick = dispara;
setInterval(atualizaTela,1000)

