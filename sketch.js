const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var backgroundImg;

var bg = "sprites/bg1.png";
var score = 0;

function preload(){
  getBackgroundImg();
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,250,200,10);
 
  //Stand 1
  block1 = new Box(300,275,30,40);
  block2 = new Box(330,275,30,40);
  block3 = new Box(360,275,30,40);
  block4 = new Box(390,275,30,40);
  block5 = new Box(420,275,30,40);
  block6 = new Box(450,275,30,40);
  block7 = new Box(480,275,30,40);
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);
  block16 = new Box(390,155,30,40);

  //Stand 2
  box1 = new Box(710, 235, 10, 20);
  box2 = new Box(720, 235, 10, 20);
  box3 = new Box(730, 235, 10, 20);
  box4 = new Box(740, 235, 10, 20);
  box5 = new Box(750, 235, 10, 20);
  box6 = new Box(720, 210, 10, 20);
  box7 = new Box(730, 210, 10, 20);
  box8 = new Box(740, 210, 10, 20);
  box9 = new Box(730, 195, 10, 20);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:100,y:200});
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);
  fill("black")
  text("Score : " +score, 750, 40);
  Engine.update(engine);

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("red");
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  fill("blue");
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  fill("green");
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  fill("purple");
  block16.display();
  block16.score();

  fill("skyblue");
  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  fill("pink");
  box6.display();
  box6.score();
  box7.display();
  box7.score();
  box8.display();
  box8.score();
  fill("maroon")
  box9.display();
  box9.score();
  fill("gold");

  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);
  slingShot.display();

  keyPresed();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
  }

  function keyPresed(){
    if(keyCode === 32){
      slingShot.attach(this.polygon);
    }
  }

  async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "bg1.png";
    }
    else{
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}