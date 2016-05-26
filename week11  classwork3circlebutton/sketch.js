var r = 0, g = 0, b = 0;
var x = 100, y = 100, w = 200;

function setup() {
    createCanvas(720, 360);
}
function draw() {
    background("black");
    
    fill(r, g, b);
    
    ellipse(x, y, w, w);

}
function mousePressed() {
    if ( dist(mouseX, mouseY, x, y) < w/2) {
    
        r = random(0, 255);
        g = random(0, 255);
        b = random(0, 255);
    }
}
 