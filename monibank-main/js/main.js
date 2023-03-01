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
        valueMissing:'Esse campo escrito  não é valido.image.png😢',
        typeMismatch: 'Esse tipo  não  é valido😥 ',
        tooShort:'Esse não e o que  o esperado.😰'

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
