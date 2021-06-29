class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 10
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA =this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            stroke(70);
            //if(pointA.x < 220 ){
                if(pointA.x < 220 ){
                    //line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                    //line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
                  
    line(pointA.x-10, pointA.y, pointB.x-30, pointB.y);
            line(pointA.x-20, pointA.y,pointB.x+30, pointB.y-2);
            
           pop () 
        }
        //image(this.image,200,20)
        //image(this.sling2,170,20)
        
    }
    
}
    }
