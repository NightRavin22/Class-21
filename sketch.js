var rect1, rect2;

var test1, test2;

var test3, test4;

function setup() {
  createCanvas(800,400);
  test1=createSprite(300,40,30,30);
  test1.shapeColor="red";
  test2=createSprite(100,30,30,30);
  test2.shapeColor="red";
  rect1 = createSprite(400, 70, 50, 50);
  rect1.shapeColor="blue";
  rect2 = createSprite(400, 130, 60, 60);
  rect2.shapeColor="blue";
  rect3 = createSprite(200,200,50,50);
  rect3.shapeColor="green";
  rect4 = createSprite(600,200,50,50);
rect4.shapeColor="green";


test3 = createSprite(400,200,50,50);
test3.shapeColor="purple";
test4 = createSprite(400,300,50,50);
test4.shapeColor="purple";

rect3.velocityX=5;
rect4.velocityX=-5;

test3.velocityY=5;
test4.velocityY=-5;
}

function draw() {
  background("black");  
  rect2.y=mouseY;
  rect2.x=mouseX;

  if(rect3.y-rect4.y < rect3.height/2+rect4.height/2
    && rect4.y-rect3.y < rect3.height/2+rect4.height/2){
  rect3.velocityY=rect3.velocityY*(-1);
  rect4.velocityY=rect4.velocityY*(-1);
    }
   if(isTouching(rect2,test2)){
    rect2.shapeColor="green";
    test2.shapeColor="green";
   }
   else{rect2.shapeColor="blue";
 test2.shapeColor="red";}
bouceOff(test3, test4);
  drawSprites();
}