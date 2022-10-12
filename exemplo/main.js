const buto  = document.querySelectorAll('input[type=button]');
const tel = document.querySelector('input[type=tel]');
const clear = document.querySelector('#clear');

    for(let i = 0; i < buto.length; i++){
        buto[i].onclick = () =>{
            tel.value += buto[i].value
    
        }
        buto.onkeydown  = function (e){
            if(e.code === "Space"){
                buto[i].classList.add('ativa')
            }
        }
        buto.onkeydown  = function (e){
            if(e.code === "Space"){
                buto[i].classList.remove('ativa')
            }
        }
    }



