const teclasList = document.querySelectorAll('.tecla');
function tocaS(son){
    document.querySelector(son).play()
}

/*const adio  =  document.querySelectorAll('audio');
teclasList.forEach((elem,i)=>{
    elem.onclick = () => {
        adio[i].play();
    }
})
*/

for(let i = 0; i < teclasList.length; i++){
    const tecla = teclasList[i]
    const isntu = tecla.classList[1];
    const idDio  = `#som_${isntu}`
    tecla.onclick  = () =>{
        tocaS(idDio);
    }
    tecla.onkeydown = function (){   
        tecla.classList.add('ativa');
       
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')

    }
    
}




