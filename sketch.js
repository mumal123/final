
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var dustbinObj, paperObject,groundObject,slingObject;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1300,580);
	paperObject=new paper(200,450,40);
	slingObject =new Slingshot(paperObject.body,{x:200,y:450})
	
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(255); 
  Engine.update(engine);
  slingObject.display();
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
 
}
function mouseDragged(){
	Matter.Body.setPosition(paperObject.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	slingObject.fly();
}