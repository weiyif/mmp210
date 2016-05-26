var r = 0;
function setup() {
    createCanvas(640, 480);
}
function draw() {
    background("gold");

    strokeWeight(3);
    stroke("blue");

    if (mouseX > width/2) {
        fill("lightblue");
    } else {
        fill("pink");
    }

    textSize(40);
    text(floor(mouseX), 40, 40);
    text(floor(mouseY), 120, 40);

    if (frameCount < 200) {
        r = frameCount;
    } else {
        if (r > 0) {
            r--;
        }
    }

    line(mouseX, mouseY, width, height);

    ellipse(mouseX, mouseY, r, r);

    ellipse(pmouseX, pmouseY, 20, 20);
}


