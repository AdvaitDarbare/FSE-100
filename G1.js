function game1Preload(){
}

function game1Setup(){
  createCanvas(800, 800);
  background(150);
  shapeMode='Line';
  currentActivity = 1;
  menuButton.show();
  game1Button.hide();
  game2Button.hide();
  game3Button.hide();  
  playDotsAgain.hide();
}

function game1Draw(){
  background(150);
  
  
  if(shapeMode == 'Line'){
    background(150);
    createLine();
    score = 1;
  }
  if(shapeMode == 'Rectangle'){
    background(150);
    createRectangle();
    score = 2;
  }
  if(shapeMode == 'Triangle'){
    background(150);
    createTriangle();
    score = 3;
  }
  if(shapeMode == 'Pentagon'){
    background(150);
    createPentagon();
    score = 4;
 }
  if(shapeMode == 'Diamond'){
    background(150);
    createDiamond();
    score = 5;
  }
  if(shapeMode == 'End'){
    endtheProgram(); 
  }

function transitionScreen() {
  background('blue');
  transB = createButton('Next Level!');
  transB.position('center');
  transB.size(250,90);
  transB.style("font-family", "Comic Sans MS");
  transB.style("font-size", "28px");
  transB.mousePressed(score++);
  transB.hide();
  
  
}  
  
  
  
}
function createLine(){
  
  ellipse(320, 230, 10, 10)
  text('1', 305, 235)


  ellipse(180, 70, 10, 10);
  text('2', 190, 75)


  if ((mouseX > 180) && (mouseX < 190) &&
    (mouseY > 70) && (mouseY < 80)) {
    stroke(250, 0, 0);
    strokeWeight(1);
    line(180, 70, 320, 230);
    
    shapeMode='Rectangle'
    print(score);
  }
  
}


function createRectangle(){

  ellipse(320, 230, 10, 10)
  text('1', 305, 235)

  ellipse(320, 70, 10, 10);
  text('2', 305, 75);

  ellipse(180, 70, 10, 10);
  text('3', 190, 75)

  ellipse(180, 230, 10, 10);
  text('4', 190, 235);
  
  if ((mouseX > 320) && (mouseX < 330) &&
    (mouseY > 70) && (mouseY < 80)) {
    stroke(250, 0, 0);
    strokeWeight(1);
    line(320, 230, 320, 70);
  }
  if ((mouseX > 180) && (mouseX < 190) && (mouseY > 70) && (mouseY < 80)) {
    stroke(250, 0, 0);
    strokeWeight(1);
    line(320, 230, 320, 70);
    
    stroke(250, 0, 0);
    strokeWeight(1);
    line(320, 70, 180, 70);
  }
    
  if ((mouseX > 180) && (mouseX < 190) && (mouseY > 230) && (mouseY < 240)) {
    stroke(250, 0, 0);
    strokeWeight(1);
    line(320, 230, 320, 70);
    
    stroke(250, 0, 0);
    strokeWeight(1);
    line(320, 70, 180, 70);
    
    stroke(250, 0, 0);
    strokeWeight(1);
    line(180, 70, 180, 230);
        
    stroke(250, 0, 0);
    strokeWeight(1);
    line(180, 230, 320, 230);
        

    shapeMode='Triangle'
    print(score);
  }

}


function createTriangle(){
  
  ellipse(320, 230, 10, 10)
  text('1', 305, 235)

  ellipse(320, 70, 10, 10);
  text('2', 305, 75);

  ellipse(180, 70, 10, 10);
  text('3', 190, 75)

  
  if ((mouseX > 320) && (mouseX < 330) &&
    (mouseY > 70) && (mouseY < 80)) {
    stroke(250, 0, 0);
    strokeWeight(1);
    line(320, 230, 320, 70); 
  }
  if ((mouseX > 180) && (mouseX < 190) &&
    (mouseY > 70) && (mouseY < 80)) {
    stroke(250, 0, 0);
    strokeWeight(1);
    line(320, 230, 320, 70);
    
    stroke(250, 0, 0);
    strokeWeight(1);
    line(320, 70, 180, 70);
    
    stroke(250, 0, 0);
    strokeWeight(1);
    line(180, 70, 320, 230);
    
    shapeMode='Pentagon'
    print(score);
  }  
}

