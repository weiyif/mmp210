var img;
var circles = [];
var x, y;
function setup() {
    createCanvas(720, 360);
    background("black");
    img =loadImage("dog.jpg");
}
function draw(){
   image(img, 0, 0);
    for (var i =0;i<circles.length;i++){
        circles[i].draw();
    }
}

function mouseDragged(){
      var x = mouseX+random(-10,10);
      var y = mouseY+random(-10,10);
      circles.push(new Circle(
          mouseX,
          mouseY,
          img.get (mouseX,mouseY)
      ));
}
    
function Circle(x,y,c) {
      this.x = x;
      this.y = y;
      this.w = 20;
      this.c = c;
      this.draw = function(){
          fill(this.c);
          ellipse(this.x,this.y,this.w,this.w);
      }
}

      




            
    