function setup() {
  createCanvas(1600, 900);
  
}

function draw() {
  let mil = millis() / 1000;
  let TIME = 30;
  let timer = TIME;
  let over = TIME;
  let button;

  let circX = mouseX;
  let circY = mouseY;

  if (mouseIsPressed == true) {
    fill(123, 63, 0);
  } else {
    noFill(220);
  }
  noStroke();
  ellipse(circX, circY, 125, 125);
  
  
  
  button = createButton("Once you color in all 7 circles, click here to restart");
  button.position(150, 1);
  button.size(150, 100);
  button.mousePressed(res);



  fill(0);
  

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

function res() {
  location.reload();
}
