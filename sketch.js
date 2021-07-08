
var Bg,snow_I,snow;




function setup() {
  createCanvas(800,400);
 snow =new Snow(400, 200, 50, 50);
//snow.Add(Bg);
}

function preload(){
  Bg=loadImage("snow3.jpg");
//snow_I=loadImage("snow4.webp");
console.log("Ok")
}





function draw() {
  background(Bg);  
 
 
 
 
  drawSprites();



}