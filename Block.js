class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.block = loadImage("block.png");
      World.add(world, this.body);
    }
    display(){
      if(this.block.speed < 5){
        block.display();
  }
  else{

    World.remove(world, this.block);

    push();
    var pos= this.body.position;
    tint(255, this.visibilty); 
    imageMode(CENTER);
    image(this.block,pos.x,pos.y,this.width, this.height);
    this.visibilty = this.visibilty1  ;
    pop();
  }

      
    }
}