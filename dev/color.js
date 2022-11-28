function setup() {
  createCanvas(1600, 900);
}

function draw() {
  let circX = mouseX;
  let circY = mouseY;

  if (mouseIsPressed == true) {
    fill(123, 63, 0);
  } else {
    noFill(220);
  }
  ellipse(circX, circY, 120, 120);
  noStroke();
  fill(220);
  circle(50, 400, 80);

  noStroke();
  fill(220);
  circle(1555, 100, 30);

  noStroke();
  fill(220);
  circle(350, 480, 30);

  noStroke();
  fill(220);
  circle(700, 800, 150);

  noStroke();
  fill(220);
  circle(800, 600, 50);

  noStroke();
  fill(220);
  circle(1300, 380, 100);

  noStroke();
  fill(220);
  circle(1000, 380, 150);

  button = createButton("If you find all 7 circles, click here to restart");
  button.position(1, 1);
  button.size(150, 100);
  button.mousePressed(res);

  fill(0);
  
function res() {
  location.reload();
}

}

