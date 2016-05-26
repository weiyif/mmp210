function setup() {
    createCanvas(720, 360);
    textSize(40);
}
function draw() {
    background("black");
    
    text(mouseX, 20, 40);
    text( map(mouseX, 0, width, 0, 255)
        , 20, 80);
    
    translate(width/2, height/2);
    
    
    fill(
        map(mouseX, 0, width, 0, 255), 
        map(mouseY, 0, height, 0, 255), 
        map(mouseY, height, 0, 0, 255)
    );
    ellipse(0, 0, 100, 100);
}