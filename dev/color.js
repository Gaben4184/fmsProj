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
  ellipse(50, 400, 80,80);

  noStroke();
  fill(220);
  ellipse(1555, 100, 30,30);

  noStroke();
  fill(220);
  ellipse(350, 480, 30,30);

  noStroke();
  fill(220);
  ellipse(700, 800, 150,150);

  noStroke();
  fill(220);
  ellipse(800, 600, 50,50);

  noStroke();
  fill(220);
  ellipse(1300, 380, 100,100);

  noStroke();
  fill(220);
  ellipse(1000, 380, 150,150);

  button = createButton("If you find all 7 circles, click here to restart");
  button.position(150, 1);
  button.size(150, 100);
  button.mousePressed(res);

  fill(0);
  
function res() {
  location.reload();
}

}
