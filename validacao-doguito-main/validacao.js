export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }
    if(input.validity.valid){
        input.parentElement.classList.remove('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = MostraMensagemDeError(tipoDeInput,input)
    }else{
        input.parentElement.classList.add('input-container--invalido')
    }
   
      

    
}
const tiposDeErro =[
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]
const mensagemDeErro = {
    nome:{
        valueMissing: 'O campo não pode está vazio.'

    },
    email:{
        valueMissing: 'O campo não pode está vazio.',
        typeMismatch: 'O email  digitado não  é válido.'

    },
    senha:{
        valueMissing: 'O campo  de senha não pode está vazio.',
        patternMismatch: 'A senha deve conter a 6 a 12 carecteres ter uma letra maiuscula um numero e não de conter simbolos.'

    },
    dataNascimento:{
        valueMissing: 'O campo  não pode está vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'

    }
}
  

const validadores = {
    dataNascimento:input => validaDataNascimento(input)
}
function MostraMensagemDeError(tipoDeInput,input){
    let mensagem =''
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]){
            mensagem = mensagemDeErro[tipoDeInput][erro]

        }
        return mensagem
        
    });
}

function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value)
    let mensagem = ''

    if(!maiorQue18(dataRecebida)) {
        mensagem = 'Você deve ser maior que 18 anos para se cadastrar.'
    }

    input.setCustomValidity(mensagem)
}

function maiorQue18(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual
}
