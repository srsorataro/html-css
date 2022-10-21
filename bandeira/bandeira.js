
function bandeiraDoBrasil(){
    const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

pincel.fillStyle = "green";
pincel.fillRect(0,0,600,400);

pincel.fillStyle = "yellow";
pincel.beginPath();
pincel.moveTo(300,50);
pincel.lineTo(50,200);
pincel.lineTo(550,200)
pincel.fill();

pincel.fillStyle = "yellow";
pincel.beginPath();
pincel.moveTo(50,200);
pincel.lineTo(300,350);
pincel.lineTo(550,200)
pincel.fill();





pincel.fillStyle = "darkblue";
pincel.beginPath();

pincel.arc(300,200,100,0,2*Math.PI);
pincel.fill();

pincel.fillStyle = "white";
pincel.fillRect(200,200,200,20);



}

function bandeiraDaAlemanha(){
    const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

pincel.fillStyle = "black";
pincel.fillRect(0,0,600,400);


pincel.fillStyle = "red";
pincel.fillRect(0,133,600,133);

pincel.fillStyle = "yellow";
pincel.fillRect(0,266,600,133);





}
let mostraBrasil = true;



function trocaBandeira(){
    if(mostraBrasil){
        bandeiraDoBrasil();
    
    }else{
        bandeiraDaAlemanha();
       
    }
    mostraBrasil =  !mostraBrasil;

}
//setInterval(trocaBandeira,3000);
