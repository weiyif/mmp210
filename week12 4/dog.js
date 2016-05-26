var img;
function setup() {
    createCanvas(720, 360);

    img = loadImage("dog.jpg");
    
}
function draw(){
    background("white")
    image(img,0,0);
    
    tint(255,127);
    image(img,0,0);
}
  
