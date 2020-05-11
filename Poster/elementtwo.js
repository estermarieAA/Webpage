var canvastwo;
var img;

function setup(){
canvastwo =  createCanvas(windowWidth,windowHeight);
canvastwo.position(windowWidth/2-150, windowHeight/2-100);
  background(255,0,0);
}

function draw(){
  draweone();
  drawetwo();
}

function draweone(){
  fill(255,255,255);
rect(width/2-90,height/2-50,80,40);
fill(255,0,0);
ellipse(width/2-90,height/2-50, 50,50 )
}

function drawetwo(){
  fill(255,255,255);
  translate(width/2-90,height/2);
rect(width/2-90,height/2-50,80,40);
fill(255,0,0);
ellipse(width/2-90,height/2-50, 50,50 )
}
