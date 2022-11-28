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
  noStroke();
  ellipse(circX, circY, 175, 175);
  
  
  
  button = createButton("Once you color in everything, click here to restart");
  button.position(150, 1);
  button.size(150, 100);
  button.mousePressed(res);

  fill(0);
  
function res() {
  location.reload();
}
  // noStroke();
  // fill(255);
  // circle(50, 400, 80);

  // noStroke();
  // fill(220);
  // Circle(1555, 100, 90);

  // noStroke();
  // fill(255);
  // circle(350, 480, 90);

  // noStroke();
  // fill(255);
  // circle(700, 800, 150);

  // noStroke();
  // fill(255);
  // circle(800, 600, 50);

  // noStroke();
  // fill(255);
  // circle(1300, 380, 100);

  // noStroke();
  // fill(255);
  // circle(1000, 380, 150);
}
