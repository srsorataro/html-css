var ul = document.querySelector('nav ul');
function menushow(){
    if(ul.classList.contains('open')){
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }

}