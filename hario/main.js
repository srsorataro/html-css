const canvas = document.getElementById('screen')
const context = canvas.getContext('2d')

function loadImage(url){
    return new Promise(resolve =>{
        const image = new Image()
        image.addEventListener("load",() =>{
            resolve(image)
        })
        image.src = url
    })
}
class SpriteSheet{
    constructor(image,width = 10,height = 10){
        this.image  = image
        this.width = width
        this.height = height
        this.tiles = new Map()
    }
    define(name,x,y){
        const buffer = document.createElement('canvas')
        buffer.width = this.width
        buffer.height = this.height
        buffer
        .getContext('2d')
        .drawImage(this.image,
            x * this.width,
            y * this.height,
            this.width,
            this.height,
            0,
            0,
            this.width,
            this.height) 
            this.tiles.set(name,buffer)
    }
    draw(name,context,x,y){
         
        const buffer = this.tiles.get(name)
       context.drawImage(buffer,x = 400,y = 200)

    }
}


context.fillRect(0,0,200,200)

 loadImage('./img/tiles.png')
 .then(image =>{
    const sprites = new SpriteSheet(image)
    sprites.define('ground',0,0)
    sprites.draw('ground',context,45,62)


   
 })