function setup() {
  createCanvas(1600, 900);
  background(220);
  stroke(20);
  fill(220);
  circle(50, 400, 80);

  stroke(20);
  fill(220);
  circle(1555, 100, 90);

  stroke(20);
  fill(220);
  circle(350, 480, 90);

  stroke(20);
  fill(220);
  circle(700, 800, 150);

  stroke(20);
  fill(220);
  circle(800, 600, 50);

  stroke(20);
  fill(220);
  circle(1300, 380, 100);

  stroke(20);
  fill(220);
  circle(1000, 380, 150);
}

function draw() {
  let circX = mouseX;
  let circY = mouseY;

  if (mouseIsPressed == true) {
    fill(123, 63, 0);
  } else {
    noFill(220);
  }
  noStroke();
  ellipse(circX, circY, 50, 50);
  
  button = createButton("Once you color in all 7 circles, click here to restart");
  button.position(150, 1);
  button.size(150, 100);
  button.mousePressed(res);

  fill(0);
  
function res() {
  location.reload();
}

}
