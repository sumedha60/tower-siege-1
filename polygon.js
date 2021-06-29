class polygon{
constructor(x,y,radius){
    this.body = Bodies.circle(x, y,radius);
    this.image=loadImage("polygon.png")
       
         World.add(world, this.body);
      
}

    display(){
        //var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y); 
        //translate(this.body.position.x, this.body.position.y);
       // rotate(angle);
       imageMode(CENTER);
       image(this.image, 0,0, 60,70);
       //this.image, 0,0, 60,70
        pop();
      }

}

