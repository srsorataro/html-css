const tela  = document.querySelector('canvas');
const pincel = tela.getContext('2d');

function desenhaQuadrado(x, y, tamanho, cor) {

    pincel.fillStyle = cor;
    pincel.fillRect(x, y, tamanho, tamanho)
    pincel.fill();
}

function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor; // o padrão é blue
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * 3.14);
    pincel.fill();

}

function desenhaPaletaDeCores() {

    desenhaQuadrado(xVermelho, yQuadrados, tamanhoQuadrados, 'red');
    desenhaQuadrado(xVerde, yQuadrados, tamanhoQuadrados, 'green');
    desenhaQuadrado(xAzul, yQuadrados, tamanhoQuadrados, 'blue');

}

function lidaComMovimentoDoMouse(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    // usando a nova função 
    if(desenha && podeDesenharNaArea(x,y)) {

        desenhaCirculo(x, y, 5, corAtual);
    }
}

function habilitaDesenhar() {

    desenha = true;
}

function desabilitaDesenhar() {

    desenha = false;
}

function podeDesenharNaArea(x, y) {

     if(x >= 0 && x < 3*tamanhoQuadrados && y >= 0 && y < tamanhoQuadrados) {
        return false;
    } else {
        return true;
    }
}

function selecionaCor(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    // cada condição muda a variável `corAtual`

    // começamos pela condição do y que é igual em todos os casos
    if (y > yQuadrados && y < yQuadrados + tamanhoQuadrados) {

        if (x > xVermelho && x < xVermelho + tamanhoQuadrados) {

            corAtual = 'red';

        } else if (x > xVerde && x < xVerde + tamanhoQuadrados) {

            corAtual = 'green';

        } else if (x > xAzul && x < xAzul + tamanhoQuadrados) {

            corAtual = 'blue';
        }
    }
}

pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 1000, 400);

var desenha = false;
var corAtual = 'blue';
var xVermelho = 0;
var xVerde  = 50;
var xAzul = 100;
var yQuadrados = 0;
var tamanhoQuadrados = 50;

desenhaPaletaDeCores();

tela.onmousemove = lidaComMovimentoDoMouse;

tela.onmousedown = habilitaDesenhar;

tela.onmouseup = desabilitaDesenhar;

tela.onclick = selecionaCor;