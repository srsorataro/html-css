function soma(valor1,valor2){
    return Number(valor1) + Number(valor2)
}
function subtracao(valor1,valor2){
    return Number(valor1) - Number(valor2)
}
function multipli(valor1,valor2){
    return Number(valor1) * Number(valor2)
}
function divisao(valor1,valor2){
    return Number(valor1) / Number(valor2)
}

let valor1;
let valor2;
let operacao = '';

//while
do{
operacao = prompt(`Qual  operação que você quer realizar ? Responda, 'soma','substração','multiplicação','divissão', ou 'sair'`);

while(operacao != "soma" && operacao != "substração" && operacao != "multiplicação" && operacao != "divisão" ){
    alert(`Operação não reconhecida!`)
    operacao = prompt(`Qual  operação que você quer realizar ? Responda, 'soma','substração','multiplicação','divissão', ou 'sair'`);
}
if(operacao === "sair"){
    break;
}
valor1 = prompt(`Insira o primeiro valor:`);
valor2 = prompt(`Insira o segundo valor:`);
switch (operacao){
    case 'soma':
    alert(`O resultado da ${operacao} é ${soma(valor1,valor2)} `);
    break
    case 'soma':
    alert(`O resultado da ${operacao} é ${subtracao(valor1,valor2)} `);
    break
    case 'soma':
    alert(`O resultado da ${operacao} é ${multipli(valor1,valor2)} `);
    break
    case 'soma':
    alert(`O resultado da ${operacao} é ${divisao(valor1,valor2)} `);
    break
}


}
while(operacao === "soma" || operacao === "substração" || operacao === "multiplicação" || operacao === "divisão"){
    alert('Acabou👌')

}
