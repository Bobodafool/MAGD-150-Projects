function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(60);

  //white of moon
  fill(255)
  strokeWeight(0)//strokeweight none
  ellipse(300,55,100,100)
  
  //darkside of moon
  fill(60)
  ellipse(275,60,75,75)
  
  //building 1
  fill(200)
  strokeWeight(2)
  rect(250,125,150,100)
  //window 1
  strokeJoin(ROUND)
  fill(255)
  strokeWeight(2)
  rect(280,145,50,10)
  //window 2
  rect(330,178,50,10)
  //window 3
  rect(380,145,10,10)
  //window 3
  rect(350,145,10,10)
  
  //building 2
  
  fill(100)//building 2 color
 //building 2 strokeWeight(2) //strokeweight 2
rect(20,100,50,100)
fill(200)
  //window 1
  fill(255)
  rect(30,120,10,10)
  //window 2
  rect(50,150,10,10)
  //window 3
  rect(30,170,10,10)
  
  //building 3

  strokeWeight(4)//strokeweight 4
  strokeJoin(BEVEL); //Bevel the stroke corners
  fill(125)
  rect(55,150,65,150)
  //window1
  fill(255)
  rect(70,170,18,18)
 
  //building 4
  
  fill(150)//building 4's color
  strokeWeight(8)
  rect(200,110,75,200)
  //window 1
  fill(255)
  rect(220,130,20,20)
  //window 2
  rect(240,160,20,20)
  
  //building 5
  fill(190)
  strokeWeight(3)
  rect(135,128,45,100)
  //building roof
  fill(100)
  triangle(160,100,180,128,135,128)
  //window 1
  fill(255)
  ellipse(156,150,20,20)
  
  point(315,45)//moon eye
  point(330,45)//moon eye
  strokeWeight(3)
 
 strokeCap(ROUND); line(322,50,318,65)//moon nose
  line(318,75,340,68)//moon mouth
}