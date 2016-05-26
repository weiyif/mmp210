function setup(){
    createCanvas(960, 640);
    frameRate(24);
}
function draw() {
    background("pink");

    var size = 20;
    for (var x = 0; x <= width; x += size) {
        for (var y = 0; y < height; y += size ) {
            var r = random(0,100);
            var g = random(0,100);
            var b = random(0,255);
            stroke(r, g, b);

            var rShape = random(0, 8);

            if (rShape < 1) {
                line(x, y, x + size, y + size);
            } else if (rShape < 2) {
                line(x, y + size, x + size, y);
            } else if (rShape < 3) {
                line(x, y, x + size, y);
            } else {
                line(x + size, y, x + size, y + size);
            }
        }
    }
}
