// テキスト「関数を作る(2) 値を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);
  calendar(2019, 10);

  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
}

function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);
  let s = 0;
  let t = 20;

  textSize(20);
  text(y + "/" + m, 68, 20);

  textSize(13);
  for(i = 0; i < 7; i++){
    let x;
    x = dayOfWeekAsString(i);
    text(x, 25 * (i + 1), 41);
  }

  for(let d = 1; d <= daysInMonth(y, m); d++){
   dow = dayOfWeek(y, m, d);
   textSize(15);
   if(d < 10){
     text(d, (dow * 25 + t + 5), (s + 68));
   }
   else{
     text(d, (dow * 25 + t), (s + 68));
   }
   if(dow == 6){
    s += 25;
   }
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  // BLANK[1]
  return isLeapYear(y) ? 366 : 365;
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  // BLANK[2]
  let a = dayOfYear(y, m, d) % 7;
  console.log(a);
  if(a == 6){
    return 0;
  }
  else{
    return a + 1;
  }
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}
