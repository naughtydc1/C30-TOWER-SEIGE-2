class Ball{
    constructor(x,y,radius){
        var options = {
            'restitiution':0.8,
            'friction':1.0,
            'density':1.0,
        }
        this.image = loadImage("hexagon2-removebg-preview.png")
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("purple");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,50,50);
    }
}