let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');
//bola
let x = 300;
let y = 200;
let d = 10;
let x2 = 260;
let y2 = 380;
let comprimento  = 80;
let altura  = 8;


//raio da bola
let raio = d / 2;


//
let taxa = 15;
//
let xVelocidade =  4;
let yVelocidade = -4;

//velocidade da bolinha
function velocidade(){
    x += xVelocidade;
    y +=  yVelocidade;
}

//codig das teclas
let esquerda = 37;
let cima = 38;
let direita = 39;
let baixo = 40;
//tela
function pin(){
    pincel.fillStyle = 'purple';
   pincel.fillRect(0, 0, 600, 400);

}

//bola
function desenhaCirculo(x,y,d){
   pincel.fillStyle = 'blue';
   pincel.beginPath();
   pincel.arc(x,y,d,0,2* Math.PI);
   pincel.fill(); 
}
function raquete(x2,y2,comprimento,altura){
    pincel.fillStyle = 'red';
    pincel.beginPath();
    pincel.rect(x2,y2,comprimento,altura);
    pincel.fill(); 
 }
//limpesa dos quadros
function limpaTela(){
    pincel.clearRect(0,0,600,400);
}
//loop para o jogo
function atualizaTela(){
    
    limpaTela();
    pin();
    borda();
    desenhaCirculo(x,y,d);
    raquete(x2,y2,comprimento,altura);
    velocidade();  
    colisao(); 
}
//colisão da borda
function borda(){
    if(x  + raio >  600 || x - raio  < 0  ){
    xVelocidade *= -1;
   }
     if(y  + raio >  400 || y - raio  < 0  ){
        yVelocidade *= -1;
    }   
}
function colisao(){
    if(x - raio  <  x2 + comprimento && y - raio < y2 + altura && y + raio  > y2  ){
        yVelocidade *= -1;
        

    }
}

function tecladoEvento(evento){

    if(evento.keyCode == direita){
        x2 += taxa
    }
    if(evento.keyCode == esquerda){
        x2 -= taxa
    }


}
document.onkeydown =tecladoEvento;
//fps do jogo
setInterval( atualizaTela,20);

