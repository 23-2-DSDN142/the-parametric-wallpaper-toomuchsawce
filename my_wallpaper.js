//your parameter variables go here!
var greenmode = true; //background change
var diamondY = 50;
var diamondX = 35;
var diamondWidth = 130;
var diamondLength = 110;
var starX = 20;
var starY = 20;
var xSize = 20;
var ySize = 20;
var rubyWidth = 150;
var rubyLength = 100;
var rubyX = 22;
var rubyY = 50;
var drawDiamondActive = false; // Variable to control whether the diamond is active
var drawRubyActive = true;   // Variable to control whether the ruby is active


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {

  if (greenmode) {
    // green background 
    background(107,142,35);
  } else {
    // Daytime background (pink)
    background(249, 42, 130);
  }
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  strokeWeight(4);
  strokeJoin(ROUND);
  stroke(0);
  fill(255, 255, 255);

  // Check if drawDiamond is active
  if (drawDiamondActive) {
    drawDiamond(diamondX, diamondY, diamondWidth, diamondLength);
  } else if (drawRubyActive) {
    // If drawRuby is active, activate drawRuby function
    drawRuby(rubyX, rubyY, rubyWidth, rubyLength);
  }

  fill(254,210,27);
  drawStar(starX - 5, starY, xSize + 15, ySize + 15);
  drawStar(starX +20, starY - 20, xSize + 20, ySize + 40);
  drawStar(starX + 32, starY - 10, xSize + 10, ySize);

}

function drawDiamond(x, y, w, l) {
  
  fill(212,232,255);
  triangle((x + w/6), y, x, (y + l/3), (x + 7*w/24), (y + l/3));
  fill(153,204,255);
  triangle((x + w/6), y, (x + 7*w/24), (y + l/3), (x + w/2), y);
  fill(173,212,255);
  triangle((x + w/2), y, (x + 7*w/24), (y + l/3), (x + 17*w/24), (y + l/3));
  fill(125,191,255);
  triangle((x + w/2), y, (x + 5*w/6), y, (x + 17*w/24), (y + l/3));
  fill(100,179,254);
  triangle((x + 5*w/6), y, (x + 17*w/24), (y + l/3), (x + w), (y + l/3));
  fill(153,204,255);
  triangle(x, (y + l/3), (x + 7*w/24), (y + l/3), (x + w/2), (y + l));
  fill(125,191,255);
  triangle((x + 7*w/24), (y + l/3), (x + 17*w/24), (y + l/3), (x + w/2), (y + l));
  fill(50,154,255);
  triangle((x + 17*w/24), (y + l/3), (x + w), (y + l/3), (x + w/2), (y + l));
}

function drawStar(x, y, xSize, ySize) {
  //draws star
  translate(x, y)
  stroke(0); // Set the outline color to black
  strokeWeight(1); // Set the outline weight to 2 pixels
  beginShape();
  curveVertex(x, y + ySize / 2);
  curveVertex(x - xSize / 5, y + ySize / 2.5);
  curveVertex(x, y + ySize / (10 / 3));
  curveVertex(x + xSize / 12.5, y);
  curveVertex(x + xSize / 6.25, y + ySize / (10 / 3));
  curveVertex(x + xSize / (50 / 18), y + ySize / 2.5);
  curveVertex(x + xSize / 6.25, y + ySize / 2);
  curveVertex(x + xSize / 12.5, y + ySize / (50 / 44));
  curveVertex(x, y + ySize / 2);
  curveVertex(x - xSize / 5, y + ySize / 2.5);
  curveVertex(x, y + ySize / (10 / 3));
  endShape();

} 

function drawSecondStar(x, y, xSize, ySize) {
  //draws star
  translate(x, y)
  stroke(0); // Set the outline color to black
  strokeWeight(1); // Set the outline weight to 2 pixels
  beginShape();
  curveVertex(x, y + ySize / 2);
  curveVertex(x - xSize / 5, y + ySize / 2.5);
  curveVertex(x, y + ySize / (10 / 3));
  curveVertex(x + xSize / 12.5, y);
  curveVertex(x + xSize / 6.25, y + ySize / (10 / 3));
  curveVertex(x + xSize / (50 / 18), y + ySize / 2.5);
  curveVertex(x + xSize / 6.25, y + ySize / 2);
  curveVertex(x + xSize / 12.5, y + ySize / (50 / 44));
  curveVertex(x, y + ySize / 2);
  curveVertex(x - xSize / 5, y + ySize / 2.5);
  curveVertex(x, y + ySize / (10 / 3));
  endShape();
}

function drawThirdStar(x, y, xSize, ySize) {
  //draws star
  translate(x, y)
  stroke(0); // Set the outline color to black
  strokeWeight(1); // Set the outline weight to 2 pixels
  beginShape();
  curveVertex(x, y + ySize / 2);
  curveVertex(x - xSize / 5, y + ySize / 2.5);
  curveVertex(x, y + ySize / (10 / 3));
  curveVertex(x + xSize / 12.5, y);
  curveVertex(x + xSize / 6.25, y + ySize / (10 / 3));
  curveVertex(x + xSize / (50 / 18), y + ySize / 2.5);
  curveVertex(x + xSize / 6.25, y + ySize / 2);
  curveVertex(x + xSize / 12.5, y + ySize / (50 / 44));
  curveVertex(x, y + ySize / 2);
  curveVertex(x - xSize / 5, y + ySize / 2.5);
  curveVertex(x, y + ySize / (10 / 3));
  endShape();
}

function drawRuby(x, y, w, l) {
  strokeWeight(4);
  stroke(0);
  fill(147,15,23);
  triangle((x + w/6), y, x, (y + l/3), (x + 7*w/24), (y + l/3));
  fill(236,22,34);
  triangle((x + w/6), y, (x + 7*w/24), (y + l/3), (x + w/2), y);
  fill(243,102,98);
  triangle((x + w/2), y, (x + 7*w/24), (y + l/3), (x + 17*w/24), (y + l/3));
  fill(153,13,22);
  triangle((x + w/2), y, (x + 5*w/6), y, (x + 17*w/24), (y + l/3));
  fill(147,15,23);
  triangle((x + 5*w/6), y, (x + 17*w/24), (y + l/3), (x + w), (y + l/3));
  fill(236,22,34);
  triangle(x, (y + l/3), (x + 7*w/24), (y + l/3), (x + w/2), (y + l));
  fill(236,22,34);
  triangle((x + 7*w/24), (y + l/3), (x + 17*w/24), (y + l/3), (x + w/2), (y + l));
  fill(153,13,22);
  triangle((x + 17*w/24), (y + l/3), (x + w), (y + l/3), (x + w/2), (y + l));
}

