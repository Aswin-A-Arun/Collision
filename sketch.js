var fixedRectangle,movingRectangle;


function setup() {
  createCanvas(800,400);

  fixedRectangle = createSprite(400,200,70,35);
  fixedRectangle.shapeColor = "blue";
movingRectangle = createSprite(600,200,40,70,)
movingRectangle.shapeColor = "blue";
}


function draw() {
  background(0,0,0);  
  movingRectangle.x = World.mouseX;
  movingRectangle.y = World.mouseY;


  if(movingRectangle.x-fixedRectangle.x < fixedRectangle.width/2+movingRectangle.width/2 
    && fixedRectangle.x-movingRectangle.x< fixedRectangle.width/2+movingRectangle.width/2
    &&movingRectangle.y-fixedRectangle.y<movingRectangle.height/2+movingRectangle.height/2
    && fixedRectangle.y-movingRectangle.y<fixedRectangle.height/2+fixedRectangle.height/2) {
 fixedRectangle.shapeColor = "red";
 movingRectangle.shapeColor = "red";

  }


  else{
 fixedRectangle.shapeColor = "blue";
 movingRectangle.shapeColor = "blue";

  }
    drawSprites();
}