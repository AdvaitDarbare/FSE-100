function game3Preload(){
}

function game3Setup(){
  background(190);
  currentActivity = 3;
  menuButton.show();
  game1Button.hide();
  game2Button.hide();
  game3Button.hide();
  playShapeAgain.hide();

  
  createCanvas(800, 800);
  noStroke();
  mode=1;
  shapeMode='Circle';
}


function game3Draw() {
  background(500);
  
  if (shapeMode=='Circle'){ 
    res=animateCircle1();
    score = 1;
    
  }
  else if (shapeMode=='Rectangle'){
    res=animaterectangle1();
    score = 2;
  }
  else if (shapeMode=='Square'){
    res=animatesquare1();
    score = 3;
  }
  else if (shapeMode=='Triangle'){
    res=animatetriangle();
    score = 4;
  }
  else if (shapeMode=='Circle2'){
    res=animateCircle2();
    score = 5;
  }
  else if (shapeMode=='Rectangle2'){
    res=animaterectangle2();
    score = 6;
  }
  else if (shapeMode=='Square2'){
    res=animatesquare2();
    score = 7;
  }
  else if (shapeMode == 'Stop'){
    res = endOfProgram();
    
}
  
  
  
}
function animateCircle1(){
  background('rgba(0,255,0, 0.25)');
  
  textSize(20);
  fill(51);
  textAlign(LEFT);
  text("Score = 0", 10, 20);
  
  fill(200);
  ellipse(mouseX, mouseY, 100, 100);
  
  ellipse(730, 100, 100);
  
  //incorrect one
  rect(400, 200, 50, 50);
  if ((mouseX > 350) && (mouseX < 450) &&
    (mouseY > 150) && (mouseY < 250)) {
  textStyle(BOLD);
  textSize(32);
  fill(51);
  textAlign(CENTER,CENTER);
  text("Incorrect", 400, 400);
  }
  
  //correct one
  if ((mouseX > 700) && (mouseX < 750) &&
    (mouseY > 90) && (mouseY < 110)) {
    result='Shape matched';
    shapeMode='Rectangle'
    print(score);
  } else {
    fill(200);
    result='Shape not matched';
  }
  return result;
}
function animaterectangle1(){
  background('rgba(0,255,0, 0.25)');
  
  textSize(20);
  fill(51);
  textAlign(LEFT);
  text("Score = 1", 10, 20);
  
  fill(200);
  rect(mouseX, mouseY, 50, 100);
  rect(130,100, 50, 100);
  
  //incorrect one
  ellipse(500, 100, 100);
  if ((mouseX > 450) && (mouseX < 550) &&
    (mouseY > 50) && (mouseY < 150)) {
  textStyle(BOLD);
  textSize(32);
  fill(51);
  textAlign(CENTER,CENTER);
  text("Incorrect", 400, 400);
  }
  
  
  if ((mouseX > 100) && (mouseX < 150) &&
    (mouseY > 90) && (mouseY < 110)) {
    print('Shape matched');
    shapeMode = 'Square'
    print(score);
  } else {
    fill(200);
    print('Shape not matched');
  }
  return result;
}
function animatesquare1(){
  background('rgba(0,255,0, 0.25)');
  
  textSize(20);
  fill(51);
  textAlign(LEFT);
  text("Score = 2", 10, 20);
  
  fill(200);
  rect(mouseX, mouseY, 50, 50);
 
  rect(530, 100, 50, 50);
  
  //incorrect one
  rect(500,400, 50, 100);
  if ((mouseX > 450) && (mouseX < 550) &&
    (mouseY > 350) && (mouseY < 450)) {
  textStyle(BOLD);
  textSize(32);
  fill(51);
  textAlign(CENTER,CENTER);
  text("Incorrect", 400, 400);
  }
  
  if ((mouseX > 500) && (mouseX < 550) &&
    (mouseY > 90) && (mouseY < 110)) {
    print('Shape matched');
    shapeMode = 'Triangle'
    print(score);
  } else {
    fill(200);
    print('Shape not matched');
  }
  return result;
}
function animatetriangle(){
  background('rgba(0,255,0, 0.25)');
  
  textSize(20);
  fill(51);
  textAlign(LEFT);
  text("Score = 3", 10, 20);
  
  //incorrect one
  ellipse(500, 100, 100);
  if ((mouseX > 450) && (mouseX < 550) &&
    (mouseY > 50) && (mouseY < 150)) {
  textStyle(BOLD);
  textSize(32);
  fill(51);
  textAlign(CENTER,CENTER);
  text("Incorrect", 400, 400);
  }
  
  fill(200);
  triangle(125, 90, 100, 130, 150, 130);
  translate(mouseX, mouseY);
  triangle(0, -15, -20, 25, 20, 25);
  
  
  if ((mouseX > 100) && (mouseX < 150) &&
    (mouseY > 90) && (mouseY < 130)) {
    print('Shape matched');
    shapeMode = 'Circle2'
    print(score);
  } else {
    fill(200);
    print('Shape not matched');
  }
  return result;
  
}
function animateCircle2(){
  background('rgba(0,255,0, 0.25)');
  
  textSize(20);
  fill(51);
  textAlign(LEFT);
  text("Score = 4", 10, 20);
  
  //incorrect one
  rect(400, 100, 50, 50);
  if ((mouseX > 350) && (mouseX < 450) &&
    (mouseY > 50) && (mouseY < 150)) {
  textStyle(BOLD);
  textSize(32);
  fill(51);
  textAlign(CENTER,CENTER);
  text("Incorrect", 400, 400);
  }
  
  fill(200);
  ellipse(mouseX, mouseY, 100, 100);
  
  ellipse(430, 300,100)
  
  if ((mouseX > 400) && (mouseX < 450) &&
    (mouseY > 290) && (mouseY < 310)) {
    result='Shape matched';
    shapeMode='Rectangle2'
    print(score);
  } else {
    fill(200);
    result='Shape not matched';
  }
  return result;
}
function animaterectangle2(){
  background('rgba(0,255,0, 0.25)');
  
  textSize(20);
  fill(51);
  textAlign(LEFT);
  text("Score = 5", 10, 20);
  
  //incorrect one
   rect(530, 100, 50, 50);
  if ((mouseX > 500) && (mouseX < 580) &&
    (mouseY > 50) && (mouseY < 150)) {
  textStyle(BOLD);
  textSize(32);
  fill(51);
  textAlign(CENTER,CENTER);
  text("Incorrect", 400, 400);
  }
  
  fill(200);
  rect(mouseX, mouseY, 70, 150);
  rect(70,300, 70, 150);
  
  if ((mouseX > 60) && (mouseX < 80) &&
    (mouseY > 290) && (mouseY < 310)) {
    print('Shape matched');
    shapeMode = 'Square2'
    print(score);
  } else {
    fill(200);
    print('Shape not matched');
  }
  return result;
}
function animatesquare2(){
  background('rgba(0,255,0, 0.25)');
  
  textSize(20);
  fill(51);
  textAlign(LEFT);
  text("Score = 6", 10, 20);
  
  //incorrect one
  ellipse(300, 100, 100);
  if ((mouseX > 100) && (mouseX < 400) &&
    (mouseY > 20) && (mouseY < 200)) {
  textStyle(BOLD);
  textSize(32);
  fill(51);
  textAlign(CENTER,CENTER);
  text("Incorrect", 400, 400);
  }
  
  fill(200);
  rect(mouseX, mouseY, 200, 200);
  rect(550,550, 200, 200);
  
  if ((mouseX > 530) && (mouseX < 560) &&
    (mouseY > 530) && (mouseY < 560)) {
    print('Shape matched');
    shapeMode = 'Stop'
    print(score);
    
  } else {
    fill(200);
    print('Shape not matched');
  }
  return result;
}
function endOfProgram(){
  background('rgba(0,255,0, 0.25)');
  
  textSize(20);
  fill(51);
  textAlign(LEFT);
  text("Final Score = 7", 10, 20);
  
  textSize(64);
  fill(51);
  textAlign(CENTER,CENTER);
  text("The End!", 400, 400);
  playShapeAgain.show();
  stop();
}

