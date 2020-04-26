class Chain {
constructor(body1,body2){
    var c_option={
      bodyA:body1,
      bodyB:body2,
      length:30,
      stiffness:0.5
    }
   this.chain= Matter.Constraint.create(c_option);
   World.add(world,this.chain);
   console.log("chain "+this.chain);
}
display(){
  stroke("yellow");
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
}

}