
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;
var engine;
var paper,dustbin,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,600,20);
	dustbin = new Dustbin(600,400,20,20);
	ground = new Ground(400,650,800,20);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  paper.display();
  dustbin.display();
  ground.display();
  drawSprites();
 
}



