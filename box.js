class Box {
    constructor(x,y,width,height){
    var options ={
       restitution:1,
       friction:0.5,
      
    }
    this.Visibility = 355
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.w = width;
    this.h = height;
    
    World.add(world,this.body);
    }
    display(){
       if(this.body.speed < 3){
         var pos = this.body.position;
    var ang = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(ang);
    strokeWeight(4);
    stroke("red");
    fill("yellow");
    rectMode(CENTER);
    rect(0,0,this.w,this.h);
    pop();

       }
    else{
       World.remove(world,this.body);
      push();
      this.Visibility = this.Visibility - 5;
      tint(355,this.Visibility);
      pop();
      }
    }

    score(){
      if (this.Visiblity < 0 && this.Visiblity > -105){
        score++;
      }
    }
  
    
    }