class Plinko{
    constructor(x,y,angle){
        var options = {
            isStatic: true
        }
        this.w = 15;
        this.h = 15;
        this.body = Bodies.rectangle(x,y,15,15,options);
        Matter.Body.setAngle(this.body, angle);
        World.add(world,this.body);
    }

    display(){
        
        var pos =this.body.position;
        var angle = this.body.angle;

      push();
      translate(pos.x,pos.y)
      rotate(angle);
      rectMode(CENTER);
      fill(txtcolor);
      rect(0,0,this.w,this.h);
      pop();
    }
    }
