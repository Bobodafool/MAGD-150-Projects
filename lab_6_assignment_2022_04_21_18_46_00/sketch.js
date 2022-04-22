//declaring variables
let x;
let y;
let ypos;
let ydirection=1;//top to bottom

//joey movement
var velocityY=0.0;//float
var gravity=1.5;//float

//ground dectection
var onGround=false;//boolean
var jumpSize=-30;//think backwards for y coordinates

function setup() {
  createCanvas(800,600);
  x=0;
  y=0;
 ypos=height-drawjoey
}

  function draw(){
   drawSky();
    movejoey();
   update();
    drawjoey();

}

function drawjoey(){
   push();
  fill(181,111,61);//brown color
  strokeWeight(4);
  rect(x+45,y+480,20,60,15);//right leg
  rect(x+15,y+480,20,60,15);//left leg
  quad(x+25,y+400,x+75,y+400,x+75,y+490,x+2,y+490);//body
  triangle(x+25,y+390,x+10,y+320,x+60,y+400)//ear 1
  rect(x+60,y+380,25,25)//mouth
  rect(x+25,y+360,50,50,15);//head
  triangle(x+35,y+360,x+30,y+300,x+65,y+360);//ear 2
  rect(x+50,y+420,50,20,15);//arm
  fill(0,0,0);//eye color
  ellipse(x+50,y+380,10,10)//eye
  pop();
  print (y);
}


function drawSky(){
   background(192,245,244);//bluesky
  strokeWeight(0);
  fill(75,219,137);//green
  rect(0,500,width,100)//grass
  fill(245,188,55);
  ellipse(700,100,100,100);//sun
  fill(0,0,0)
  textSize(45);
  text('JUMPING JOEY',25,100);
}
function update(){
  velocityY= gravity+velocityY;
  y=velocityY+y;
 
if((y+480)>= 500){
  y=0;
  //velocityY=0;
  onGround=true;
}else{
  onGround=false;
}
                 if (ypos>height||ypos<drawjoey){
                   ydirection*=-1;
                 }                         }


function movejoey(){
  if(keyIsPressed){
    if(keyCode===LEFT_ARROW){
     x=x-5;
    }
    else if(keyIsPressed){
      if(keyCode==RIGHT_ARROW){
        x=x+5;
      }
    }
}
  if (keyIsPressed){
    if(keyCode==UP_ARROW){
      if(onGround){}      
      jump();
      }
    
  }
 
}

function jump(){
  velocityY=jumpSize;
  print(onGround);


}

