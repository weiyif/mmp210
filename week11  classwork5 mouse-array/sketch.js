var r = 0, g = 0, b = 0;
var x = [];
var y = [];
function setup() {
    createCanvas(720, 360);
}
function draw() {
    background("black");
    
    fill(r, g, b);
    
    for (var i = 0; i < x.length; i++) {
        ellipse(x[i], y[i], 100, 100);
    }
}
function mousePressed() {
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
    
    x.push(mouseX);
    y.push(mouseY);
}