var cat;
var img;
var playing = true;
var rotX = 0, rotY = 0, rotZ = 0;

var x =0;
var playAnimation =true;
function setup() {
    createCanvas(720, 360, WEBGL);
    
    cat = createVideo(["dog.mp4"]);
    img = loadImage("dog.jpg");
    cat.loop();
   
}

function  draw (){
    background("black");
    
   texture(cat);
    
    push();
    translate(x,0,0);
    rotateX(rotX);
    rotateY(rotY);
    sphere(200);
    pop();
   
    
    if(playAnimation) x+=20;
    if(x>width)x=0,
        
    
   
    push();
    translate(-300,0,0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(200, 200, 200);
    pop();
}
function mouseDragged(){
   rotX =mouseX /100;
   rotY =mouseY /100;
}
    
function mouseClicked(){
    if (keycode==32){
        if (playing) cat.pause();
        else cat.loop();
        playing = !playing;
        
        playAnimation = !playAnimation;
    }
}