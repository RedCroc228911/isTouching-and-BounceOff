var fixedRect, movingRect;
var gameOb1, gameOb2, gameOb3, gameOb4

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,50,50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameOb1 = createSprite(100,100,50,50)
  gameOb1.shapeColor = "green"
  gameOb1.debug = true;

  gameOb2 = createSprite(200,100,50,50)
  gameOb2.shapeColor = "green"
  gameOb2.debug = true;

  gameOb3 = createSprite(300,100,50,50)
  gameOb3.shapeColor = "green"
  gameOb3.debug = true;

  gameOb4 = createSprite(400,100,50,50)
  gameOb4.shapeColor = "green"
  gameOb4.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameOb1)){
   movingRect.shapeColor = "red";
  gameOb1.shapeColor = "red";
  } else {
    movingRect.shapeColor = "green";
    gameOb1.shapeColor = "green";
  }
  bounceOff(movingRect,gameOb1);
  drawSprites();
}

function isTouching(obg1,obg2){

  if (obg1.x - obg2.x < obg2.width/2 + obg1.width/2
    && obg2.x - obg1.x < obg2.width/2 + obg1.width/2
    && obg1.y - obg2.y < obg2.height/2 + obg1.height/2
    && obg2.y - obg1.y < obg2.height/2 + obg1.height/2) {
      return true
}
else{return false}
}

function bounceOff(obg1,obg2){
  if (obg1.x - obg2.x < obg2.width/2 + obg1.width/2
    && obg2.x - obg1.x < obg2.width/2 + obg1.width/2) {
      obg1.velocityX = obg1.velocityX * (-1);
      obg2.velocityX = obg2.velocityX * (-1);
}
if (obg1.y - obg2.y < obg2.height/2 + obg1.height/2
  && obg2.y - obg1.y < obg2.height/2 + obg1.height/2){
    obg1.velocityY = obg1.velocityY * (-1);
    obg2.velocityY = obg2.velocityY * (-1);
}}