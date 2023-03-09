const botaoIniciarCamera = document.querySelector('[data-video-botao]')
const campoCamera = document.querySelector(' [data-camera]')
const video = document.querySelector('[data-video]')

botaoIniciarCamera.addEventListener('click',async function () {
    const iniciaVideo = await navigator.mediaDevices.getUserMedia({video:false,audio:true})
    botaoIniciarCamera.style.display = "none"
    campoCamera.style.display = 'block'
    video.scrObject = iniciaVideo
})