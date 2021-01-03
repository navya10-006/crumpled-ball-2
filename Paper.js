class Paper{
    constructor(x,y,r){
        var options={
            'restitution':0.3,
            'friction':0.5,
            'density':1.6,
            isStatic:false
        }
        this.body =Matter.Bodies.rectangle(x,y,r,r,options);
        this.width=r;
        this.height=r;
        this.image=loadImage("paperImg.png");
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill("white");
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}