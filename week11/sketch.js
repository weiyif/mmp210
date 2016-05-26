var r = 255, g = 255, b = 0;
var x = 20, y = 20, w = 100, h = 50;
var angle = 0;
function setup() {
    createCanvas(720, 360);
}
function draw() {
    background("black");

    fill(r, g, b);

    rect(x, y, w, h);

    translate(width/2, height/2);
    rotate(angle);
    rect(0, 0, 100, 50);

}
function mousePressed() {
    if ( mouseX >x && mouseX < x + w
       && mouseY > y && mouseY < y + h) {
        angle += 0.5;
    }
}





