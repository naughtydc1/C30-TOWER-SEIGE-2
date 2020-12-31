class BlueBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
    }

    display(){
    if(this.body.speed < 3){
     fill("blue");
    super.display(); 
    }
    else{
    World.remove(world,this.body);
    push();
    this.visiblity = this.visiblity -0.01;
    tint(255,this.visiblity);
    rect(this.x,this.y,20,30);
    pop();
    }
      
    }
}