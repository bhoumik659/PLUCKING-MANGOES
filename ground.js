class Ground
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true			
			}
		
		this.width=width
		this.height=height
		this.body=Bodies.rectangle(x, y, width, height , options);
        this.image = loadImage("unnamed.png")
 		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			imageMode(CENTER)
            image(this.image,0,0,1000)
			
			pop()
			
	}

}
