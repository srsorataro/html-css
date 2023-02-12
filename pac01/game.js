const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");
const pacmanFrames = document.getElementById("animations");
const ghostFrames = document.getElementById("ghosts");

let createRect = (x, y, width, height, color) => {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);
};


const DIRECTION_RIGHT = 4
const DIRECTION_LEFT = 3
const DIRECTION_UP = 2
const DIRECTION_BOTTOM = 1

let ghostLocations = [
    {x:0, y:0},
    {x:176, y:0},
    {x:0, y:121},
    {x:176, y:121},
]

//game variaveis
let fps = 30
let pacman;
let oneBlockSize = 20
let wallColor ="#342DCA"
let wallSpaceWidth = oneBlockSize / 1.6
let wallOffset = (oneBlockSize - wallSpaceWidth) / 2
let wallInnerColor = "black"
foodColor = "#FEB897"
let score = 0;
let ghosts =[]
let ghostCount = 4



let map = [
         [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
         [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
         [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
         [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
         [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
         [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
         [1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1],
         [0, 0, 0, 0, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 0, 0, 0],
         [1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1],
         [1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1],  
         [1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1],
         [0, 0, 0, 0, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 0, 0, 0, 0],
         [0, 0, 0, 0, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 0, 0, 0],
         [1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1],
         [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
         [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
         [1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1],
         [1, 1, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 1, 1],
         [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
         [1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1],
         [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],          
         [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];


let gameLoop = () =>{
    update()
    draw() 


}
let drawFoods = () => {
     for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[0].length; j++){
            if(map[i][j] == 2){
                createRect(
                    j * oneBlockSize + oneBlockSize / 3,
                    i * oneBlockSize + oneBlockSize / 3,
                oneBlockSize / 3,
                oneBlockSize / 3,
                foodColor
                )
            }
          
        }
        
         }
}

let update =  () =>{
   pacman.moveProcess()
   pacman.eat()
    
}
let drawGhost = () =>
{
    for(let i = 0; i < ghosts.length; i++ ){
        ghosts[i].draw()
    }
}
let draw =  () =>{
    canvasContext.clearRect(0,0,canvas.width,canvas.height)
    createRect(0,0, canvas.width,canvas.height,"black")
    drawWalls()
    drawFoods()
    pacman.draw()
    drawScore()
    drawGhost()
    
}
let drawScore = () =>{
    canvasContext.font = "20px Emulogic"
    canvasContext.fillStyle = "white"
    canvasContext.fillText("Score:" + score,0, oneBlockSize* (map.length + 1)+ 10
    )
}
let gameInterval = setInterval(gameLoop, 1000/fps)

let drawWalls =  () =>{
    for(let i = 0; i < map.length; i++){
        for(let j = 0; j < map[0].length; j++){
            if(map[i][j ] == 1){
                createRect(
                    j * oneBlockSize, 
                    i * oneBlockSize,
                    oneBlockSize,
                    oneBlockSize,
                     wallColor )

            }
            if(j > 0  && map[i  ][j-1] == 1){
                createRect(
                    j * oneBlockSize,
                    i * oneBlockSize + wallOffset, wallSpaceWidth + wallOffset, wallSpaceWidth, wallInnerColor)

            }
            if(j < map[0].length -1 && map[i][j+1] == 1){
                createRect(
                    j * oneBlockSize + wallOffset,
                    i * oneBlockSize + wallOffset, wallSpaceWidth + wallOffset, wallSpaceWidth, wallInnerColor)
                


            }
            if(i > 0  && map[i -1][j] == 1){
                createRect(
                    j * oneBlockSize + wallOffset, 
                    i * oneBlockSize, 
                    wallSpaceWidth, 
                    wallSpaceWidth + wallOffset, 
                    wallInnerColor)

            }
            if(i < map.length - 1 && map[i + 1][j] == 1){
                createRect(
                    j * oneBlockSize + wallOffset,
                    i * oneBlockSize + wallOffset, wallSpaceWidth,
                    wallSpaceWidth+ wallOffset, wallInnerColor)
                


            }


        }

    }

}

let createNewPacman = () => {
    pacman = new Pacman(
        oneBlockSize,
        oneBlockSize,
        oneBlockSize,
        oneBlockSize,
        oneBlockSize / 5
    );
};


let createGhosts = () =>{
    ghosts = []

    for(let i  = 0; i < ghostCount; i++){
        let newGhost = new Ghost(
            9 * oneBlockSize + (i %2 == 0 ? 0 : 1) * oneBlockSize,
            10 * oneBlockSize + (i %2 == 0 ? 0 : 1) * oneBlockSize,
            oneBlockSize,
            oneBlockSize,
            pacman.speed/2,
            ghostLocations[1% 4].x,
            ghostLocations[1% 4].y,
            124,126,6+ i
            
                    )

                    ghosts.push(newGhost)

    }

}
createNewPacman()
gameLoop()
createGhosts()
window.addEventListener("keydown", (event)=>{

    let k  = event.keyCode
    setTimeout( () =>{
        if(k == 37 || k == 65){
            //left
            pacman.nextDirection = DIRECTION_LEFT

        }else if( k == 38 || k == 87){ 
            //up
            pacman.nextDirection = DIRECTION_UP

        } else if(k == 39 || k == 68){
            //right
            pacman.nextDirection = DIRECTION_RIGHT

        }else if(k == 40 || k == 83){
            //bottom
            pacman.nextDirection = DIRECTION_BOTTOM

        }

    }, 1)
})
