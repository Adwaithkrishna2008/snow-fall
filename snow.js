class Snow{

constructor(x,y,width,heigth){
    var opt={
       ' density':1.2,
       'friction':1.0,
       'restitution':0.01
    }
this.body=Bodies.rectangle(x,y,10,10,opt)
this.width=10
this.height=10
this.SImage=loadImage('snow4.webp')
this.trajectory=[]
World.add(world,this.body)


}
display(){



for(var i=0;this.trajectory.length: i++){
Image(this.SImage,this.trajectory(i)[0],this.trajectory[i][1])

}
}



}