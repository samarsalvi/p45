var PLAY = 0;
var END = 1;
var gameState = PLAY;
var ground
var bg , wolf, bear, pball, rstone
var neptune, nepimg
var bgimg
var ground

//score = 0;

function preload(){

bgimg = loadAnimation("icebg.gif")
nepimg = loadAnimation("1.png", "2.png" , "3.png", "4.png", "5.png", "6.png", "7.png" , "8.png", "9.png", "10.png")

}

function setup(){
    createCanvas(800, 400)

    bg = createSprite(450, 150)
    bg.addAnimation("moving" , bgimg)
    bg.scale =1.4

    neptune = createSprite(160, 280, 20, 20)
    neptune.addAnimation("running", nepimg)
    neptune.scale = 0.6

    ground = createSprite(0, 370, 1600, 20)
    ground.visible = false;



}

function draw(){
    background("cyan");

    if(keyDown("space")){
        neptune.velocityY = -10

    }
    neptune.velocityY = neptune.velocityY+0.8
    neptune.collide(ground)

    drawSprites();

    text("X"+mouseX+","+"Y"+mouseY, mouseX, mouseY)
}






















































