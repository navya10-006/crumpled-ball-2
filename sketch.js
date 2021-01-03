const Render=Matter.Render;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,dustbin1,ground,render
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	paper1=new Paper(120,300,50);
	dustbin1=new Dustbin(400,300,100,100);
	ground=new Ground(400,550,800,20)
	Engine.run(engine);
	var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } }); 
    Render.run(render);
}

function draw() {
  rectMode(CENTER);
  background("white");
  paper1.display();
  dustbin1.display();
  ground.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:120,y:-120});
	}
}


