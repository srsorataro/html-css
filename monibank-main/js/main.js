import ehUmCPF from "./valida_cpf.js";
import ehMaiorDeIdade from "./validaIdade.js";
const camposDoFormulario = document.querySelectorAll('[required]')

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault())
})
const tiposDeErros = [
"customError",
"patternMismatch",
"stepMismatch",
"tooShort",
"typeMismatch ",
"valueMissing"

]
const mensagens = {
    nome:{
        valueMissing:'Esse campo escrito  de nome  não pode está vazio .image.png😢',
        typeMismatch: 'Esse tipo  de nome deve ser preencido valido😥 ',
        tooShort:'Esse não e o que  o esperado, coloque um valido.😰'

    }, 
    email:{
        valueMissing:'Esse campo  de email escrito  não pode stá vazio.image.png😢',
        typeMismatch: 'Esse tipo  email não  é valido preenche o campo😥 ',
        tooShort:'Esse não e o que  o esperado,coloque um email .😰'

    }, 
    rg:{
        valueMissing:'Esse campo escrito   não é valido, escreva um rg valido.image.png😢',
        typeMismatch: 'preeencha um rg valido😥 ',
        tooShort:'Esse não e o que  o esperado, coloque um rg valido.😰'

    }, 
    cpf:{
        valueMissing:'Esse campo  de cpf escrito  não pode está vazio.image.png😢',
        typeMismatch: 'Esse tipo  não  é valido, coloque um cpf valido😥 ',
        tooShort:'Esse não e o que  o esperado,peeencha um cpf valido.😰'

    }, 
}
function verificaCampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCPF(campo);
    }
    if(campo.name ==  "aniversario" && campo.value != ""){
        ehMaiorDeIdade(campo)
    }
    console.log(campo.validity)
}
