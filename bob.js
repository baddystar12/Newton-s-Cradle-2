class Bob {
    constructor(x,y, radius){
        var bob_options ={
            friction : 0.5,
            density:2,
            restituition:1

        }
        this.body = Matter.Bodies.circle(x,y,this.radius/2, bob_options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        fill("royalblue");
        ellipseMode(CENTER);
        ellipse(position.x,position.y,this.radius,this.radius);
    }
}