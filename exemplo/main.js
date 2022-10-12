const tecla = document.querySelectorAll('input[type=button]');
const tel  =  document.querySelector('input[type=tel]');

for(let i = 0;  i < tecla.length; i++){
    const teq = tecla[i];
    tecla[i].onclick = () =>{
        tel.value += tecla[i].value


        teq.onkeydown = function(evento){
            if(evento.code === "Enter" ){
                teq.classList.add('ativa')
                
            
    
            }
            teq.onkeyup = function(evento){
                if(evento.code === "Space"){
                    teq.classList.remove('ativa')
    
                }
               
            }
        }
    }

    
  
    
  
}