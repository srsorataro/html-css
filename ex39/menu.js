const btnMobile = document.getElementById('btn-mobile');
function toggleMenu(){
    if(Event.type ==='touchstars')Event.preventDefault
    const nav= document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    Event.currentTarget.setAttribute('aria-expanded',active)

}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstars', toggleMenu);

