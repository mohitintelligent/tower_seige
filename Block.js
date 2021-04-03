class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png");
      this.visibility=225
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      if(this.body.speed<3){
      push();
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
      imageMode(CENTER);
      image(this.image, pos.x,pos.y,  0, 0);
      pop();
      }else{
        World.remove(world,this.body);
        
        push();
        this.visibility=this.visibility-5
        tint(225,this.visibility)
        image(this.image, pos.x,pos.y,  0, 0);
        pop();
      }
    }
}