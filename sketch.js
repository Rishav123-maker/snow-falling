const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,snow;
var backgroundImg;

function preload(){
   backgroundImg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,400);
  
   

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg);  
  
  if(frameCount%60===0){
     snow = new Snow(random(10,700),0,10,10);
    
  }
   
  drawSprites();
}