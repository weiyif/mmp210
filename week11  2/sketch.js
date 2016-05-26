var r =0, g = 0, b =0;
 
function setup() {
    createCanvas(720,360);
    textSize(40);
}

 
function draw(){
    background("black");
    fill(r,g,b);
    for(var i =0; i< x.length;i++){
    } ;
    
ellipse(width/2,height/2,100,100);
}
    function mousePressed(){
      r =random(0,255);
       g =random(0,255);
        b =random(0,255);
        
        x.puch(mouseX);
         x.puch(mouseY);
    }
    
    
    
    
    
    
 