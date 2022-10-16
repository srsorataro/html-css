let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');


pincel.fillStyle = "lightgray"
pincel.fillRect(0,0,600,400);

function circulo(x,y,raio,cor){
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x,y,raio,0,2* Math.PI);
    pincel.fill();
}
function Flor(x,y){
    circulo(x,y+20,10,"yellow");
    circulo(x,y,10,"red");
    circulo(x,y-20,10,"yellow");
    circulo(x+20,y,10,"yellow");
    circulo(x-20,y,10,"yellow");


}
Flor(300,200);