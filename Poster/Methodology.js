var canvas;
var img;
var elone;
var eltwo;
var elthree;
var elfour;
var elfive;
var elseven;

let font;



function preload(){
      font = loadFont('https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Bold.otf');
}

function setup(){

    canvas =  createCanvas(windowWidth,windowHeight, WEBGL);
    canvas.position(0, 100);

    // // enable easy cam
    // createEasyCam();
    //
    // // suppress right-click context menu
    // document.oncontextmenu = function() { return false; }

      //clear();

    textFont(font);


    elone = new posterbox(-350,-200,0,300,400,255, 255, 255,"/html/Theory.html");
    eltwo = new posterbox(-350,230, 0, 300, 400, 255,255,255,"/html/Theory.html")
    elthree = new posterbox(30,-300,0,400,200,255,255,255,"/html/Theory.html");
    elfour = new posterbox(30,15,0,400,380,255,255,255,"/html/Theory.html" );
    elfive = new posterbox(30,330,0,400,200,255,255,255,"/html/Theory.html");
    elsix = new posterbox(410,-200,0,300,400,255, 255, 255,"/html/Theory.html");
    elseven = new posterbox(410,230, 0, 300, 400, 255,255,255,"/html/Theory.html")
    //222, 220, 177
}

function draw(){

  background(255,255,255);

  translate(-50,0,0);

  draweone();

  drawetwo();

  drawthree();

  drawfour();

  drawfive();

  drawsix();

  drawseven();

}

function draweone(){

  elone.display();
  //elone.sizeup();
  elone.contentone();
    elone.contentonesizeup();

}

function drawetwo(){

  eltwo.display();
  eltwo.sizeup();

}

function drawthree(){

  elthree.display();
  elthree.sizeup();
}

function drawfour(){

  elfour.display();
  elfour.sizeup();
}

function drawfive(){
  elfive.display();
  elfive.sizeup();
}

function drawsix(){
  elsix.display();
  elsix.sizeup();
}

function drawseven(){
  elseven.display();
  elseven.sizeup();
}

function mousePressed(){

  elone.clicked();
  eltwo.clicked();
  elthree.clicked();

  // console.log("mousepressed");
  // console.log("mouseX=", mouseX-windowWidth/2);
  // console.log("mouseY=", mouseY);
  // console.log(elone.x)
  // console.log(elone.y)


}

