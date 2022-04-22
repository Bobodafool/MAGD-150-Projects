//Variables for ellipse
var x,y;
var xspeed; //motion
let screenColor;
let screen = false;
let power = false;
let startstop = false;
let buttonColor1, buttonColor2;

function setup() {
  createCanvas(500, 500);
  background(35,40,112);
  //initializing variables in setup();
  x=87.5;
  y=height/2;
  xspeed =3;
  screenColor = color(94,248,211);
  buttonColor1=color(94,248,211);
  buttonColor2 = color(217,63,105);
  
  strokeWeight(10);
  line(225,50,200,25)//left antenae
  line(250,50,275,25)//right antenae

  fill(54,37,30);
  strokeWeight(8);
  triangle(125,400,250,400,125,450);//left tv foot
  triangle(275,400,395,450,395,400)//right tv foot
  strokeWeight(4);
  fill(181,138,109);
  rect(50,50,400,350);//outer tv part
  

 
}




function draw() {
  push();
  fill(screenColor);
rect(75,75,350,255);//tv screen
  fill(buttonColor1);
  ellipse(85,365,35,35)//green button
  textSize(10);
  fill(0,0,0);
  text('PUSH',71,370);
  fill(buttonColor2);
  rect(390,350,35,35);//red button
  textSize(8);
  fill(0,0,0);
  text('RECORD',390,370)
  pop();

 
 if (power){
   
  push();
  strokeWeight(2);
   fill(255);
  ellipse(x,y,25,25);//tv ball
  x+=xspeed; //move ellipse horizontally by speed variable
  //set conditional for ellipse touching the edges
 
  if(x-12.5 <=75 || x+12.5>=425){
    xspeed *=-1; //resets so ellipse begins off screen
  }
  pop();
     
   }
if(screen){
   screenColor = color(0,0,0);
  }
  else{
    
    screenColor= color(94,248,211);
  }

  //mouseover rect button
 if (mouseX>390 && mouseX<425 && mouseY>350 &&mouseY <385){
    buttonColor2=color(255);

 } else{
    buttonColor2=color(217,63,105); 

  if(dist(mouseX, mouseY,85, 365)<17.5){
    buttonColor1=color(255);
  } else{
    buttonColor1=screenColor; 
  }
    
}
}

function mousePressed(){
  if(dist(mouseX, mouseY,85, 365)<17.5){
    screen= !screen; } // toggles screen color
  
    if (mouseX>390 && mouseX<425 && mouseY>350 && mouseY <385)
   power = !power;
}