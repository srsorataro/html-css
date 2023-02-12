

class Ghost{
    constructor(
        x,
        y,width,
        height,
        speed,
        imageX,
        imageY,
        imageWidth,
        imageHeight,
        range
        ){

        this.x = x 
        this.y = y 
        this.width = width
        this.height = height
        this.speed = speed 
        this.direction = DIRECTION_RIGHT
        this.nextDirection = this.direction;
        this.currentFrame  = 1
        this.frameCount = 7
        this.imageX = imageX
        this.imageY = imageY
        this.imageWidth = imageWidth
        this.imageHeight = imageHeight
        this.range = range

    }
   
    moveProcess(){
        this.changeDirectionIfPossible()
      
        this.moveForwards();
        if(this.checkCollision()){
           this.moveBackwards();
 
           
        }
    }
    eat(){
        for(let i = 0;  i< map.length; i++){
            for(let j = 0; j < map[0].length; j++){
                if(map[i][j] == 2  &&
                    this.getMapX() == j &&
                    this.getMapY() == i){
                        map[i][j] = 3
                        score++;
                    }
            }
        }

    }
    moveBackwards(){
        switch(this.direction){
            case  DIRECTION_RIGHT:
                this.x -= this.speed
                break
        }
        switch(this.direction){
            case DIRECTION_UP:
                this.y += this.speed
                break
        }
        switch(this.direction){
            case DIRECTION_LEFT:
                this.x += this.speed
                break
        }
        switch(this.direction){
            case DIRECTION_BOTTOM:
                this.y -= this.speed
                break
        }
    }
    moveForwards(){
        switch(this.direction){
            case  DIRECTION_RIGHT:
                this.x += this.speed
                break
        }
        switch(this.direction){
            case DIRECTION_UP:
                this.y -= this.speed
                break
        }
        switch(this.direction){
            case DIRECTION_LEFT:
                this.x -= this.speed
                break
        }
        switch(this.direction){
            case DIRECTION_BOTTOM:
                this.y += this.speed
                break
        }
    }
    checkCollision(){
        let isCollided = false
        if(
           map[this.getMapY()][this.getMapX()] == 1  
        || map[this.getMapYRightSide()][this.getMapX()] == 1
        || map[this.getMapY()][this.getMapXRightSide()] == 1
        || map[this.getMapYRightSide()][this.getMapXRightSide()]== 1)
        {
            return true

        }
        return false
    }
    checkGhostCollision(){}
    changeDirection(){}
    changeDirectionIfPossible(){
        if(this.direction == this.nextDirection)return
        let temDirection = this.direction
        this.direction = this.nextDirection
        this.moveForwards()
        if(this.checkCollision()){
            this.moveBackwards()
            this.direction = temDirection
        }else{
            this.moveBackwards()
        }
    
    }
    changeAnimation(){
        this.currentFrame = this.currentFrame == this.frameCount ? 1: this.currentFrame + 1    
    }
    draw(){
        canvasContext.save()
   
                canvasContext.drawImage(
                    ghostFrames,
                    this.imageX,
                    this.imageY,
                    this.imageHeight,
                    this.imageWidth,
                    this.x,
                    this.y,
                    this.width,
                    this.height
                )
                  
                
            
            canvasContext.restore()
          }
    getMapX(){
        return parseInt(this.x / oneBlockSize)
    }
    getMapY(){
        return parseInt(this.y / oneBlockSize)
     } 
     getMapXRightSide(){
        return parseInt((this.x + 0.9999 * oneBlockSize)/ oneBlockSize)
     } 
     getMapYRightSide(){
        return parseInt((this.y  + 0.9999 * oneBlockSize)/ oneBlockSize)
     } 
}
