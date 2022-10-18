let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');


pincel.fillStyle = "lightgray"
pincel.fillRect(0,0,600,400);
var cores = ["pink","red","yellow","black","blue"];
var indice  = 0;

function exibiCirculo(evento){
    let x = evento.pageX - tela.offsetLeft;
    let y = evento.pageY - tela.offsetTop;
    

    pincel.fillStyle = cores[indice];
    pincel.beginPath();
    pincel.arc(x,y,10,0,2* 3.14);
    pincel.fill();

    console.log('Eixo X ' + x + ' e ' +  'Eixo Y '+  y  );
    
    
 
   
}
tela.onclick = exibiCirculo;

function mudaCor(){
    indice++;
    if( indice >= cores.length){
        indice = 0;
        return false;
    }

}
tela.oncontextmenu = mudaCor;