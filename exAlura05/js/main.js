
 const  teclasList  =  document.querySelectorAll('.tecla');
 let contador = 0;
 while(contador <   teclasList.length ){
    teclasList[contador].onclick = tocaSom;
    contador  += 1 
    console.log(contador)


}

 //const  audio =  document.querySelectorAll('audio');

/*teclasList.forEach((elem,i ) => {
    elem.onclick = () =>{
        audio[i].play();
        
    }
   
})*/
function tocaSom(som){
     document.querySelector(som).play();
   
}
