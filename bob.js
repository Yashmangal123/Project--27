class Bob {

    constructor(x,y){
        var options = {
            isStatic: false,
            restitution: 1,
            friction: 0,
            density: 6,
        }
        this.body = Bodies.circle(x,y,30,options);
        World.add(world, this.body);

        console.log(this.body);
    
    }
    
    display(){
        push();
        ellipseMode(RADIUS);
        fill("silver");
        ellipse(this.body.position.x,this.body.position.y,30,30);
        pop();
    }
    
    }