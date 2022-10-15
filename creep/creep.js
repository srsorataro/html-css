let  tela = document.querySelector("canvas");
let  pincel  = tela.getContext("2d");

let xQ = [0,50,100];

pincel.fillStyle ="green";
pincel.fillRect(0,0,50,50);
pincel.fillStroke ='black';
pincel.strokeRect(0,0,50,50);

pincel.fillRect(50,0,50,50);
pincel.strokeRect(50,0,50,50);

pincel.fillRect(100,0,50,50);
pincel.strokeRect(100,0,50,50);
