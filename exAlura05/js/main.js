const teclasList = document.querySelectorAll('.tecla');
function tocaS(son){
    const elemento = document.querySelector(son)
         
    if(elemento  && elemento.localName === 'audio'){
            elemento.play();
        } 
    else{
        alert('Deu Ruim!!')

    }   
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
    tecla.onkeydown = function (e){   
        if(e.code === "Space"){
            tecla.classList.add('toque');

        }
   
    }
    tecla.onkeyup = function (e) {
        if(e.code === "Enter"){
            tecla.classList.remove('toque')

        }
      

    }
    
}




