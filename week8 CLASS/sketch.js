
function setup() {
    createCanvas(840, 580);
    background("white");

    
    var size=40;
    var space=size*2;
    
 
    
    for (var x=50;x <=width;x+=space){
        for(var y=50;y< height;y +=space){
           
            
var r = random(0,255);
var g = random(0,255);
var b = random(0,255);
fill(r, g, b); 
    
       
       ellipse(x,y,size,size);
        }
    }
 
   
    
    
}