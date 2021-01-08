class paper {
    constructor (x,y,r){
    var options={
        'restitution':0,
        'friction':0,
        'density':1
    }
    this.body = Bodies.circle(x, y, r, options);
    World.add(world, this.body);
        }
        display(){
          console.log(this.r);
          var pos =this.body.position;
          push();
          translate(pos.x, pos.y);
          ellipseMode(CENTER);
          ellipse(0, 0,this.r);
          pop();
        }
      };