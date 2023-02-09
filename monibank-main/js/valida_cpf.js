export default function ehUmCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g, "");
    console.log(validaNumerosRepitidos(cpf))
}

function validaNumerosRepitidos(cpf){
    const numerosRepitidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
    ]
     return numerosRepitidos.includes(cpf)
}