var speed = 0.05;

function setup() {
    createCanvas(640, 480);
    background("white");


}

function draw() {
    //background("white");
    
    push();
    translate(width/2, height/2);
    rotate(frameCount * speed);
    rect(0, 0, 40, 40);
    
    
    ellipse(100, 100, 40, 40);


    translate(100, 100);
    textAlign(CENTER);
    textSize(100);
    fill("green");
    stroke("white");
    rotate(frameCount * speed * 2);
    text("MMP 210", 0, 0);
    
    pop();
    
    push();
    translate(frameCount, frameCount/2);
    rect(0, 0, 40, 40);
    pop();
  
}
    





