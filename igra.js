function drawIt() {
  var x = 150;
  var y = 150;
  var dx = 2;
  var dy = 4;
  var WIDTH;
  var HEIGHT;
  var r = 10;
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
  var prviDotik = 0;
  var color1 = "blue";
  var color2 = "red";
  var mrezaW = 20;
  var mrezaH = 100;
  var tocke1 = 0;
  var tocke2 = 0;
  var intervalId;
  var maxRezultat = 5;
  var server = 1;
  var zacetekIgre = false;
  var bgImage = new Image();
bgImage.src = 'slike/Ozadje2.png';
 

  function onKeyDown(evt) {
    if (evt.keyCode == 39)
      rightDown2 = true;
    else if (evt.keyCode == 68)
      rightDown = true;
    else if (evt.keyCode == 37) leftDown2 = true;
    else if (evt.keyCode == 65) leftDown = true;
  }

  function onKeyUp(evt) {
    if (evt.keyCode == 39)
      rightDown2 = false;
    else if (evt.keyCode == 68)
      rightDown = false;
    else if (evt.keyCode == 37) leftDown2 = false;
    else if (evt.keyCode == 65) leftDown = false;
  }

  $(document).keydown(onKeyDown);
  $(document).keyup(onKeyUp);

  function posodobiRezultat() {
    $("#rezultatRdeci").text(tocke2);
    $("#rezultatModri").text(tocke1);
  }

  function init_paddle() {
    paddleh = 10;
    paddlew = 75;
    paddlex = 0;
  }

  function init_paddle2() {
    paddleh2 = 10;
    paddlew2 = 75;
    paddlex2 = WIDTH - paddlew2;
  }

  function init() {
    ctx = $('#canvas')[0].getContext("2d");
    WIDTH = $("#canvas").width();
    HEIGHT = $("#canvas").height();
  }

  function circle(x, y, r) {
  ctx.save();

  // Clip drawing to the ball shape
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.clip();

  // Base yellow color
  ctx.fillStyle = "#f7e26b";
  ctx.fill();

  // Seam lines (blue, like a classic volleyball)
  ctx.strokeStyle = "#1a3a8c";
  ctx.lineWidth = 1.5;

  // Top curved seam
  ctx.beginPath();
  ctx.arc(x, y - r * 0.3, r * 1.1, 0.15, Math.PI - 0.15);
  ctx.stroke();

  // Bottom curved seam
  ctx.beginPath();
  ctx.arc(x, y + r * 0.3, r * 1.1, Math.PI + 0.15, -0.15);
  ctx.stroke();

  // Left curved seam
  ctx.beginPath();
  ctx.arc(x - r * 0.3, y, r * 1.1, -Math.PI / 2 + 0.15, Math.PI / 2 - 0.15);
  ctx.stroke();

  ctx.restore();

  // Outer outline
  ctx.strokeStyle = "#333";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.stroke();
}

  function rect(x, y, w, h, c) {
    ctx.fillStyle = c;
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.closePath();
    ctx.fill();
  }

  function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
  }

  if (prviDotik == 1) {
    dx = 4;
  }

  function zacniIgro() {
    if (intervalId) clearInterval(intervalId);
    zacetekIgre = true;
    reset();
    posodobiRezultat();
    intervalId = setInterval(draw, 10);
  }

  function restartIgre() {
    if (intervalId) clearInterval(intervalId);

    x = 150;
    y = 150;
    dx = 0;
    dy = 4;
    tocke1 = 0;
    tocke2 = 0;
    maxRezultat = 2;
    server = 1;
    prviDotik = 0;

    init_paddle();
    init_paddle2();
    reset();
    posodobiRezultat();
    zacetekIgre = false;
  }

  function reset() {
    prviDotik = 0;
    dx = 0;
    dy = 4;

    paddlex = 0 + paddlew;
    paddlex2 = WIDTH - (paddlew2 * 2);

    leftDown = rightDown = false;
    leftDown2 = rightDown2 = false;

    if (server == 1) {
      x = paddlex + paddlew / 2;
      y = 100;
    } else {
      x = paddlex2 + paddlew2 / 2;
      y = 100;
    }
  }

  if (prviDotik == 0)
    dx = 0;

  function draw() {
    if (zacetekIgre == false)
      return;

    var mrezaX = WIDTH / 2 - mrezaW / 2;
    var mrezaY = HEIGHT - mrezaH;
    clear();
   ctx.drawImage(bgImage, 0, 0, WIDTH, HEIGHT);
    

    circle(x, y, 10);

    if (rightDown) {
      if ((paddlex + paddlew) < WIDTH / 2 - mrezaW / 2) {
        paddlex += 5;
      } else {
        paddlex = paddlex;
      }
    }
    else if (leftDown) {
      if (paddlex > 0) {
        paddlex -= 5;
      } else {
        paddlex = 0;
      }
    }

    if (rightDown2) {
      if ((paddlex2 + paddlew2) < WIDTH) {
        paddlex2 += 5;
      } else {
        paddlex2 = WIDTH - paddlew2;
      }
    }
    else if (leftDown2) {
      if (paddlex2 > WIDTH / 2 + mrezaW / 2) {
        paddlex2 -= 5;
      } else {
        paddlex2 = paddlex2;
      }
    }

    rect(paddlex, HEIGHT - paddleh, paddlew, paddleh, color1);
    rect(paddlex2, HEIGHT - paddleh2, paddlew2, paddleh2, color2);
    rect((WIDTH / 2) - mrezaW / 2, HEIGHT - mrezaH, mrezaW, mrezaH, "grey");

    if (x + dx > WIDTH - r || x + dx < 0 + r)
      dx = -dx;

    if (y + dy < 0 + r)
      dy = -dy;

    if (y + dy > HEIGHT - r - paddleh) {

      if (x > paddlex && x < paddlex + paddlew) {
        dx = 8 * ((x - (paddlex + paddlew / 2)) / paddlew);
        dy = -dy;
        prviDotik++;
      }

      else if (x > paddlex2 && x < paddlex2 + paddlew2) {
        dx = 8 * ((x - (paddlex2 + paddlew2 / 2)) / paddlew2);
        dy = -dy;
        prviDotik++;
      }

      else if (y + dy > HEIGHT - r) {

        if (x < mrezaX) {

          tocke2++;

          if (tocke2 == maxRezultat) {
            clearInterval(intervalId);
            Swal.fire({
              title: "Rdeči zmaga!",
              icon: "info",
              confirmButtonText: "OK"
            });
          }
          else {

            server = 1;
            clearInterval(intervalId);
            Swal.fire({
              title: "Točka za rdečega!",
              icon: "info",
              confirmButtonText: "OK"
            }).then(() => {
              reset();
              intervalId = setInterval(draw, 10);
            });

          }

        }
        else {
          tocke1++;

          if (tocke1 == maxRezultat) {
            clearInterval(intervalId);

            Swal.fire({
              title: "Modri zmaga!",
              icon: "info",
              confirmButtonText: "OK"
            });
          }
          else {

            server = 2;
            clearInterval(intervalId);
            Swal.fire({
              title: "Točka za modrega!",
              icon: "info",
              confirmButtonText: "OK"
            }).then(() => {
              reset();
              intervalId = setInterval(draw, 10);
            });

          }

        }

        if (tocke1 == maxRezultat - 1 && tocke2 == maxRezultat - 1) {
          maxRezultat++;
        }

        posodobiRezultat();
      }
    }

    if (x + r > mrezaX && x - r < mrezaX + mrezaW && y + r > mrezaY && y - r < mrezaY + mrezaH) {
      if (y < mrezaY) {
        dy = -dy;
      } else {
        dx = -dx;
      }
    }

    x += dx;
    y += dy;
  }

  init();
  init_paddle();
  init_paddle2();
  $("#gumbStart").on("click", zacniIgro);
  $("#gumbReset").on("click", restartIgre);
}