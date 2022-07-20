function botao(){
    nome  = document.getElementById('d').value
    convidou =['Daniel','Raffael',"Gabriel"]
    if(convidou.includes(nome))
    document.getElementById('e').innerHTML +='Você está convidado'
    else
    document.getAnimations('e').innerHTML += 'Não pode entrar'
  

}