function createPentagon(){
  background(150);
  
  ellipse(320, 230, 10, 10)
  text('1', 305, 235)

  ellipse(300, 150, 10, 10);
  text('2', 305, 155);
  
  ellipse(250, 100, 10, 10);
  text('3', 260, 105);
  
  ellipse(200, 150, 10, 10);
  text('4', 185, 155);

  ellipse(180, 230, 10, 10);
  text('5', 190, 235);
  
  if ((mouseX > 300) && (mouseX < 310) &&
    (mouseY > 150) && (mouseY < 160)) {
    stroke(250, 0, 0);
    strokeWeight(1);
    line(320, 230, 300, 150);
  }
  if ((mouseX > 250) && (mouseX < 260) && (mouseY > 100) && (mouseY < 110)) {
    stroke(250, 0, 0);
    strokeWeight(1);
    line(320, 230, 300, 150);
    
    stroke(250, 0, 0);
    strokeWeight(1);
    line(300, 150, 250, 100);
  }
  if ((mouseX > 200) && (mouseX < 210) && (mouseY > 150) && (mouseY < 160)) {
    stroke(250, 0, 0);
    strokeWeight(1);
    line(320, 230, 300, 150);
    
    stroke(250, 0, 0);
    strokeWeight(1);
    line(300, 150, 250, 100);
    
    stroke(250, 0, 0);
    strokeWeight(1);
    line(250, 100, 200, 150);
  }
    
  if ((mouseX > 180) && (mouseX < 190) && (mouseY > 230) && (mouseY < 240)) {
    stroke(250, 0, 0);
    strokeWeight(1);
    line(320, 230, 300, 150);
    
    stroke(250, 0, 0);
    strokeWeight(1);
    line(300, 150, 250, 100);
    
    stroke(250, 0, 0);
    strokeWeight(1);
    line(250, 100, 200, 150);
    
    stroke(250, 0, 0);
    strokeWeight(1);
    line(200, 150, 180, 230);
        
    stroke(250, 0, 0);
    strokeWeight(1);
    line(180, 230, 320, 230);
        
    shapeMode='Diamond'
    print(score);
  }

  
}

function createDiamond(){

  //1
  noStroke()
  ellipse(250, 200, 10, 10);
  text('1', 256, 205);
  
  //3
  ellipse(300, 150, 10, 10);
  text('2', 305, 155);

  //5
  ellipse(250, 100, 10, 10);
  text('3', 260, 105);
  
  //7
  ellipse(200, 150, 10, 10);
  text('4', 185, 155);
  
  if ((mouseX > 300) && (mouseX < 310) &&
    (mouseY > 150) && (mouseY < 160)) {
    stroke(250, 0, 0);
    strokeWeight(1);
    line(250, 200, 300, 150);
  }
  if ((mouseX > 250) && (mouseX < 260) && (mouseY > 100) && (mouseY < 110)) {
    stroke(250, 0, 0);
    strokeWeight(1);
    line(250, 200, 300, 150);
    
    stroke(250, 0, 0);
    strokeWeight(1);
    line(300, 150, 250, 100);
  }
    
  if ((mouseX > 200) && (mouseX < 210) && (mouseY > 150) && (mouseY < 160)) {
    stroke(250, 0, 0);
    strokeWeight(1);
    line(250, 200, 300, 150);
    
    stroke(250, 0, 0);
    strokeWeight(1);
    line(300, 150, 250, 100);
    
    stroke(250, 0, 0);
    strokeWeight(1);
    line(250, 100, 200, 150);
        
    stroke(250, 0, 0);
    strokeWeight(1);
    line(200, 150, 250, 200);
        

    shapeMode='End'
    print(score);
  }

  
}

function endtheProgram(){
  background(150);
  
  textSize(20);
  fill(51);
  textAlign(LEFT);
  text("Final Score = 5", 20, 30);
  
  textSize(32);
  fill(51);
  textAlign(CENTER, CENTER);
  text("All Dots Connected!", 200, 250);
  text("Game Over!", 200, 300);
  playDotsAgain.show();
  stop();

}