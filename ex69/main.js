let tela = document.querySelector('canvas');
let pincel  = tela.getContext('2d');
pincel.fillStyle ="lightgray";
pincel.fillRect(0,0,600,400);

pincel.fillStyle = "green";
pincel.fillRect(0,0,100,400);

pincel.fillStyle = "red";
pincel.fillRect(200,0,200,400);

pincel.fillStyle = "yellow";
pincel.beginPath();
pincel.moveTo(200,100);
pincel.lineTo(153,20);
pincel.lineTo(100,100);
pincel.fill();

pincel.fillStyle="blue";
pincel.beginPath();
pincel.arc(151,70,8,0,2 * 3.14);
pincel.fill();