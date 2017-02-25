var cityindex = 3;// Start from Milan

var xspacing = 80;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0.0;      // Start angle at 0
var amplitude = 20.0; // Height of wave
var period ;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave
var a=300;  // current position
var mySpeed;//the speed of moving
var maskcolor
var backgroundcolor
var den//Distances bitween PM10 dots.

  var citylist = ['BARCELONA',
                 'HELSINKI',
                 'LONDON',
                 'MILAN',
                 'PARIS',
                 'STOCKHOLM'];
    
var pmlist = ['26',
              '13',
              '80',
              '38',
              '60',
              '42'];
var speedlist = ['5',
              '6',
              '1',
              '4',
              '2',
              '3'];
var denlist = ['26',
              '13',
              '80',
              '38',
              '60',
              '42'];

var maskcolorlist = ['#9192D1',
              '#8F8FE3',
              '#D1D2E5',
              '#9C9FD0',
              '#BEBFDB',
              '#ACAFD5'];
 var backgroundlist = ['#696BC1',
              '#7A7ADD',
              '#3B3E84',
              '#5B5EB1',
              '#484993',
              '#5255A4'];

function preload() {
 myFont = loadFont('libraries/Lato-Regular.ttf');
    
 mask = loadImage("Image/mask.png")
BARCELONA = loadImage("Image/0.png")
HELSINKI = loadImage("Image/1.png")
LONDON = loadImage("Image/2.png")
MILAN = loadImage("Image/3.png")
PARIS = loadImage("Image/4.png")
STOCKHOLM = loadImage("Image/5.png")
}



function setup() {
  createCanvas(windowWidth,windowHeight);
    
  w = windowWidth+1000;
  yvalues = new Array(floor(w/xspacing));
  

}

function draw() {
    
 //match cities to numbers
    
   maskcolor=maskcolorlist[cityindex];
   den=4000/pmlist[cityindex]
   mySpeed=speedlist[cityindex];
   
   backgroundcolor=backgroundlist[cityindex];    

if(mouseIsPressed){
  for(var i=0; i<mySpeed; i++){
  a=a-1; 
  
  background(backgroundcolor);
  }
 renderWave(a);
 
    
  }else{
    for(i=0; i<3; i++){
    a=a+1; 
   
    background(backgroundcolor);
  }
   renderWave(a);
  }
     //dark rect
  if(a>=1.3*windowHeight & a<2*windowHeight){
    fill(0,0,0,80);
    noStroke();
    rect(0,0,windowWidth, windowHeight);
 
  }
  
  if(a>=2*windowHeight){
    fill(0,0,0,100);
    noStroke();
    rect(0,0,windowWidth, windowHeight);
    
  }
 // text
if(a>=1.3*windowHeight & a<2*windowHeight){
fill(255,0,100);
    noStroke();
	  textSize(30);
  	textAlign(CENTER);
  	textFont('Oswald');
	  text("you are dying!", windowWidth/2, windowHeight-90)
	  text("Take a deep breath to servive!", windowWidth/2, windowHeight-50)
  }
  
  if(a>=2*windowHeight){
    fill(255,0,100);
    noStroke();
	textSize(30);
  	textAlign(CENTER);
  	textFont('Oswald');
	text("Sorry, you can't servive in this city!", windowWidth/2, windowHeight-90)
	 text("Try another one!", windowWidth/2, windowHeight-50)
 
  }
    
 // match cities to numbers 
 textpm(cityindex);
 textcity(cityindex);
 textmask(cityindex);
//pictures

 imageMode(CENTER)
 image(mask,width/2-50,height/5+150,mask.width/3,mask.height/3)
 
 textFont('Oswald');
 noStroke()
 fill('#e4e7f9')
 textSize(20)
 text('X',width/2+20,height/5+160)
 textSize(15)
 text("PM10",width/2,height/5+126) 
   
  imageMode(CORNER)
  image(BARCELONA,width/2-370,height/5+20,BARCELONA.width/3.5,BARCELONA.height/3)
  image(HELSINKI,width/2-210,height/5+20,HELSINKI.width/3.5,HELSINKI.height/3)
  image(LONDON,width/2-75,height/5+20,LONDON.width/3.5,LONDON.height/3)
  image(MILAN,width/2+45,height/5+20,MILAN.width/3.5,MILAN.height/3)
  image(PARIS,width/2+150,height/5+20,PARIS.width/3.5,PARIS.height/3)
  image(STOCKHOLM,width/2+250,height/5+20,STOCKHOLM.width/3.5,STOCKHOLM.height/3)

}
//wave line

