var trex, trex_running, edges;
var groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  sum = 0
  a = [10,36,76,95,37]
for(var i=0; i<a.length; i++){
  sum+=a[i]
}
avg = sum/a.length
console.log(avg)
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  ground = createSprite(width/2,180,width,20)
  ground.addImage ("ground",groundImage)
  ground.velocityX = -4
  ground.width = width*3
  // trex.debug = true
  // ground.debug = true
  invisibleGround = createSprite(width/2,190,width,10)
  invisibleGround.visible = false
}


function draw(){
  //set background color 
  background(210);
  
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space")&&trex.y>=161){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  if (ground.x<0){
    ground.x = ground.width/3
  }
  //stop trex from falling down
  trex.collide(invisibleGround)
  drawSprites();
}