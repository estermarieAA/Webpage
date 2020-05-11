let numbers = ["o",0,9,8,7,6,5,4,3,2,1];
let numbers_a = [0,"o",9,8,7,6,5,4,3,2,1];
let numbers_b = [0,9,"o",8,7,6,5,4,3,2,1];
let numbers_c = [0,9,8,"o",7,6,5,4,3,2,1];
let numbers_d = [0,9,8,7,"o",6,5,4,3,2,1];
let numbers_e = [0,9,8,7,6,"o",5,4,3,2,1];
let numbers_f = [0,9,8,7,6,5,"o",4,3,2,1];
let numbers_g = [0,9,8,7,6,5,4,"o",3,2,1];
let numbers_h = [0,9,8,7,6,5,4,3,"o",2,1];
let numbers_i = [0,9,8,7,6,5,4,3,2,"o",1];
let numbers_j = [0,9,8,7,6,5,4,3,2,1,"o"];
let diagnosis_zero = [0,1];
let diagnosis_one = [1,0];


let i=0;
let y=0;


function setup(){
createCanvas(windowWidth,windowHeight);
background(255);
frameRate(10);
}

function draw(){

  textSize(30);
  text("Poem no. 4", windowWidth/2-210,windowHeight/2-350);
  textSize(15);
  text("The problem concerning the patient's countenance", windowWidth/2-210, windowHeight/2-310);

  textSize(18);
  text("Diagnosis: ", windowWidth/2-210, windowHeight/2 + 210);

  noStroke();
  rect(windowWidth/2-100, windowHeight/2 + 198,30,14);
  text(diagnosis_zero[y],windowWidth/2-100, windowHeight/2 + 210);
    text(":",windowWidth/2-90, windowHeight/2 + 210);
        text(diagnosis_one[y],windowWidth/2-85, windowHeight/2 + 210);

text("26.10.1911",windowWidth/2-210, windowHeight/2 + 240);
text("Above diagnosis by the primary doctor Yi Sang and this computer", windowWidth/2-210, windowHeight/2 + 280)

translate(0,-50);
push();


  y++
  if(y>1){
    y=0;
  }


// if(mouseX>windowWidth/2-300 && mouseX < windowWidth/2+300 && mouseY>windowHeight/2-300 && mouseY<windowHeight/2+300){
//   if(mouseIsPressed){
//

   rowone();

  translate(40,0);
  rowone();

  translate(40,0);
  rowone();

  translate(40,0);
  rowone();

  translate(40,0);
  rowone();

  translate(40,0);
  rowone();


  translate(40,0);
  rowone();

  translate(40,0);
  rowone();

  translate(40,0);
  rowone();

  translate(40,0);
  rowone();

  translate(40,0);
  rowone();

  // }

  pop();
// }

  if(mouseIsPressed){
  i=0;
  y=0;

  push();
  fill(255,255,255);
  rect(windowWidth/2+169, windowHeight/2 + 280, 200,100);
  pop();
  }
}

function rowone(){
  textSize(25);
  push();
  fill(255);
  noStroke();
  rect(windowWidth/2-200,windowHeight/2-220,25,25);
  rect(windowWidth/2-200,windowHeight/2-180,25,25);
  rect(windowWidth/2-200,windowHeight/2-140,25,25);
  rect(windowWidth/2-200,windowHeight/2-100,25,25);
  rect(windowWidth/2-200,windowHeight/2-60,25,25);
  rect(windowWidth/2-200,windowHeight/2-20,25,25);
  rect(windowWidth/2-200,windowHeight/2+20,25,25);
  rect(windowWidth/2-200,windowHeight/2+60,25,25);
  rect(windowWidth/2-200,windowHeight/2+100,25,25);
  rect(windowWidth/2-200,windowHeight/2+140,25,25);
  rect(windowWidth/2-200,windowHeight/2+180,25,25);

  pop();

  text(numbers[i],windowWidth/2-200,windowHeight/2-200);
  text(numbers_a[i],windowWidth/2-200,windowHeight/2-160);
  text(numbers_b[i],windowWidth/2-200,windowHeight/2-120);
  text(numbers_c[i],windowWidth/2-200,windowHeight/2-80);
  text(numbers_d[i],windowWidth/2-200,windowHeight/2-40);
  text(numbers_e[i],windowWidth/2-200,windowHeight/2);
  text(numbers_f[i],windowWidth/2-200,windowHeight/2+40);
  text(numbers_g[i],windowWidth/2-200,windowHeight/2+80);
  text(numbers_h[i],windowWidth/2-200,windowHeight/2+120);
  text(numbers_i[i],windowWidth/2-200,windowHeight/2+160);
  text(numbers_j[i],windowWidth/2-200,windowHeight/2+200);

  i++;
  if(i>11){
    i=0;
  }
}
