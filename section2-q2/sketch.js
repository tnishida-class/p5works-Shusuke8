// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if(i % 2 == 0 && j % 2 == 0){
      fill(255);
      rect(size * i, size * j, 24, 24);
      }
      else if(i % 2== 1 && j % 2 == 1){
      fill(255);
      rect(size * i, size * j, 24, 24);
      }
      else {
      fill(100);
      rect(size * i, size * j, 24, 24);
      }

      if(i % 2 == 0 && j % 2 == 0 && j < 3){
      fill(255, 0, 0);
      ellipse((size * i) + (size / 2), (size * j) + (size / 2) - size, 20);
      }
      else if(i % 2 == 1 && j % 2 == 1 && j < 4){
      fill(255, 0, 0);
      ellipse((size * i) + (size / 2), (size * j) + (size / 2) - size, 20);
      }
      else if(i % 2 == 0 && j % 2 == 0 && j > 4){
      fill(0);
      ellipse((size * i) + (size / 2), (size * j) + (size / 2) - size, 20);
      }

      else if(i % 2 == 0 && j == 7){
      fill(0);
      ellipse((size * i) + (size / 2), (size * j) + (size / 2) - size + 24, 20);
      }

      else if(i % 2 == 1 && j % 2 == 1 && j > 6){
      fill(0);
      ellipse((size * i) + (size / 2), (size * j) + (size / 2) - size, 20);
      }

   }
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }

}
