
function setup (){
    createCanvas(900,480);
    background("lightblue");


    triangle(400, 80, 800, 260, 40, 260);
    yinyan(10,10,10);

    yinyan(300,300,150);
    yinyan(600,300,150);
     yinyan(600,100,150);
    yinyan(750,100,20);





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



