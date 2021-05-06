const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var plinkos = [];
var particles;
var divisions = [];
var divHeight = 300;

var ground1,edge1,edge2,edge3;

var gameState;

var play = 0;
var END = 1;
var stop = 2;
var win = 3;

var turn = 5;

var score = 0;

 var bg,txtcolor,hour,point;

 function preload(){

   point = loadSound("point.wav");
   bg = color(0);
   txtcolor = color(255);

 }

function setup() {

  createCanvas(910,800);

  engine = Engine.create();
  world = engine.world;

  gameState = play;

for(var j=5; j <= width; j = j + 100){
    divisions.push(new Division(j, height - divHeight/2, 10, divHeight));
  }

  for(var k=50; k <= width-10; k = k + 55){
    plinkos.push(new Plinko(k, 100,PI/4));
    plinkos.push(new Plinko(k, 280,PI/4));
    
  }

  for(var k=25; k <= width-10; k = k + 55){
    plinkos.push(new Plinko(k, 180,PI/4));
    plinkos.push(new Plinko(k, 380,PI/4));
    
  }

  
  edge1 = new Ground(-5,height/2,1,height);
  edge2 = new Ground(width+5,height/2,1,height);
  
}

function draw() {

  if(hour){

  background(bg);  

  
  Engine.update(engine);

  textSize(30);
  fill(txtcolor);
  strokeWeight(1);
  stroke("pink");
  text("50",30,height-270);
  text("100",120,height-270);
  text("200",220,height-270);
  text("300",320,height-270);
  text("500",420,height-270);
  text("300",520,height-270);
  text("200",620,height-270);
  text("100",720,height-270);
  text("50",830,height-270); 
  strokeWeight(2);
  stroke("blue");
  text("SCORE: "+score,100,50);
  text("TURNS LEFT: "+turn, width-300,50);
  text("TARGET: 2000",350,50);
  if(gameState === play)
  text("Click anywhere to set the x position of ball",200,height-570);

  strokeWeight(1);
  stroke("yellow");
  for(var l=0; l < plinkos.length; l++){
    plinkos[l].display();
  }

  noStroke();
  for(var m=0; m < divisions.length; m++){
    divisions[m].display();
  }

  if(turn === 0 && score < 2000){
    gameState = stop;
     push();
     strokeWeight(2);
     stroke("red");
     textSize(60);
     fill(255);
     text("GAME OVER",270,250);
     textSize(50);
     stroke("yellow")
     text("Press Space Key to Restart",150,340)
     pop();
  }

  if(score >= 2000){
    gameState = win;
     push();
     strokeWeight(2);
     stroke("red");
     textSize(60);
     fill(255);
     text("CONGRATS!! YOU WON",130,250);
     textSize(50);
     stroke("yellow")
     text("Press Space Key to Restart",150,340)
     pop();
  }

  if(particles != null){
    noStroke();
    particles.display();

  if(particles.body.position.y > height){

   var x = particles.body.position.x;

   point.play();

    if(x>5 && x<105|| x<width && x>805){
      score = score + 50;
    } else if(x>105 && x<205|| x<805 && x>705){
      score = score + 100;
    } else if(x>205 && x<305|| x<705 && x>605){
      score = score + 200;
    } else if(x>305 && x<405|| x<605 && x>505){
      score = score + 300;
    } else if(x>405 && x<505){
      score = score + 500;
    }

    turn--;
    particles = null;
    gameState = play;

  }
  }

  
}
}


function mousePressed(){
  
    if(gameState === play){
    particles = new Particle(mouseX,30);
    gameState = END;
    }
  
}

function keyPressed(){
  if((gameState === win || gameState === stop)&& keyCode === 32){
    gameState = play;
    score = 0;
    turn = 5;
  }
}
