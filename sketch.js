const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

	roof1 = new Roof(600, 100, 1200, 20);
	bob1 = new Bob(600, 300, 25);
	bob2 = new Bob(650, 300, 25);
	bob3 = new Bob(700, 300, 25);
	bob4 = new Bob(750, 300, 25);
	bob5 = new Bob(800, 300, 25);
	rope1 = new Rope(bob1.body,roof1.body, -100);
	rope2 = new Rope(bob2.body, roof1.body, -50);
	rope3 = new Rope( bob3.body, roof1.body, +0);
	rope4 = new Rope(bob4.body, roof1.body, +50 );
	rope5 = new Rope( bob5.body, roof1.body, +100);
	
	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background("turquoise");
  Engine.update(engine);

  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function mouseDragged(){
Matter.Body.setPosition(bob1.body,{x: mouseX,y:mouseY});
}
