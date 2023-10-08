
let menuButton, game1Button, game2Button, game3Button;
let currentActivity = 0;
function preload(){
  game1Preload();
  game2Preload();
  game3Preload();
  
}

function switchToMM(){
  background(220);
  currentActivity = 0;
  
  line(400,0,400,800);
                              line(0,400,800,400);
                              line(200,0,200,800);
                              line(600,0,600,800);

  fill('blue');
  rect(200,25,400,125);
  
  fill('white');
  textSize(50);
  textFont('Calibri');
  text('SMART', 310,100);
  
  menuButton.hide();
  game1Button.show();
  game2Button.show();
  game3Button.show();
  playMazeAgain.hide();
  playDotsAgain.hide();
  playShapeAgain.hide();
  
                              
}

function setup() {
  createCanvas(400, 400);
  background(220);
  menuButton = createButton('Return To Menu');
  menuButton.position(0, 710);
  menuButton.size(250,90);
  menuButton.style("font-family", "Comic Sans MS");
  menuButton.style("font-size", "28px");
  menuButton.mousePressed(switchToMM);
  menuButton.hide();
  
  game1Button = createButton('Connnect the Dots');
  game1Button.position(50, 380);
  game1Button.size(275,120);
  game1Button.style("font-family", "Comic Sans MS");
  game1Button.style("font-size", "32px");
  game1Button.mousePressed(game1Setup);
  game1Button.show();
  
  game2Button = createButton('Maze');
  game2Button.position(50, 220);
  game2Button.size(275,120);
  game2Button.style("font-family", "Comic Sans MS");
  game2Button.style("font-size", "32px");
  game2Button.mousePressed(game2Setup);
  game2Button.show();
  
  game3Button = createButton('Match the Shape');
  game3Button.position(50, 540);
  game3Button.size(275,120);
  game3Button.style("font-family", "Comic Sans MS");
  game3Button.style("font-size", "32px");
  game3Button.mousePressed(game3Setup);
  game3Button.show();
  
  playMazeAgain = createButton('Play Again!');
  playMazeAgain.position(250, 400);
  playMazeAgain.size(300,150);
  playMazeAgain.style("font-family", "Comic Sans MS");
  playMazeAgain.style("font-size", "48px");
  playMazeAgain.mousePressed(game2Setup);
  playMazeAgain.hide();
  
  playDotsAgain = createButton('Play Again!');
  playDotsAgain.position(75, 405);
  playDotsAgain.size(250,110);
  playDotsAgain.style("font-family", "Comic Sans MS");
  playDotsAgain.style("font-size", "32px");
  playDotsAgain.mousePressed(game1Setup);
  playDotsAgain.hide();
  
  playShapeAgain = createButton('Play Again!');
  playShapeAgain.position(250, 100);
  playShapeAgain.size(300,150);
  playShapeAgain.style("font-family", "Comic Sans MS");
  playShapeAgain.style("font-size", "48px");
  playShapeAgain.mousePressed(game3Setup);
  playShapeAgain.hide();
  
}


function draw() {  
  switch(currentActivity){
    case 0: 
      mainMenu();
      break;
    case 1: 
      game1Draw();
      break;
    case 2: 
      game2Draw();
      break;
    case 3: 
      game3Draw();
      break;
    
  }

  
function mainMenu(){
  createCanvas(800,800);
  background(210);
  
                              line(400,0,400,800);
                              line(0,400,800,400);
                              line(200,0,200,800);
                              line(600,0,600,800);

  fill('blue');
  rect(200,25,400,125);
  
  fill('white');
  textSize(50);
  textFont('Calibri');
  text('SMART', 310,100);
                              
}

}