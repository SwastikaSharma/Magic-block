var mR,fR;


function setup() {
  createCanvas(800,400);
 mR = createSprite(400, 200, 30, 80);
 mR.shapeColor = "green";

 fR = createSprite(200,200,80,50);
 fR.shapeColor = "green";
}

function draw() {
  background(0);
  mR.x = World.mouseX;
  mR.y = World.mouseY;

  if(mR.x - fR.x <= mR.width/2 + fR.width/2 && fR.x - mR.x <= mR.width/2 + fR.width/2 && 
      mR.y - fR.y <= mR.height/2 + fR.height/2 && fR.y - mR.y <= mR.height/2 + fR.height/2){
    mR.shapeColor = "red";
    fR.shapeColor = "red";
  }
  else{
    mR.shapeColor = "green";
    fR.shapeColor = "green";
  }
  drawSprites();
}