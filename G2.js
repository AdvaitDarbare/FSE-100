function game2Preload(){ }

function game2Setup(){
  
  background(190);
  currentActivity = 2;
  menuButton.show();
  game1Button.hide();
  game2Button.hide();
  game3Button.hide();
  playMazeAgain.hide();
  
  //Image Location / Setup
  pacMan = loadImage('Game2/PAC1.png');
  x = 70;  
  y = 60;  
  safe = true;
  
}
  

function endGame(){
  background(190);
  currentActivity = 2;
  menuButton.show();
  game1Button.hide();
  game2Button.hide();
  game3Button.hide();
  safe = true;
    fill('blue');
    rect(100,125,600,175);
    fill('white');
    textSize(120);
    textFont('Calibri');
    text('You Win!', 150,250);
  playMazeAgain.show();
}


function game2Draw(){
  background(190);
  fill('black');
                              
  //Image Size 
  image(pacMan, x, y, 60, 60);  
  console.log(safe);
  
  //Movement
    if (keyIsDown(RIGHT_ARROW)) {
       x = x + 4;  //move right
    }
    if (keyIsDown(LEFT_ARROW)) {
      x = x - 4;  //move left
    }
    if (keyIsDown(UP_ARROW)) {
      y = y - 4;  //move up 
    }
    if (keyIsDown(DOWN_ARROW)) {
      y = y + 4;  //move down 
    }
  
  // Start Area
  textSize(20);
  fill('green');
  rect(0,0, 120, 30);
  fill('yellow');
  text("Entrance", 20, 20);
  
  // End Area
  fill('red');
  rect(700,750, 100, 50);
  fill(255);
  text("Exit", 735, 785);
    
  //Maze Structure 
  fill('black')
    wallRTM1 = rect(0,700,250,20);
    wallRTM1 = rect(240,700,20,100);
    wall1 = rect(200, 0, 20, 300);
    wall2 = rect(100, 150, 100, 20);
    wall3 = rect(200, 300, 125, 20);
    wall4 = rect(200, 450, 495, 20);
    wall5 = rect(0, 450, 100, 20);
    wall6 = rect(90, 300, 20, 170);
    wall7 = rect(425, 100, 20, 370);
    wall8 = rect(320, 100, 125, 20);
    wall9 = rect(100, 575, 250, 20);
    wall10 = rect(350, 450, 20, 350);
    wall11 = rect(550, 0, 20, 350);
    wall12 = rect(675, 100, 20, 350);
    wall13 = rect(475, 560, 350, 20);
    wall14 = rect(360, 675, 325, 20);

//Reset Statements
  
    //return to menu box
  if(x>0 && x<260 && y>640 && y<800) {
    safe = false;
    game2Setup();
  }
  
  //Starting L
    if(x>200-60 && x<220 && y>0 && y<320) {
      safe = false;
          //play([startTime], [rate], [amp], [cueStart], [duration])
      game2Setup();
    }
    if(x>100-60 && x<200 && y>150-60 && y<170) {
      safe = false;
      game2Setup();
    }
    if(x>200-60 && x<325 && y>300-60 && y<320) {
      safe = false;
      game2Setup();
    }
  
  //Left Back L
  if(x>0 && x<100+10 && y>450-60 && y<470) {
        safe = false;
        game2Setup();
      }
  if(x>90-60 && x<110 && y>300-60 && y<470) {
    safe = false;
    game2Setup();
  }
  
  
  //Top Right Split Wall
  if(x>550-60 && x<570 && y>0 && y<350) {
    safe = false;
    game2Setup();
  }
  
  
  //Bottom Right Split Wall
  if(x>475-60 && x<800-60 && y>560-60 && y<580) {
    safe = false;
    game2Setup();
  }
  
  
  //Middle Unit
      if(x>200-60 && x<690 && y>450-60 && y<470) {
        safe = false;
        game2Setup();
      }
      if(x>425-60 && x<445 && y>100-60 && y<470) {
        safe = false;
        game2Setup();
      }
      if(x>320-60 && x<445 && y>100-60 && y<120) {
        safe = false;
        game2Setup();
      }
      if(x>100-60 && x<360 && y>575-60 && y<595) {
        safe = false;
        game2Setup();
      }
      if(x>350-60 && x<370 && y>450-60 && y<800) {
        safe = false;
        game2Setup();
      }
      if(x>675-60 && x<695 && y>100-60 && y<450) {
        safe = false;
        game2Setup();
      }
      if(x>360-60 && x<685 && y>675-60 && y<695) {
        safe = false;
        game2Setup();
      }
  
//Canvas Bounds
    if (x > 800) {
      safe = false;
      game2Setup();
    }
    if (x < 0) {
      safe = false;
      game2Setup();
    }
    if (y > 800) {
      safe = false;
      game2Setup();
    }
    if (y < 0) {
      safe = false;
      game2Setup();
    }
  
//End Zone
    if (x>680 && x<800 && y>720 && y<800) {
      endGame();
    }
  
  
}