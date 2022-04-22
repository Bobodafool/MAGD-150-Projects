function setup() {
  createCanvas(400, 1000);
  
}


function draw() {
  let a=color(220,250,249)
  
  push();
 print(hex(40,11,87.8));
  background(40,11,87.8);//dark purple background color
  pop();
  
  stroke(126,151,237,93)//blue outline on planets
   //planet 1 shadow
  fill(209,0,224,88)
  strokeWeight(0)
  ellipse(270,110,68,68)
  fill(240,182,232);
  //planet 1
  strokeWeight(3)
  ellipse(275,100,70,70)
  
  //planet 2 shadow
  strokeWeight(0)
  fill(57,193,230)//bright blue planet shadow color
  ellipse(120,335,152,152)
fill(135,185,204)//blue green planet
  strokeWeight(5)
  ellipse(125,325,150,150)//planet 2
 
  //planet 3 shadow
  strokeWeight(0)
  fill(224,9,91)
  ellipse(265,755,90,90)//dark pink planet shadow color
  //planet 3
  strokeWeight(2)
  fill(240,149,202)//light pink planet color
  ellipse(270,750,85,85)
  
  //planet 4 shadow
  strokeWeight(0)
  fill(106,204,136)//dark green planet shadow colr
  ellipse(115,880,155,155)
  //planet 4
  strokeWeight(6)
  fill(201,240,231)//light green planet color
  ellipse(120,875,152,152)
  
  //color mode change
  //rocket top
  stroke(142,145,64)
  strokeWeight(2);
  push();
  colorMode(HSB)
  fill(62,61,87)//rocket top's color
  triangle(250,310,275,355,225,355)
  pop();
  
  //rocket sparkstroke
  noFill();
  stroke(a)//stroke color
  bezier(250,575,210,590,390,600,210,700)
  
  //rocket tail
stroke(142,145,64)
  fill(217,222,87)//yellow fill color rocket tail
  arc(250,500,100,100,radians(130),radians(40));
  fill(184,45,88)
  beginShape(TRIANGLE_STRIP);
  vertex(190,575)
  vertex(225,500)
  vertex(250,575)
  vertex(275,500)
  vertex(310,575)
  endShape();
  
  //rocket body
  fill(2,41,87)
  rect(200,400,100,100)
  fill(184,55,88)
  quad(225,355,275,355,300,400,200,400)
  
  //rocket window border
   translate(50, 50);
stroke(142,145,64);
  fill(207,61,57)
beginShape();
  fill(178,76,58,87)
// Exterior part of shape, clockwise winding
vertex(165, 360);
vertex(235, 360);
vertex(235, 440);
vertex(165, 440);
// Interior part of shape, counter-clockwise winding
  fill(207,51,87)
beginContour();
vertex(170,365);
vertex(230,365);
vertex(230,435);
vertex(170,435);
endContour();
endShape(CLOSE);
  
  //rocket window
  fill(255)
  ellipse(200,400,45,45)
  
  strokeWeight(5)
  
  
}