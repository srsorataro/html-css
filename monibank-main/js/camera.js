const botaoIniciarCamera = document.querySelector('[data-video-botao]')
const campoCamera = document.querySelector(' [data-camera]')
const video = document.querySelector('[data-video]')
const botãoTiraFoto = document.querySelector("[data-tirar-foto]")
const canvas = document.querySelector("[data-video-canvas]")
const mensagem = document.querySelector("[data-mensagem]")
const botaoEnviarFotot = document.querySelector('[data-enviar]')
let imagemURL =''

botaoIniciarCamera.addEventListener('click',async function () {
    const iniciaVideo = await navigator.mediaDevices.getUserMedia({video:false,audio:true})
    botaoIniciarCamera.style.display = "none"
    campoCamera.style.display = 'block'
    video.scrObject = iniciaVideo
})
botãoTiraFoto.addEventListener('click', function(){
    canvas.getContext('2d').drawImage(video,0,0,canvas.Width,canvas.height)
    imagemURL = canvas .toDataURL('image/jpeg')
    campoCamera.style.display = "none"
    mensagem.style.display="block"
})

botaoEnviarFotot.addEventListener('click', () =>{
    const receberDadosExistentes = localStorage.getItem("cadastro")
    const converteRetorno  = JSON.parse(receberDadosExistentes)
    converteRetorno.imagem = imagemURL;
    localStorage.setItem('cadastro',JSON.stringify(converteRetorno ))
    window.location.href ="./abrir-conta-form-3.html"
   
})