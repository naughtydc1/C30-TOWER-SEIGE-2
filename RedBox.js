class RedBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
    }

    display(){
        if(this.body.speed < 3){
         fill("red");
        super.display(); 
        }
        else{
        World.remove(world,this.body);
        push();
        this.visibility = this.visibility -0.01;
        tint(255,this.visibility);
        rect(this.x,this.y,20,30);
        pop();
        }
          
        }
    }