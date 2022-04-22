function setup() {
  createCanvas(200, 800);
  
 frameRate(10)
}

function draw() {
  background(252,154,109);
  
  //bubble wand
  noFill()
  strokeWeight(5); line(mouseX,mouseY+12,mouseX,mouseY+45)
  
  
  
  let a=20;
  print('The value of a is'+a)//prints "The value of x is 10"
  c2=100
  print('The value of c2 is'+c2);
  
  let c=mouseY;
  let d= mouseX;
  let e= pmouseY;
  
  fill(151,252,231,200)
ellipse(c2,c,d,e)
  ellipse(c2,c,d,e*2)
  
  fill(59,61,61,24)
  ellipse(pmouseX,pmouseY,a,a)//bubble shadow
  fill(242,251,252)
  ellipse(pmouseX,pmouseY,a,a)//wand's bubble
  
}
//
//https://p5js.org/reference/#/p5/map
//https://p5js.org/reference/#/p5/print