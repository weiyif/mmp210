var numSpaceshipe =20;
var x=[];
var y=[];
var speed=[];
var size=[];

 
function setup() {
    createCanvas(640,640);
    for (var i=0;i<numSpaceshipe;i++) {
        x.push( random(0,width/2));
       y.push (random(0,height));
        
        
        speed.push(random(1,4));
        size[i]=random(10,100);
        
       var r = random(0,255);
        var g = random(0,255); 
      var b = random(0,255);
        
        
    }

    console.log(x);
}
function draw(){
    background("darkblue");

    
    for(var i =0;i<20; i++){
       
    car(x[i],y[i],100);
        
        x[i]+= speed[i];
        if (x[i] >=width) x[i]=0;
}
    
}
var car =function(x,y,size){ 
    
    noStroke();
    fill("blue");
    arc(x + size - size/8, y + size/2, 100, 50, PI*3/2, 0); 
    
    fill("#BA4CED");
    triangle(x + size/2, y + size/5, x + size, y + size/4, x + size, y + size/2);
     
  
    
    
    stroke("white");
    line(x-size/4,y+size/2,x+size+size/4,y+size/2);
    
     fill("#FFFF00");
     
    rect(x-30,y+15,39,27,30,88);
   
   fill("#80ff80");   
    triangle(x +size/8,y +size/8,x+size,y+size/2,x+size/3,y + size/2);
    fill("pink");
    triangle(x +size/8,y +size/5,x+size/2,y+size/2,x+size/6,y + size/2 );

    fill("#BE90D4");
    quad(x-size/5,y+size/6,x+size/8,y+size/4,x+size/5,y+size/5,x+size/8,y+size/8);
    
   
    
    fill("#ED135C");
    quad(x-size/7,y+size/3,x+size/2,y+size/2,x+size/5,y+size/6,x+size/2,y+size/4);
    
   
    fill("#3D3DBA");
 strokeWeight(4);  // Thicker
line(x+size/8,y +size/4,x-size/3,y, y+size/2);
    
    fill("#BA744E");
    ellipse(x + size/1, y + size/2, 25, 25); 
    ellipse(x,y + size/2,25,25);

    
}
       