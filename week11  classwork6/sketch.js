var angle = 0;
var button;
var input, name;
function setup() {
    var myCanvas = createCanvas(720, 360);
    myCanvas.parent("sketch");
    
    button = createButton("Add name");
    button.mousePressed(addName);
    button.parent("sketch");
    button.position(20, 30);
    
    input = createInput();
    input.parent("sketch");
    input.position(10, 10);
    
    textSize(40);
    textAlign(CENTER);
}
function draw() {
    background("black");
    
    translate(width/2, height/2);
    rotate(angle);
    rect(0, 0, 100, 100);
    fill("blue");
    text(name,0, 0);
}
var addName = function() {
    name = input.value();
}