function calcWave(period) {
  
  dx = (TWO_PI / period) * xspacing;//chage the motivation of lines.
  theta += 0.04;//chage the speed of wave
  // For every x value, calculate a y value with sine function
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave(yinter) {
  // A simple way to draw the wave with an ellipse at each location
    calcWave(100);//function calcWave(period) (period:How many pixels before the wave repeats)
    calcWave(1000);
  
  for (var x = 0; x < yvalues.length; x++) {
    var xdot=x*xspacing;
    var ydot=yinter/2+yvalues[x];
    
    var mypar = 50;

    for(y=-600; y<=height*15; y+=den){
      for(x=0; x<width; x+=den){
        stroke(14,57,100);
         strokeWeight(4);
         
         line(x,ydot-y+50,x+10,ydot-y+50); 
         line(x+5,ydot-y+45,x+5,ydot-y+55);
        }
      }
  }
 
    push();
    noStroke();
  fill(maskcolor);
  //fill(224,223,239);
   beginShape();
    vertex(windowWidth, windowHeight);
    vertex(0, windowHeight);
  for (var x = 0; x < yvalues.length; x++) {
    var xdot=x*xspacing;
    var ydot=yinter/2+yvalues[x];
     vertex(xdot, ydot); 
  }
     endShape(CLOSE);
    pop();
    
}
//cities name
function textcity(index){
  
  textAlign(CENTER) 
  noStroke()
  fill(255,0,100);
  
  textFont('Poppins')  
  textSize(50);
  text(citylist[index],width/2,height/5);   
}
// PM 10
function textpm(index){
   
  textAlign(CENTER) 
  noStroke()
  fill('#e4e7f9');
  textFont('Oswald')
  textSize(40);
  text(pmlist[index], width/2,height/5+105) 
}
// Numbers of masks
function textmask(index){
    textAlign(CENTER) 
   noStroke()
  fill('#e4e7f9');
  //textFont("Teko")
  textFont('Oswald') 
  textSize(20);
  text(round((pmlist[index]-5)/10), width/2+55,height/5+160) 
}
//click the different cities
function mouseClicked() {
    
 if( mouseX> (width/2-370) && mouseX< (width/2-370)+BARCELONA.width/3.5 && mouseY>height/5+20 && mouseY< height/5+20+BARCELONA.height/3 ){
    
        cityindex = 0
        a=300;
        }
 if( mouseX> (width/2-210) && mouseX< (width/2-210)+HELSINKI.width/3.5 && mouseY>height/5+20 && mouseY< height/5+20+HELSINKI.height/3 ){
    
       cityindex = 1
       a=300;
        }
 if( mouseX> (width/2-75) && mouseX< (width/2-75)+LONDON.width/3.5 && mouseY>height/5+20 && mouseY< height/5+20+LONDON.height/3 ){
    
        cityindex = 2
        a=300;
        } 
 if( mouseX> (width/2+45) && mouseX< (width/2+45)+MILAN.width/3.5 && mouseY>height/5+20 && mouseY< height/5+20+MILAN.height/3 ){
    
       cityindex = 3
       a=300;
        } 
 
 if( mouseX> (width/2+150) && mouseX< (width/2+150)+PARIS.width/3.5 && mouseY>height/5+20 && mouseY< height/5+20+PARIS.height/3 ){
    
       cityindex = 4
       a=300;
        } 
    
 if( mouseX> (width/2+250) && mouseX< (width/2+250)+STOCKHOLM.width/3.5 && mouseY>height/5+20 && mouseY< height/5+20+STOCKHOLM.height/3 ){
    
        cityindex = 5
        a=300;
        }
}


function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
    
     
}