class posterbox {
  constructor (x,y,z,w,h,r,g,b,link) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    this.h = h;
    this.r = r;
    this.g = g;
    this.b = b;
    this.xi = 0;
    this.yi = 0;
    this.link = link;
    this.random = random(0,100);
    this.colorpick = random(0,3);
    this.green = (0,255,13);
    this.red = (255,0,0);
    this.pink = (245, 66, 221);
    console.log(this.colorpick);
  }

  clicked(){
    if(mouseX-windowWidth/2> this.x-this.w/2 == true && mouseX-windowWidth/2 < this.x+this.w/2 == true && mouseY-windowHeight/2> this.y-this.h/2 == true && mouseY-windowHeight/2<this.y+this.h/2 == true){
      window.open(this.link, "_self");
      console.log("mouseclicked")
    }

    }

  display (){

    push();
    fill(this.r,this.g,this.b);
    translate(this.x,this.y,0);
    box(this.w, this.h,this.z);
    translate(8,8,-3);
    fill(0,150);
    noStroke();
    box(this.w, this.h,this.z);
    pop();
    push();
    textSize(30)
    // fill(255,255,255);
    // fill(0);
    // translate(this.x,this.y-150,1);
    // textAlign(CENTER, CENTER);
    // text("Methodology",0,0);
    pop();

    push();
    translate(this.x+this.random,this.y+this.random,-3);
    noFill();
    strokeWeight(5);
    // stroke(this.r-this.random,this.g-this.random,this.b);
    push();
    // if(this.colorpick > 0 === true && this.colorpick < 1 === true){
    //     stroke(0,255,13);
    //     console.log("0")
    // } else if(this.colorpick > 1 === true && this.colorpick < 2 === true){
    //       stroke(255,0,0);
    //       console.log("1")
    //   } else if(this.colorpick > 2 === true && this.colorpick < 3 === true){
    //         stroke(245, 66, 221);
    //         console.log("2")
    //     }
    stroke(255,0,100);
    box(this.w, this.h,0);
    pop();

    translate(2,2,-1)
    stroke(0,150);
    box(this.w, this.h,0);

    pop();


  }

  sizeup(){
    if(mouseX-windowWidth/2> this.x-this.w/2 == true && mouseX-windowWidth/2 < this.x+this.w/2 == true && mouseY-windowHeight/2> this.y-this.h/2 == true && mouseY-windowHeight/2<this.y+this.h/2 == true){

      push();
      fill(0,30);
      noStroke();
      box(windowWidth,windowHeight,2);
      pop();

      push();
      fill(this.r,this.g,this.b);
      translate(this.xi, this.yi,0);
      box(this.w+200, this.h+200,2);
      translate(8,8,-3);
      fill(0,150);
      noStroke();
      box(this.w+200, this.h+200,2);
      textSize(40)
      // fill(255,255,255);
      // fill(0);
      // translate(this.xi,this.yi-250,4);
      // textAlign(CENTER, CENTER);
      // text("Methodology",0,0);
      pop();

      push();
      stroke(this.r-this.random,this.g-this.random,this.b);
      strokeWeight(20);
      line(-windowWidth/2,this.yi, this.xi,this.yi);
      translate(0,4,-1);
      stroke(0,150);
      line(-windowWidth/2,this.yi, this.xi,this.yi);
      pop();

      push();
      stroke(this.r-this.random,this.g-this.random,this.b);
      strokeWeight(5);
      line(-windowWidth/2+18,this.yi-150, this.xi-750,this.yi-150);
      line(-windowWidth/2+20,this.yi-150, -windowWidth/2+20,this.yi-4);
      stroke(0,150);
      translate(0,3,-1);
      line(-windowWidth/2+18,this.yi-150, this.xi-750,this.yi-150);
      translate(3,0,-1);
      line(-windowWidth/2+20,this.yi-150, -windowWidth/2+20,this.yi-4);
      pop();

      push();
      fill(this.r,this.g,this.b);
      translate(this.xi-600,this.yi-150,2);
      box(300,100,0);
      fill(0,150);
      translate(4,4,-1);
      box(300,100,0);
      pop();

  }



}

  contentone(){
    //this will be the content for introduction
    push();
    fill(0);
    translate(-140,-100);
  //  textAlign(CENTER, CENTER);
  textSize(11);
    text("We all know what human perception is, \nor at least we know what it is used for. \nSince each individual use it every day \nto perceive the things they interact with, \neither it be people or physical objects. \nWith the development of technology,\na new kind of vision has emerged, \nnamely Computer vision. \nComputer vision, \nalso known as object recognition, \nis built upon machine learning algorithms.\nMachine learning is a way \nin which you can train an algorithm \nto make decisions on its own. \nBut what does this really mean?",this.x,this.y);
    pop();
  }

  contentonesizeup(){
    //this will be the content for introduction

    if(mouseX-windowWidth/2> this.x-this.w/2 == true && mouseX-windowWidth/2 < this.x+this.w/2 == true && mouseY-windowHeight/2> this.y-this.h/2 == true && mouseY-windowHeight/2<this.y+this.h/2 == true){

      push();
      fill(0,30);
      noStroke();
      box(windowWidth,windowHeight,2);
      pop();

      push();
      fill(this.r,this.g,this.b);
      translate(this.xi, this.yi,0);
      box(this.w+200, this.h+200,2);
      translate(8,8,-3);
      fill(0,150);
      noStroke();
      box(this.w+200, this.h+200,2);
      translate(this.xi,this.yi-250,4);
      push();
      fill(0);
      translate(-200,100);
      textSize(15);
      text("We all know what human perception is, \nor at least we know what it is used for. \nSince each individual use it every day \nto perceive the things they interact with, \neither it be people or physical objects. \nWith the development of technology,\na new kind of vision has emerged, \nnamely Computer vision. \nComputer vision, \nalso known as object recognition, \nis built upon machine learning algorithms.\nMachine learning is a way \nin which you can train an algorithm \nto make decisions on its own. \nBut what does this really mean?",0,0);
      pop();
      pop();

      push();
      stroke(this.r-this.random,this.g-this.random,this.b);
      strokeWeight(20);
      line(-windowWidth/2,this.yi, this.xi,this.yi);
      translate(0,4,-1);
      stroke(0,150);
      line(-windowWidth/2,this.yi, this.xi,this.yi);
      pop();

      push();
      stroke(this.r-this.random,this.g-this.random,this.b);
      strokeWeight(5);
      line(-windowWidth/2+18,this.yi-150, this.xi-750,this.yi-150);
      line(-windowWidth/2+20,this.yi-150, -windowWidth/2+20,this.yi-4);
      stroke(0,150);
      translate(0,3,-1);
      line(-windowWidth/2+18,this.yi-150, this.xi-750,this.yi-150);
      translate(3,0,-1);
      line(-windowWidth/2+20,this.yi-150, -windowWidth/2+20,this.yi-4);
      pop();

      push();
      fill(this.r,this.g,this.b);
      translate(this.xi-600,this.yi-150,2);
      box(300,100,0);
      fill(0,150);
      translate(4,4,-1);
      box(300,100,0);
      pop();
  }
}

  contenttwo(){
    //this will be the content for data
  }

  contentthree(){
    //this will be the content for "what is computer vision"
  }

  contentfour(){
    //This will be the content for Korean culturla objects
  }

  contentfive(){
    //this will be the content for images
  }

  contentsix(){
    //this will be the content for methodology
  }

  contentseven(){
    //This will be the content for results
  }

}
