const cliente = {
     nome:"João",
     idade:24,
     email:"João@firma.com",
     telefone:[154521545456,87856465465465],
     saldo: 200,

}
cliente.endereco =[
    {
    rua:"sergipe",
    numero:41564,
    apartamento:true,
    complemento:"ap7821"
},
]

function ligaParaCliente(telefoneCormecial,telefoneResidencial){
    console.log(`"Ligando para o  telefone "${telefoneCormecial}`)
    console.log(`"Ligando para o  telefone "${telefoneResidencial}`)
}
ligaParaCliente(...cliente.telefone)
const ecomenda = {
    destinatario: cliente.nome,
    ...cliente.endereco[0]
   
}
console.log(ecomenda)