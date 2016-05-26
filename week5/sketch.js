var m=80;
function setup (){
    createCanvas(900,480);
    background("lightblue");

    // first point in the triangle
    fill("yellow")
     ellipse(456, 246, 405, 355);
    fill("green");
    ellipse(width/2, 80, 10, 10);
    //second point
    fill("red");
    ellipse(650, height/3+width/8, 10, 10);
    fill("dark")
    ellipse(width/2,390,10,10);

    fill("silver");
    triangle(width/2, m, width/3.5, height/2+width/21, 650, height/3+width/8);
    triangle(256,width/5,width/2,390,650,width/5)
     //third point
   fill("blue");
    ellipse(260, height/3+width/8, 10, 10);
   fill("yellow")
    ellipse(256,width/5,10,10);

    fill("pink")
   ellipse(650,width/5,10,10);

    yinyan(width/2,height/2,width/4);






}

var yinyan = function(x,y,r){
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

}



