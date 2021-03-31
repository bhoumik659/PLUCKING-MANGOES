class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.004,
            length:1
        }
        this.rope=Matter.Constraint.create(options)
        World.add(world,this.rope)
 
    }
    fly(){
        this.rope.bodyA=null;
    }

    attach(bodyA){
        this.rope.bodyA=bodyA;
    }
    display(){
        if(this.rope.bodyA){
        strokeWeight(4)
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.pointB.x,this.rope.pointB.y)
        }
    }
 }

