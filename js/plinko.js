class Plinko{
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.w = 20;
        this.h = 20;
        this.body = Bodies.circle(x,y,10,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        ellipseMode(CENTER);
        fill(255);
        ellipse(pos.x,pos.y,this.w,this.h);
    }
}