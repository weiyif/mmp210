var x=10;
var speed=4;
function setup (){
    createCanvas(640,480);
}


function draw (){
    background("#6E6262");
    spaceship(x, 300,100);
    spaceship(x,200,100);
    car(x,400,100);

    x++;

    speed+=random(0,0.1);
    if (x>width){
        x=0;
        speed =1;
    }


}
var spaceship = function(x,y,size){
    var fin=size/12;
    stroke("yellow");
    fill("red")

    triangle(x,y-fin,x,y+size/2+fin,x+size+5,y+size/4);
    fill("#D490D2")
    rect(x,y,size,size/2);
    fill("#75E6B8")
    arc(x+size,y+size/4,size,size/2,PI+HALF_PI,HALF_PI);
    fill("#DAF7A6")
    ellipse(x+size/3,y+size/4,fin,fin);

    for (var i=1;i<4;i++){
        ellipse(x+i*size/3,y+size/4,fin,fin);
    }
}

var car =function(X,y,size){

    noStroke();
    fill("blue");
    arc(x + size - size/8, y + size/2, 100, 50, PI*3/2, 0);

    fill("#BA4CED");
    triangle(x + size/2, y + size/5, x + size, y + size/4, x + size, y + size/2);




    stroke("white");
    line(x-size/4,y+size/2,x+size+size/4,y+size/2);

     fill("#FFFF00");

    rect(x-30,y+15,39,27,30,88);

   fill("#80ff80");
triangle(x +size/8,y +size/8,x+size,y+size/2,x+size/3,450);
    fill("pink");
    triangle(x +size/8,y +size/5,x+size/2,y+size/2,x+size/6,450)

    fill("#BE90D4");
    quad(x-size/5,y+size/6,x+size/8,y+size/4,x+size/5,y+size/5,x+size/8,y+size/8);



    fill("#ED135C");
    quad(x-size/7,y+size/3,x+size/2,y+size/2,x+size/5,y+size/6,x+size/2,y+size/4);


    fill("#3D3DBA");
 strokeWeight(4);  // Thicker
line(x+size/8,y +size/4,x-size/3,400, y+size/2);

    fill("#BA744E");
    ellipse(x + size/1, y + size/2, 25, 25);
    ellipse(x,y + size/2,25,25);


}



/*
 ellipse(600,55,55,50);

     rect(x, y, size*2, size/2)
    fill("red");
    rect(x,63,105,20);
    fill("purple")
    ellipse(x, 73, 25, 25);

    ellipse(x,73,25,25);

}
*/









