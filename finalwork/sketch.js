// 最終課題を制作しよう
let x, y, a, b, va, vb;

function setup(){
  createCanvas(windowWidth, windowHeight);
    x = windowWidth / 2
    y = windowHeight - 20
    a = width / 2;
    b = height / 2;
    va = 2;
    vb = 2;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

 function draw(){
   background(160, 192, 255);
   rect(x, y, 100, 10);
   fill(255);


   ellipse(a, b, 30);
   fill(94, 185, 84);

   a += va;
   b += vb;

   if(a < 0 || a > width){ va = -1.05 * va; }
   if(b < 0 || b > height){ vb = -1.05 * vb; }

   a = constrain(a, 0, width);
   b = constrain(b, 0, height);
 }

  function keyPressed(){
    if(keyIsDown(LEFT_ARROW)){ x -= 50; }
    if(keyIsDown(RIGHT_ARROW)){ x += 50; }
}
