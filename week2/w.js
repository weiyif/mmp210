function setup(){
    createCanvas(640,480);
    var gray = color(100);
    var pink = color(255, 0, 200);

    var blue = color("lightgreen");
    var red = color("#ff0000");

    background("bluse")
    fill(gray);
    rect(125, 25, 100, 100);

    noFill();
    stroke(blue)
    rect(150, 50, 100, 100);

    strokeWeight(1);

    var r =  0;
    var rIncrement = 100;

    fill(r,0,0)
    ellipse(r,300,rIncrement, rIncrement);

    r += rIncrement;

    fill(r, 0, 0);
    ellipse(r, 300, rIncrement, rIncrement);

    r += rIncrement;

    fill(r, 0, 0);
    ellipse(r, 300, rIncrement, rIncrement);

    r += rIncrement;

    fill(r, 0, 0);
    ellipse(r, 300, rIncrement, rIncrement);

   triangle(r, r - rIncrement/2, r - rIncrement/2, r - rIncrement/2, 310, 310);

}
