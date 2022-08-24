const questions =document.querySelectorAll('.question')

questions.forEach(function(question){
    const btn = question.querySelector('.question-btn')
    btn.addEventListener('click',()=>{
        questions.forEach(function(item){
            if(item !== question){

                item.classList.remove('active')
            }
        })
        question.classList.toggle('active')
    })
})