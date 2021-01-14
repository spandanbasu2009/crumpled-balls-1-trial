class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x = 100;
        this.y = 690;
        this.r = 10;
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
    }
    display(){
        var paperpos = this.body.position;

        push();
        translate(paperpos.x,paperpos.y);
        ellipseMode(RADIUS);
        strokeWeight(3);
        fill(255,0,255);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}