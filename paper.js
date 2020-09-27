class paper{
    constructor(x, y, radius){
        var options ={
            isStatic: false,
            restitution:0.3,
            friction:0,
            density:1.0
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(this.x, this.y,(this.radius-20)/2, options);
        World.add(world, this.body);
    }
    display(){
        var curcle = this.body.position;
        push();
        translate(curcle.x, curcle.y);
        rectMode(CENTER);
        strokeWeight(4);
        ellipse(0, 0, this.radius, this.radius);
        imageMode(CENTER);
        image(this.image, 0,0, this.radius, this.radius);
        pop();
    }
}