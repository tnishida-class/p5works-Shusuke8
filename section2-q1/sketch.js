// 小手調べ
function setup(){
  for(let i = 0; i < 10; i++){
    let x = i * 10;
    if(i >= 4){
      noFill();
      ellipse(50, 50, x + 10);
      stroke(255, 0, 0);
    }
    else{
      noFill();
      ellipse(50, 50, x + 10);
      stroke(0, 0, 255);
    }// BLANK[1]
  }

}
