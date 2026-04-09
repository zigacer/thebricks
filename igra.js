

function drawIt() {
var x = 150;
var y = 150;
var dx = 2;
var dy = 4;
var WIDTH;
var HEIGHT;
var r=8;
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
var color1 = "blue"; 
var color2 = "red";
var mrezaW = 30; 
var mrezaH = 100;

//nastavljanje leve in desne tipke
function onKeyDown(evt) {
  if (evt.keyCode == 39)
rightDown2 = true;
else if(evt.keyCode ==68)
	rightDown = true;
  else if (evt.keyCode == 37) leftDown2 = true;
  else if(evt.keyCode == 65) leftDown = true;
}

function onKeyUp(evt) {
  if (evt.keyCode == 39)
rightDown2 = false;
	else if(evt.keyCode ==68)
	rightDown = false;
  else if (evt.keyCode == 37) leftDown2 = false;
  else if(evt.keyCode == 65) leftDown = false;
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
  paddlex2 = WIDTH -paddlew2;
}
function init() {
  ctx = $('#canvas')[0].getContext("2d");
  WIDTH = $("#canvas").width();
  HEIGHT = $("#canvas").height();
  return setInterval(draw, 10);
}
function circle(x,y,r) {
	ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
}
function rect(x,y,w,h,c) {
	ctx.fillStyle = c;
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
if((paddlex+paddlew) < WIDTH/2-mrezaW/2){
paddlex += 5;
}else{
paddlex = paddlex;
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
if(paddlex2>WIDTH/2+mrezaW/2){
paddlex2 -=5;
}else{
paddlex2=paddlex2;
}
}
rect(paddlex, HEIGHT-paddleh, paddlew, paddleh,color1);
rect(paddlex2, HEIGHT-paddleh2, paddlew2, paddleh2,color2);
rect((WIDTH/2)-mrezaW/2,HEIGHT-mrezaH,mrezaW,mrezaH,"black");

  if (x + dx > WIDTH -r || x + dx < 0+r)
    dx = -dx;
  if (y + dy < 0+r)
    dy = -dy;
  if (y + dy > HEIGHT - r - paddleh) {

  
  if (x > paddlex && x < paddlex + paddlew) {
    dx = 8 * ((x - (paddlex + paddlew / 2)) / paddlew);
    dy = -dy;
  }

 
  else if (x > paddlex2 && x < paddlex2 + paddlew2) {
    dx = 8 * ((x - (paddlex2 + paddlew2 / 2)) / paddlew2);
    dy = -dy;
  }

  
  else if (y + dy > HEIGHT - r) {
    clearInterval(intervalId);
  }
}
if(x>WIDTH/2-mrezaW/2&&x<WIDTH/2 && y>HEIGHT-mrezaH){
	dx = 0; 
	dy = 0;
	
	
}
else if(x>WIDTH&&x<WIDTH/2+mrezaW/2&& y>HEIGHT-mrezaH){
	dx =0;
	dy = 0;
}
  x += dx;
  y += dy;
}

init();
init_paddle();
init_paddle2();
}