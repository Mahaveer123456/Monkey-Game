
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var monkey_1,monkey_2,monkey_3,monkey_4,monkey_5,monkey_6,monkey_7,monkey_8;


function preload(){
  monkey_running=
  loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png",)
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");                       
}



function setup() {
  //creating monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  

}

function draw() {
  background(255);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
    
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
    
  var survialTime=0;
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  surivalTime=Mathr.ceil(frameCount/frameRate())
  text("surivalTime:"+surivalTime,100,50);

  drawSprites(); 
}