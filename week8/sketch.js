var speed=0.0001;
function setup() {
    createCanvas(840, 580);



   translate(width/3,height/4 );
}
  function draw(){
       background("#AD3BD1");
    for(var i=1;i <60;i++){

       textAlign("center");
       textSize(100);
        fill(random(100, 255), random(0, 100), random(0, 100));
       text("weiyif", 100, random(90, 100));
    }

    fill("yellow");
    text("victory", 100, 250);
      noStroke();
/*      var size = 5;
    for (var x = 0; x < width; x += size) {
        for (var y = 0; y < height; y += size) {
            fill(random(100, 255), random(0, 100), random(0, 100));
            ellipse(x, y, size, size);
        }
    }

       */



/*        textAlign("center");

        textSize(100);
    fill("#0040FF");
    stroke("red");
    strokeWeight( random(1, 20));

    text("victor", 100, 100);

        stroke("yellow");
    strokeWeight( random(1, 20));

    text("victor", 100, 100);*/


  }


