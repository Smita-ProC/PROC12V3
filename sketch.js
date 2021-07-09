var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,350,20,20);
rabbit.scale =0.1;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  
  rabbit.x = mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites();
  
  var select_sprites = Math.round(random(1,3));
  
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApples();
    } else if (select_sprites == 2) {
      createOrangeLeaves();
    }else {
      createRedLeaves();
    }
  }

}


function createOrangeLeaves() {
    orange = createSprite(random(40, 345),40, 20, 20);
    orange.addImage(orangeImg);
    orange.scale=0.08;
    orange.velocityY = 3;
    orange.lifetime = 150;
  }

function createApples() {
apple = createSprite(random(40, 360),40, 20, 20);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 4;
apple.lifetime = 100;
  
}



function createRedLeaves() {
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;
}
