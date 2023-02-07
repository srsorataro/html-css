const campoDoFormulario = document.querySelectorAll("[required]")

campoDoFormulario.forEach((campo) =>{
    campo.addEventListener('blur', () => verificacaoCampo(campo))

    

})
function verificacaoCampo(campo){

}