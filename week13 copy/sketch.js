var dead = false;
var player;
var speed = 10;
var jump = 20;
var jumping = false;
var platfrom;
var cloud, cloudSprite;
var obstacle;
var gravity = 1;
var player_walk_sprites,
    player_walk,
    player_stand_sprites,
    playler_stand;
var eee;
var mountan;

function preload() {
   
eee= loadImage("background.jpg");
    fire = loadImage("fire.png");
    cloud = loadImage("cloud.png");
   
}

function setup() {
    createCanvas(720, 360);

    player = createSprite(100, 100);
    player.draw=function(){
    car(0,0,100);
    }
    player.setCollider("circle", 0, 0, 20, 20);
    player.debug = true;


    platform = createSprite(width / 2, height, width, 20);
    obstacle = createSprite(300, height, 60, 80);
    obstacle.addImage(fire);

    cloudSprite = createSprite(width, height / 2, width, height);
    cloudSprite.addImage(cloud);
    
//    cloudSprite.debug = true;

}



function draw() {
    background(eee);
    
    if (!dead) {
        if (obstacle.position.x < -obstacle.width / 2) obstacle.position.x = random(width, 2 * width);
        if (cloudSprite.position.x < -cloudSprite.width/2) cloudSprite.position.x =  random(width, 2 * width);

        if (keyDown("up")) {
            player.position.y -= speed;
        }
        if (keyDown("down")) {
            player.position.y += speed;
        }
        if (keyDown("right")) {
          obstacle.position.x -= speed;
            cloudSprite.position.x -= speed;
        }
        if (keyDown("left")) {
           
        }

        if (player.collide(obstacle)) {
            //player.remove();
            player.position.x = 100;
            player.position.y = 0;
            player.velocity.x = 0;
            0
            obstacle.position.x = 300;
            dead = true;
        }


        drawSprites();
    } else {
        fill("black");
        text("You're dead", 100, 100);
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
