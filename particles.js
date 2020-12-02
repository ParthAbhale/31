class Particles{
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x,y,r,{isStatic:false})
        this.color = color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body)
    }
    display(){
        var position = this.body.position
        push()
        translate(position.x,position.y)
        noStroke()
        fill(this.color)
        ellipse(0,0,this.r,this.r)
        pop()
    }
}