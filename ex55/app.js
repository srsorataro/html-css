window.addEventListener("scroll", () =>{

  var header = document.querySelector('header')
  header.classList.toggle("sticky",window.scrollY  > 0)
})
const btnMobile = document.getElementById('btn-mobile')
function toggleMenu(event){
  if(event === 'touchstart')event.preventDefault()
  const nav = document.getElementById('nav')
  nav.classList.toggle("active")
  const active =nav.classList.contains('active')
  const bot = document.getElementById('hamburgue')
  bot.classList.toggle("active")
  event.currentTarget.setAtribute('aria-expanded', active)
  if(active){
    event.currentTarget.setAtribute('aria-label','fechar menu')

  }else{
    event.currentTarget.setAtribute('aria-label','abrir menu')
    
  }

 
}
btnMobile.addEventListener('click',toggleMenu)
btnMobile.addEventListener('touchstart',toggleMenu)
