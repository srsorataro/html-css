function loadImage(url){
    return new Promise(resolve =>{
        const image = new Image()
        image.addEventListener("load",() =>{
            resolve(image)
        })
        image.src = url
    })
}

const canvas = document.getElementById('screen')
const context = canvas.getContext('2d')

context.fillRect(0,0,200,200)

 loadImage('./img/tiles.png')
 .then(image =>{
    const sprites = new SpriteSheet(image)
    sprites.definte('ground',0,0)
    sprites.draw('ground',context,45,45)


    context.drawImage(image,
        0,0,
        16,16,
        32,32,
        50,50)
 })