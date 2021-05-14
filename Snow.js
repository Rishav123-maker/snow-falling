class Snow{
    constructor(x,y,width,height,angle){
      var options = { 
        density: 1, 
        friction: 0.5
      }
  
      this.body = Bodies.circle(x, y, width, height,angle, options);
      this.width = width;
      this.height = height;
      this.image = loadAnimation("snow4.webp","snow5.webp");
      World.add(world, this.body);
    }

    display(){
      var position = this.body.position;
      var angle = this.body.angle;
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y);
    }
}