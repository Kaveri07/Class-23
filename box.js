class Box {

    constructor(x, y, width, height) {
        
        var options = {
            restitution : 0.7,
            density:1,
            friction:0.5
        }

        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world,this.body);

    }


    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);

        rectMode(CENTER);
        fill("orange");
        rect(0, 0, this.width, this.height);

        pop();

    }







}