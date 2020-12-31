const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  box1 = new BlueBox(500,270,20,30);
  box2 = new BlueBox(520,270,20,30);
  box3 = new BlueBox(540,270,20,30);
  box4 = new BlueBox(560,270,20,30);
  box4 = new BlueBox(560,270,20,30);
  box5 = new BlueBox(580,270,20,30);
  box6 = new BlueBox(600,270,20,30);

  box7 = new GreenBox(510,240,20,30);
  box8 = new GreenBox(530,240,20,30);
  box9 = new GreenBox(550,240,20,30);
  box10 = new GreenBox(570,240,20,30);
  box11 = new GreenBox(590,240,20,30);
  
  box12 = new YellowBox(520,210,20,30);
  box13 = new YellowBox(540,210,20,30);
  box14 = new YellowBox(560,210,20,30);
  box15 = new YellowBox(580,210,20,30);

  box16 = new RedBox(530,180,20,30);
  box17 = new RedBox(550,180,20,30);
  box18 = new RedBox(570,180,20,30);

  box19 = new BlueBox(540,150,20,30);
  box20 = new BlueBox(560,150,20,30);

  box21 = new GreenBox(550,120,20,30);

  
  ball = new Ball(0,0,25);

  spring = new Projectile(ball.body,{x:200,y:200});

  ground = new Platform(400,390,800,20);

  groundHovering = new Platform(600,295,300,20);
  
}

function draw() {
  background(0);
  Engine.update(engine);  

  debug:true;

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();

  box12.display();
  box13.display();
  box14.display();
  box15.display();

  box16.display();
  box17.display();
  box18.display();

  box19.display();
  box20.display();

  box21.display();

  //box22.display();
  
  

  ball.display();
  spring.display();
  ground.display();
  groundHovering.display();
  
} 

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  spring.release();
}

function keyPressed(){
  if(keyCode === 32){
  spring.attach(ball.body);

  }
}





