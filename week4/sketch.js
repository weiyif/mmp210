
function setup (){
    createCanvas(900,480);
    background("lightblue");

    var x = width/2;
    var y = height/2;
    var r = width/2;

    noStroke();
    fill("white");
    ellipse(x, y, r,r);

    fill("black");
    ellipse(x+r/4,y,r/2,r/2);

    arc(x, y,r, r, 0,  PI);

    fill("white");
    ellipse(x-r/4,y,r/2,r/2);
    ellipse(x+r/4,y,r/8,r/8);

    fill("black");
    ellipse(x-r/4,y,r/8,r/8);


    triangle(30, 75, 58, 20, 86, 75);

}



