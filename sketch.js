
function setup (){
    createCanvas(840,480);
   background("lightblue");

  var x=20;
  var y=100;
    var w=150;
    var h=500;
    var s=8;
    var d=80;
    stroke("gray");
    strokeWeight(8);
    fill("lightgreen");

    rect(x,y,w,h/2);
    arc(x+w/2+y+4,w+1,d,PI,TWO_PI);
    rect(x,y,w,h/2);
    fill("darkgreen");
    rect(x,y+h/2,w,h/2);

    fill("darkgree");
    rect(x,y+h/2,w,h/2);

    noStroke();
    fill(0,0,0,128);
    rect(x-s/2,y+h/2+s)










}



