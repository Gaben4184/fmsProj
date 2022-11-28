let bx, by;
let boxSize = 75;
let X = 100;
let Y = 40;
let overBox = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;
let minX, maxX, minY, maxY;

let points = 0;

function setup() {
    createCanvas(1600, 900);
    bx = 1200;
    by = 450;
    minX = 550;
    maxX = 950;
    minY = 425;
    maxY = 575;
}

function draw() {
    background(220);
    let mil = millis() / 1000;
    let TIME = 30;
    let timer = TIME;
    let over = TIME;
    let button;

    //coin on screen
    ellipseMode(CENTER);
    fill(255, 223, 0);
    ellipse(1200, 460, 100, 40);
    fill(255, 223, 0);
    ellipseMode(CENTER);
    ellipse(1200, 450, 100, 40);
    line(1149, 450, 1149, 460);
    line(1250, 450, 1250, 460);

    //Table
    fill(78, 53, 36);
    rect(550, 575, 400, 20);
    rect(570, 595, 17, 175);
    rect(913, 595, 17, 175);

    fill(0);
    text(`Points: ${points}`, 1325, 30);
    text("Stack coins on table", 650, 200);

    //move coin
    if (
        mouseX > bx - X &&
        mouseX < bx + X &&
        mouseY > by - Y &&
        mouseY < by + Y
    ) {
        overBox = true;
        if (!locked) {
            fill(255, 223, 0);
        }
    } else {
        overBox = false;
    }

    // Draw the box
    fill(255, 223, 0);
    ellipse(bx, by, X, Y);

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
        text("Restart?", 750, 450);
        button = createButton('Restart');
        button.position(700, 400);
        button.size(200, 100);
        button.mousePressed(res);

    }

}

function res() {
    location.reload();
}

function mousePressed() {
    if (overBox) {
        locked = true;
    } else {
        locked = false;
    }
    xOffset = mouseX - bx;
    yOffset = mouseY - by;
}

function mouseDragged() {
    if (locked) {
        bx = mouseX - xOffset;
        by = mouseY - yOffset;
    }
}

function mouseReleased() {
    if(
        mouseX > minX &&
        mouseX < maxX && 
        mouseY > minY &&
        mouseY < maxY 
    )
    {
        points++;
    }
    locked = false;
    bx = 1200;
    by = 450;
}
