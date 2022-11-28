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
  ellipse(circX, circY, 50, 50);
  
  
  
  
  if (mil <= TIME) {
    fill(0);
    textSize(24);
    text(`Timer: ${round(timer - mil)}`, 1450, 30);
}
if (mil > TIME) {
    over = 0;
}
if (over <= 0) {
    fill(0);
    textSize(24);
    text(`Timer: 0`, 1450, 30);
    fill(220);
    rect(200, 100, 1200, 700);
    fill(0);
    textSize(24);
    text(`Points: ${points}`, 750, 300);
    text("Restart?", 750, 450);
    button = createButton("Once you color in all 7 circles, click here to restart");
    button.position(700, 400);
    button.size(200, 100);
    button.mousePressed(res);

}

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