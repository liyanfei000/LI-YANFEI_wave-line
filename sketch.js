
var xspacing = 15;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0.0;      // Start angle at 0
var amplitude = 75.0; // Height of wave
var period ;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave
var a=600;  // current position
var myFont;
function preload() {
 myFont = loadFont('libraries/Lato-Regular.ttf');
} 

function setup() {
  createCanvas(800, 600);
  w = width+16;
  yvalues = new Array(floor(w/xspacing));
 
  
}

function draw() {

  
if(mouseIsPressed){
  for(var i=0; i<3; i++){
  a=a-1; 
  background(0);
  }
 renderWave(a);
  }else{
    for(i=0; i<3; i++){
    a=a+1; 
    background(0);
  }
   renderWave(a);
  }

  
   calcWave(500);
   calcWave(800);
  push(); 
  fill(255,204,0);
	textSize(20);
	textAlign(CENTER);
	textFont(myFont);
	text("Press your mouse to push it up!", 380, 550)
  pop();
}

function calcWave(period) {
  
  dx = (TWO_PI / period) * xspacing;//chage the motivation of lines.
  
  
  // Increment theta (try different values for 
  // 'angular velocity' here
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave(yinter) {
  noStroke();
  fill(255,204,0);
  // A simple way to draw the wave with an ellipse at each location
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(x*xspacing, yinter/2+yvalues[x], 5, 5);
    
  }
}
/*
function myText(size,distance) {
	rotate(90);
	textFont(myFont);
	textSize(20);
	textAlign(CENTER);
	fill(255,204,0);
	
	text("Press your mouse to push the line!", 0, 250);
}
*/





