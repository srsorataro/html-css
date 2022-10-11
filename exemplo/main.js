const buto  = document.querySelectorAll('input[type=button]');
const tel = document.querySelector('input[type=tel]');
const clear = document.querySelector('#clear');
function telefone(){
    for(let i = 0; i < buto.length; i++){
        buto[i].onclick = () =>{
            tel.value += buto[i].value
    
        }
    }
}
telefone();

