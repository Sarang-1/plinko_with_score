const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var plinkos = [];
var particles = [];
var divisions = [];
var divHeight = 300;

var ground1,edge1,edge2,edge3;

function setup() {
  createCanvas(650,800);
  engine = Engine.create();
  world = engine.world;
for(var j=5; j <= width; j = j + 80){
    divisions.push(new Division(j, height - divHeight/2, 10, divHeight));
  }

  for(var k=50; k <= width-10; k = k + 50){
    plinkos.push(new Plinko(k, 75));
    plinkos.push(new Plinko(k, 275));
    
  }

  for(var k=25; k <= width-10; k = k + 50){
    plinkos.push(new Plinko(k, 175));
    plinkos.push(new Plinko(k, 375));
    
  }

  ground1 = new Ground(width/2,height,width,10);
  edge1 = new Ground(-5,height/2,1,height);
  edge2 = new Ground(width+5,height/2,1,height);
  
}

function draw() {
  background(0);  

  
  Engine.update(engine);

  

  for(var l=0; l < plinkos.length; l++){
    plinkos[l].display();
  }

  for(var m=0; m < divisions.length; m++){
    divisions[m].display();
  }



  if(frameCount%50===0){
    particles.push(new Particle(random(100,width-100),0));
    
  }

  for(var i=0; i < particles.length; i++){
    particles[i].display();
  }
  
  ground1.display();
}