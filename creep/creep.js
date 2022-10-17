let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');


pincel.fillStyle = "lightgray"
pincel.fillRect(0,0,600,400);

function exibiAlerta(evento){
    let x = evento.pageX - tela.offsetLeft;
    let y = evento.pageY - tela.offsetTop;
    

    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x,y,10,0,2* 3.14);
    pincel.fill();

    console.log('Eixo X ' + x + ' e ' +  'Eixo Y '+  y  );
    
    
 
   
}
tela.onclick = exibiAlerta;