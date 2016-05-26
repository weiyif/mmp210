function setup() {
    createCanvas(840, 580);
    background("#05EBEB");

    var lineSize = 70;

    textSize(lineSize);

    var y = lineSize;

    var str1 = "Hello world.";
    var str2 = "你好 世界";
    var str3 = "Strings can also include numbers like 100, punctuation like !~+:) and special characters like π or © or ∆";

    fill("purple");
    strokeWeight(5);
    stroke("green");

    str1 = str1.replace("Hello", "");
    str1 = "welcome to the new world" + str1;
    text(str1, 20, y);

    y += lineSize;
    text(str2, 20, y);

    textFont("monaco");

    textStyle(ITALIC);
    textAlign(RIGHT);

    y += lineSize;
    textSize(30);
    textLeading(50);
    text(str3, 20, y, width - 50, 200);

yinyan(width/2,height/2,400);

}
var yinyan = function(x,y,r){
    noStroke();
    fill("white");
    ellipse(x, y, r,r);

    fill("black");
    ellipse(x+r/4,y,r/2,r/2);

    arc(x, y,r, r, 0,  PI);

    fill("white");
    ellipse(x-r/4,y,r/2,r/2);
    //ellipse(x+r/4,y,r/8,r/8);
    text("极",x+r/4,y);

    fill("black");
   // ellipse(x-r/4,y,r/8,r/8);
   text("太",x-r/4,y)
}


