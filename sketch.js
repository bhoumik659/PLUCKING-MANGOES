
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var imgTree;
var landimg;
var boyimg;
var state = 0;
function preload()
{
	imgTree = loadImage("tree.png")
	landimg = loadImage("Landscape.jpg")
  boyimg = loadImage("boy.png")
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(500,400,1000,20)
	rock = new Rock(100,200,25)
    mango1 = new Mango(700,100,20)
	mango2 = new Mango(720,140,20)
	mango3 = new Mango(780,90,20)
	mango4 = new Mango(800,170,20)
	mango5 = new Mango(630,130,20)
	mango6 = new Mango(590,150,20)
	mango7 = new Mango(630,180,20)
	mango8 = new Mango(730,50,20)
	mango9 = new Mango(670,60,20)
	mango10 = new Mango(810,130,20)
	chain = new Rope(rock.body,{x:150,y:250});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(landimg);
  textSize(30);
  fill('black');
  text("Press Space to re-attach the rock.",50 ,50);
  push();
  imageMode(CENTER)
  image(imgTree,700,200,350,400)
  image(boyimg,210,300,200,200)
  pop();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  chain.display();
  rock.display();
  detectollision(rock,mango1);
  detectollision(rock,mango2);
  detectollision(rock,mango3);
  detectollision(rock,mango4);
  detectollision(rock,mango5);
  detectollision(rock,mango6);
  detectollision(rock,mango7);
  detectollision(rock,mango8);
  detectollision(rock,mango9);
  detectollision(rock,mango10);
  
}
function mouseDragged(){
  if(state!=1){
  Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
  }
}

function mouseReleased(){
  chain.fly();
  state=1
}

function keyPressed(){
  if(keyCode===32 ){
    Matter.Body.setPosition(rock.body,{x:100,y:200});
    chain.attach(rock.body);
    state=0
  }
}

function detectollision(lrock,lmango){
  mangoBodyPosition=lmango.body.position
  rockBodyPosition=lrock.body.position
  var distance=dist(rockBodyPosition.x,rockBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if (distance<=lmango.radius+lrock.radius){
   Matter.Body.setStatic(lmango.body,false);
  } 
}




