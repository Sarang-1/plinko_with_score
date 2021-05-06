class Particle{
    constructor(x,y){
        var options = {
            
            restitution: 0.7,
            friction: 0.0
        }
        this.w = 30;
        this.h = 30;
        this.body = Bodies.circle(x,y,15,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(0,0,this.w,this.h);
        pop();
    }
    
}
