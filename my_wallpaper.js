//your parameter variables go here!
var diamondY = 50;
var diamondX = 35;
var diamondWidth = 130;
var diamondLength = 110;



function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  strokeWeight(4);
  strokeJoin(ROUND);
  stroke(0);
  fill(255, 255, 255);
  
  drawDiamond(diamondX , diamondY, diamondWidth, diamondLength);

}
function drawDiamond(x, y, w, l) {
  triangle((x + w/6), y, x, (y + l/3), (x + 7*w/24), (y + l/3));
  triangle((x + w/6), y, (x + 7*w/24), (y + l/3), (x + w/2), y);
  triangle((x + w/2), y, (x + 7*w/24), (y + l/3), (x + 17*w/24), (y + l/3));
  triangle((x + w/2), y, (x + 5*w/6), y, (x + 17*w/24), (y + l/3));
  triangle((x + 5*w/6), y, (x + 17*w/24), (y + l/3), (x + w), (y + l/3));
  triangle(x, (y + l/3), (x + 7*w/24), (y + l/3), (x + w/2), (y + l));
  triangle((x + 7*w/24), (y + l/3), (x + 17*w/24), (y + l/3), (x + w/2), (y + l));
  triangle((x + 17*w/24), (y + l/3), (x + w), (y + l/3), (x + w/2), (y + l));
}

