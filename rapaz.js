const cliente = {
     nome:"João",
     idade:24,
     email:"João@firma.com",
     telefone:[154521545456,87856465465465],
     saldo: 200,
     pagamento: function (valor) {
        if(valor > this.saldo){
            console.log("Saldo insuficiente")
        }else{
            this.saldo -= valor
            console.log(`Saldo  suficiente ${this.saldo}`)
        }

     },
 
}

cliente.pagamento(50)