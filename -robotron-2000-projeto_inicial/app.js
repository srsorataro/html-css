
const lista  = document.querySelectorAll('li[data-tinta]')
const mostraTintas = document.querySelector('[data-mostrar]');
const recolheTintas = document.querySelector('[data-recolher]');



mostraTintas.addEventListener('click', () =>{
  
    lista.forEach(function(element){
      
          element.style.display ='block'
       
    })


})




  


    

   
