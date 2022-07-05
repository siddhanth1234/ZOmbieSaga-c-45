var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie;
var zombieImg;
var ZomibieGroup;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
   zombieImg=loadImage("assets/zombie.png");
  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {
ZomibieGroup=new Group();
  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = false;
   player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if((keyDown("UP_ARROW")||touches.length>0 ) && player.y>400  ){
  player.y = player.y-30
}
if((keyDown("DOWN_ARROW")||touches.length>0)&& player.y<600){
 player.y = player.y+30
}
if((keyDown("LEFT_ARROW")||touches.length>0)&& player.x>20){
  player.x = player.x-30;
}
if((keyDown("RIGHT_ARROW")||touches.length>0)&& player.x<1000){
  player.x = player.x+30;
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 bullet=createSprite(player.x,player.y-30,10,5)
 bullet.velocityX=10;
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
spawnEnemy();
drawSprites();

}

function spawnEnemy(){
  if(frameCount%100==0){
  zombie=createSprite(random(500,1500),random(300,650),40,40)
  zombie.addImage(zombieImg);
  zombie.scale=0.1;
  zombie.velocityX=-2;
  zombie.lifeTime=600;
ZomibieGroup.add(zombie);
}
}
