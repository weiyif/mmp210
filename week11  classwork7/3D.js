var rotX = 0, rotY = 0, rotZ = 0;
function setup() {
    createCanvas(720, 360, WEBGL);

}
function draw() {
    background("black");
    
   camera(0,0,0);
    rotateX(rotX);
    rotateY(rotY); 
    rotateZ(rotZ); 

    
    

push();
    translate(-400,0,5);
    box(100,100,100);
        pop();
    push();
    translate(200,0,0);
    cylinder(100,50);
    torus(100,50);
    translate(-250,0,0);
    cone(40,70);
    pop();
}
function keyPressed(){
       console.log(keyCode);
    if (keyCode === UP_ARROW) {
        rotX -= 8.5;   
    } else if (keyCode === DOWN_ARROW) {
        rotX += 8.5;
    } else if (keyCode === LEFT_ARROW) {
        rotY += 0.5;
    } else if (keyCode === RIGHT_ARROW) {
        rotY -= 0.5;
    } else if (keyCode === 90) {
        rotZ += 0.5;
    } else if (keyCode === 88) {
        rotZ -= 0.5;
    }
}
   
    




            
    