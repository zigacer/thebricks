

function drawIt() {
var x = 150;
var y = 150;
var dx = 2;
var dy = 4;
var WIDTH;
var HEIGHT;
var r=10;
var ctx;
var paddlex;
var paddleh;
var paddlew;
var paddlex2;
var paddleh2;
var paddlew2;
var rightDown = false;
var leftDown = false;
var rightDown2 = false;
var leftDown2 = false;
var bricks;
var NROWS;
var NCOLS;
var BRICKWIDTH;
var BRICKHEIGHT;
var PADDING;



//nastavljanje leve in desne tipke
function onKeyDown(evt) {
  if (evt.keyCode == 39)
rightDown = true;
else if(evt.keyCode ==68)
	rightDown2 = true;
  else if (evt.keyCode == 37) leftDown = true;
  else if(evt.keyCode == 65) leftDown2 = true;
}

function onKeyUp(evt) {
  if (evt.keyCode == 39)
rightDown = false;
	else if(evt.keyCode ==68)
	rightDown2 = false;
  else if (evt.keyCode == 37) leftDown = false;
  else if(evt.keyCode == 65) leftDown2 = false;
}
$(document).keydown(onKeyDown);
$(document).keyup(onKeyUp); 

function init_paddle() {
  
  paddleh = 10;
  paddlew = 75;
  paddlex = 0;
}
function init_paddle2() {
  
  paddleh2 = 10;
  paddlew2 = 75;
  paddlex2 = WIDTH -paddlew;
}
function init() {
  ctx = $('#canvas')[0].getContext("2d");
  WIDTH = $("#canvas").width();
  HEIGHT = $("#canvas").height();
  return setInterval(draw, 10);
}
function circle(x,y,r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
}
function rect(x,y,w,h) {
  ctx.beginPath();
  ctx.rect(x,y,w,h);
  ctx.closePath();
  ctx.fill();
}
function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function draw() {
  clear();
  circle(x, y, 10);
  //premik ploščice levo in desno
  if(rightDown){
if((paddlex+paddlew) < WIDTH){
paddlex += 5;
}else{
paddlex = WIDTH-paddlew;
}
}
else if(leftDown){
if(paddlex>0){
paddlex -=5;
}else{
paddlex=0;
}
}
  if(rightDown2){
if((paddlex2+paddlew2) < WIDTH){
paddlex2 += 5;
}else{
paddlex2 = WIDTH-paddlew2;
}
}
else if(leftDown2){
if(paddlex2>0){
paddlex2 -=5;
}else{
paddlex2=0;
}
}
rect(paddlex, HEIGHT-paddleh, paddlew, paddleh);
rect(paddlex2, HEIGHT-paddleh2, paddlew2, paddleh2);

  if (x + dx > WIDTH -r || x + dx < 0+r)
    dx = -dx;
  if (y + dy < 0+r)
    dy = -dy;
  if (y + dy > HEIGHT -(r+paddleh)) {
    if (x > paddlex && x < paddlex + paddlew){
		 dx = 8 * ((x-(paddlex+paddlew/2))/paddlew);
      dy = -dy;
	}
      
    else if (y + dy > HEIGHT-r)
      clearInterval(intervalId);
  }
  if (y + dy > HEIGHT -(r+paddleh2)) {
    if (x > paddlex2 && x < paddlex2 + paddlew2){
		 dx = 8 * ((x-(paddlex2+paddlew2/2))/paddlew2);
      dy = -dy;
	}
      
    else if (y + dy > HEIGHT-r)
      clearInterval(intervalId);
  }
  x += dx;
  y += dy;
}

init();
init_paddle();
init_paddle2();
}