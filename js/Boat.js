class Boat {

  constructor(x, y, width, height,boatpos) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: false
    };
    this.width = width;
    this.height = height;
    this.boatpos = boatpos;
    this.image = loadImage("./assets/boat.png");
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0, this.boatpos, this.width, this.height)
    pop();
  }
}
