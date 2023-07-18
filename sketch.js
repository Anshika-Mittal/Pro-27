
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;
var boxes=[];

function setup() {
  createCanvas(400,400);

  var option={
    isStatic:true
  };

  engine = Engine.create();
  world = engine.world;
  
  ground = Bodies.rectangle(100,300,400,20, option);
  World.add(world,ground);
  
  //box1 = new Box(200,100,50,50);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}
function mousePressed(){
  boxes.push(
    
    
    new Box(mouseX,mouseY,50,50)
    
    
    )
}

function draw() 
{
  background(51);
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,400,10);
 
 for(var i=0;i<boxes.length;i++) {
 boxes[i].show();}
  
  
}

