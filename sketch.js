const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

function setup() {
  createCanvas(800,400);


  //createSprite(400, 200, 50, 50);
engine = Engine.create();
world = engine.world;

object = Bodies.rectangle(200,100,50,50);
World.add(world,object);


}

function draw() {
  background(255,255,255);  

  Engine.update(engine);

  rectMode(CENTER);
  rect (200,200,50,50);
console.log(object.position.x);


  //drawSprites();
}