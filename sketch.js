var backImage,backgr,bImage;
var player, player_running;
var ground,ground_img;
new p5();
var END =0;
var PLAY =1;
var gameState = PLAY;
var FoodGroup=new Group();

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bImage=loadImage("banana.png");
  oImage=loadImage("stone.png");
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,40,100);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
  
}

function draw() { 
  background(0);
  if(gameState===PLAY){
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
    if(keyDown("space") && player.collide(ground)) {
      player.velocityY = -12;
    console.log(player.y)

    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);

  }
  
  spawnFood();
  spawnObs();

  drawSprites();
}
function spawnFood(){
  if (frameCount% 80===0){
    var b=createSprite(600,random(120,200),40,10);
    b.addImage(bImage);
    b.scale=0.05;
    b.velocityX=-4;
    b.lifetime=300;
    player.depth=b.depth+1;
    FoodGroup.add(b);
  }

}
function spawnObs(){
  if (frameCount% 120===0){
    var b=createSprite(600,340,40,10);
    b.addImage(oImage);
    b.scale=0.05;
    b.velocityX=-4;
    b.lifetime=300;
    player.depth=b.depth+1;
    FoodGroup.add(b);
  }

}
