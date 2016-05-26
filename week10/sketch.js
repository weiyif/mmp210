var numSpaceshipe = 10;
var cars = [];

function setup() {
    createCanvas(640,640);
    for (var i=0;i<numSpaceshipe;i++) {
        cars[i]=new Car();
    }

}
function draw(){
    background("#3BEBE8");


    for(var i =0;i<numSpaceshipe; i++){


    cars[i].draw();
        cars[i].update();

}

}

function Car(){
    this.x= random(0,width/2);
    this.y= random(0,height);

    this.speed=random(1,10);
    this.size=random(50,200);
    this.fin=this.size/12;
    this.spaceshipColor = color(
        random(0, 255),
        random(0, 255),
        random(0, 255)
    );

    this.draw = function(){
         noStroke();
        fill("blue");
        arc(this.x + this.size - this.size/3, this.y + this.size/2, this.size, this.size/2, PI*3/2, 0);

    fill("#BA4CED");
    triangle(this.x + this.size/2, this.y + size/5, this.x + this.size, this.y + this.size/4, this.x + this.size, this.y + this.size/2);




    stroke("white");
    line(this.x-size/4,this.y+size/2,this.x+this.size+this.size/4,this.y+this.size/2);

     fill("#FFFF00");

    rect(this.x-30,this.y+this.size/6,this.size/3,this.size/4,this.size/3,this.size);

   fill("#80ff80");
    triangle(this.x +this.size/8,this.y +this.size/8,this.x+this.size,this.y+this.size/2,this.x+this.size/3,this.y + this.size/2);
    fill("pink");
    triangle(this.x +this.size/8,this.y +this.size/5,this.x+this.size/2,this.y+this.size/2,this.x+this.size/6,this.y + this.size/2 );

    fill("#BE90D4");
    quad(this.x-this.size/5,this.y+this.size/6,this.x+this.size/8,this.y+this.size/4,this.x+this.size/5,this.y+this.size/5,this.x+this.size/8,this.y+this.size/8);



    fill("#ED135C");
    quad(this.x-this.size/7,this.y+this.size/3,this.x+this.size/2,this.y+this.size/2,this.x+this.size/5,this.y+this.size/6,this.x+this.size/2,this.y+this.size/4);


    fill("#3D3DBA");
 strokeWeight(4);  // Thicker
line(this.x+this.size/8,this.y +this.size/4,this.x-this.size/3,this.y, this.y+this.size/2);

    fill("#BA744E");
    ellipse(this.x + this.size/1, this.y + this.size/2, this.size/4, this.size/4);
    ellipse(this.x,this.y +this.size/2,this.size/4,this.size/4);

    }




  this.update =function(){
   this.x+=this.speed;
      if (this.x>+width)this.x=0;
  }
}
