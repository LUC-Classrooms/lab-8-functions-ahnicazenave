function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200);

  //this is a call to myShape()
  myShape(width/2, height/2, 1);
  myShape(130, 200, .5);
  myShape(470, 200, .5);
  // myShape() takes three arguments
  // arg1: horizontal location
  // arg2: vertical location
  // arg3: scale factor (1 is full size)
  /* add two more calls to myShape that draw your shape in different locations
  */
  
}

function myShape(x, y, s){
 push(); 
 translate(x, y);
 scale(s); 
 strokeWeight(80);
 stroke(246);
 //arm left
 strokeWeight(1);
 stroke(64);
 fill(64);
 rect(-80, 10, 160, 5);
 //body 2
 fill(246);
 ellipse(0, 110, 110);
 //body 1
 fill(246);
 ellipse(0, 20, 85);
 //head
 fill(246);
 ellipse(0, -50, 60);
 fill(64);
 ellipse(-10, -60, 7);
 ellipse(10, -60, 7);
 fill(255, 165, 0);
 triangle(0, -50, 15, -45, 0, -40);
  
 pop(); // dispose of the layer
}
