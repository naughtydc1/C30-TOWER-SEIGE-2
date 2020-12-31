class Box{
    constructor(x,y,width,height){
        var options = {
            //'isStatic': true,
            'restitiution':0.8,
            'friction':500.0,
            'density':0.5
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        rect(pos.x+50,pos.y,this.width,this.height);
        fill("white");
        pop();
    }
    
}