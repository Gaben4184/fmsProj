function setup() {
  createCanvas(1600, 900);
}

function draw() {
  background(220);
  
  let mil = millis()/1000;
  let TIME = 25;
  let timer = TIME;
  let over = TIME;
  
  //wall variables
  i1= createDiv("");
  i2 = createDiv("");
  i3 = createDiv("");
  i4 = createDiv("");
  i5 = createDiv("");
  i6 = createDiv("");
  
  c = createDiv("");
  
  
  i1.position(580,80);
  i1.size(440,50);
  
  i2.position(1020,80);
  i2.size(440,50);
  
  i3.position(1020,0);
  i3.size(580,900);
  
  i4.position(450,640);
  i4.size(800,260);
  
  i5.position(450,240);
  i5.size(130,450);
  
  i6.position(695,410);
  i6.size(350,110);
  
  c.position(970,540);
  c.size(50,80);
  
  i1.mouseOver(buton);
  i2.mouseOver(buton);
  i3.mouseOver(buton);
  i4.mouseOver(buton);
  i5.mouseOver(buton);
  i6.mouseOver(buton);
  
  c.mouseOver(goodjob);
  
  
  
  //horizontal walls pt1
  
  fill(20,140,140);
  rect(580,130,420,20);
  
  //placeholderbarriers
  
  fill(30,30,30);
  rect(580,80,440,50);
  i1.position(580,80);
  i1.size(440,50);
  
  fill(90,90,90);
  rect(1020,80,50,700);
  i2.position(1020,80);
  i2.size(50,700);
  
  fill(120,120,120);
  rect(450,640,800,80);
  i3.position(450,640);
  i3.size(800,80);
  
  fill(150,150,150);
  rect(500,240,70,450);
  i4.position(500,240);
  i4.size(70,450);
  
  fill(180,180,180);
  rect(460,240,450,70);
  i5.position(450,240);
  i5.size(450,50);
  
  fill(210,210,210);
  rect(710,410,350,110);
  i6.position(710,410);
  i6.size(350,110);
  
//starting point
  fill(255,264,223);
  rect(450,130,130,110);
  
  
 
 //wall
  
  fill(20,140,140);
  rect(580,220,320,20);

  //vertical walls
  
  fill(20,140,140);
  rect(1000,130,20,290);
  
  
  fill(20,140,140);
  rect(900,220,20,80);
  
//horizontal walls pt2
  
  fill(20,140,140);
  rect(600,300,320,20);

  
  fill(20,140,140);
  rect(690,400,310,20);

  
  
  
  //vertical walls pt2
  
  fill(20,140,140);
  rect(580,300,20,340);

  
  fill(20,140,140);
  rect(690,420,20,100);


  
  
  //walls pt3
  fill(20,140,140);
  rect(690,520,330,20);

  
  fill(20,140,140);
  rect(600,620,420,20);

  
  fill(20,140,140);
  rect(1020,520,20,120);

  
  
  //finish line
  fill(200,140,170);
  rect(970,540,50,80);
  c.position(970,540);
  c.size(50,80);
  
  //mouse
  
  //tryagain

function res(){
    location.reload();
}
  
  //timer
      if (mil <= TIME){
        fill(0);
        textSize(24);
        text(`Timer: ${round(timer - mil)}`, 1325, 30);
    }
    if (mil > TIME){
        over = 0;
    }
    if (over <= 0) {
        fill(0);
        textSize(24);
        text(`Timer: 0`, 1450, 30);
        fill(220);
        rect(200, 70, 1200, 800);
        fill(0);
        text("Restart?", 750, 450);
        button = createButton('Restart');
        button.position(450, 130);
        button.size(130, 110);
        button.mousePressed(res);
    }
  
  function buton(){
        fill(0);
        rect(200,70, 1200, 800);
        fill(0);
        text("Restart?", 750, 450);
        button = createButton('Restart');
        button.position(450, 130);
        button.size(130, 110);
        button.mousePressed(res); 
    
  }
  
     
   
///conclusionofgame
  
  
function goodjob(){
  fill(255);
  rect(200,100,1200,700);
  fill(0);
  text("GOOD JOB AHAHAH!!",750,450);
  
  // button3 = createButton('Restart');
  // button3.position(300,130);
  // button3.size(130,110);
  // button3.mousePressed(res);
  
  button4 = createButton('Menu');
  button4.position(300,430);
  button4.size(130,110);
  button4.mousePressed(menu);
  
}
  
function menu(){
  location.assign("fmsProject.html");
}
  
  
  
}
