class Dustbin{
    constructor(x,y,width,height){
        var options={
            'restitution':0.5,
            'friction':1.0,
            'density':1.2,
            'isStatic':true
        }
        this.bodyBottom=Bodies.rectangle(x,y+230,width,20,options);
        this.bodyLeft=Bodies.rectangle(x-40,y+200,20,height,options);
        this.bodyRight=Bodies.rectangle(x+40,y+200,20,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("dustbinImg.png");
        World.add(world,this.bodyBottom);
        World.add(world,this.bodyLeft);
        World.add(world,this.bodyRight);
    }
    display(){
        var posB=this.bodyBottom.position;
        var posR=this.bodyRight.position;
        var posL=this.bodyLeft.position;
        var angleB=this.bodyBottom.angle;
        var angleR=this.bodyRight.angle;
        var angleL=this.bodyLeft.angle;
        push();
        translate(posB.x,posB.y);
        rotate(angleB);
        rectMode(CENTER);
        fill("white");
        rect(0,0,this.width,20);
        pop();

        push();
        translate(posR.x,posR.y);
        rotate(angleR);
        rectMode(CENTER);
        fill("white");
        rect(0,0,20,this.height);
        pop();

        push();
        translate(posL.x,posL.y);
        rotate(angleL);
        rectMode(CENTER);
        fill("white");
        rect(0,0,20,this.height);
        pop();
    }
}