
let ec;
let finger;
let button;
let xx = 200
let yy = 250
let p = 'dog'
let o = 'house'
let t = 'hold a/s/d/f/spacebar for different colors. Mouse to erase. Enjoy :)  '
let words = ['apple', 'bear', 'cat', 'dog', 'house', 'rainbow'];
let word;


function preload() {
  finger = loadImage('fingerprintpng.png')

}

function setup() {
  
  word = random(words);
  ec = createGraphics(500,500); // Second layer for feedback message.
  createCanvas(500,500);
  imageMode(CENTER);
  background('white');
  button = createButton('start finger painting'); //start page
  button.position(xx, yy); 
  button.mousePressed(changeBG);
}

function changeBG() {
  state = 1; // button action
  button.position (-width / 2 - 90, height / 2 - 45);
  
}

function draw() {
  
 if (keyIsPressed){ // Feedback when any key is pressed.
  ec.push()
  ec.rect(10,10,250,50,10);
  ec.fill(0);
  ec.textSize(30);
  ec.text("That looks great!" ,20,45);             ec.pop()  
  } 
  
if (mouseIsPressed){ // Feedback when mouse is pressed.
  ec.push()
   ec.rect(10,10,250,50,10);
   ec.fill(0);
   ec.textSize(20);
   ec.text("Everyone makes mistakes" ,20,40);
   ec.pop() 
 
}

  if (keyIsDown(71)){  // If key is down a random word will be generated.
    ec.push()
    ec.text(word, 250, 475);
    ec.fill(0);
    ec.textSize(20);
    ec.pop()
  } else{ 
    ec.push()
    ec.text('Prompt Press "G":', 80, 475); // If no key is down text will be displayed. 
    ec.fill(0);
    ec.textSize(20);
    ec.pop()   

       }
  
  image(ec,250,250);  // Second layer

  
  if (keyIsDown(65)) { //a key  
    push();
    tint(255, 10); //white
    image(finger, mouseX, mouseY, 80, 80); 
    pop()   
   
  }
  
  if (keyIsDown(83)){ //s key
    push();
    tint(0, 153, 204, 30) //blue
    image(finger, mouseX, mouseY, 80, 80);
    pop();
  
} 

    if (keyIsDown(68)){ //D key
    push();
    tint(255, 38, 38 , 30) //red
    image(finger, mouseX, mouseY, 80, 80);
    pop();
  
}
  
    if (keyIsDown(70)){ //F key
    push();
    tint(251, 255, 0 , 30) //yellow
    image(finger, mouseX, mouseY, 80, 80);
    pop();
  
}
  if (keyIsDown(32)){ //space bar
    push();
    tint(0, 0, 0 , 30) //black
    image(finger, mouseX, mouseY, 80, 80);
    pop();
}
  if (mouseIsPressed){ 
        noStroke();
        fill('white'); //eraser tool
        circle(mouseX,mouseY,80)
        x=mouseY;
        y=mouseX;
  }  
    text(t,80, 450, 550, 800) // App instructions

}
