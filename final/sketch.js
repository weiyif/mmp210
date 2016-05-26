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

var mountain, mountainX = 400;
var mountainColliders = [];

function preload() {

eee= loadImage("siqu.jpg");

    fire = loadImage("fire.png");
    cloud = loadImage("cloud.png");
    mountain = loadImage("sss.png");



}

function setup() {
    createCanvas(920, 460);

    player = createSprite(100, 100);
    player.draw=function(){
    car(0,0,100);
    }
    player.setCollider("circle", 0, 0, 20, 10);
//    player.debug = true;
//
//
//    player.debug = true;



    platform = createSprite(width / 2, height, width, 20);
    obstacle = createSprite(300, height, 60, 80);
    obstacle.addImage(fire);

    cloudSprite = createSprite(width, height / 2, width, height);
    cloudSprite.addImage(cloud);

    //cloudSprite = createSprite(width, height / 2, width, height);
    //cloudSprite.addImage(mountain);

//    cloudSprite.debug = true;

    // mountain colliders
    mountainColliders[0] = createSprite(760,50);
    mountainColliders[1] = createSprite(670,130);
    mountainColliders[2] = createSprite(570,206);
    mountainColliders[3] = createSprite(535,319);
     mountainColliders[4] = createSprite(650,369);
       mountainColliders[5] = createSprite(841,269);
        mountainColliders[6] = createSprite(950,150);
     mountainColliders[7] = createSprite(980,150);
                   mountainColliders[8] = createSprite(1100,80);
     mountainColliders[9] = createSprite(1310,70);
    mountainColliders[11] = createSprite(1100,210);
     mountainColliders[12] = createSprite(1070,210);
         mountainColliders[10] = createSprite(1050,280);
    mountainColliders[13] = createSprite(1050,400);
    mountainColliders[14] = createSprite(910,450);
    mountainColliders[15] = createSprite(1280,320);
    mountainColliders[16] = createSprite(1370,150);



    for (var i = 0; i < mountainColliders.length; i++) {
        mountainColliders[i].setCollider("rectangle", 0, 0, 50, 10);
        mountainColliders[i].draw = function() {};
        mountainColliders[i].debug = true;
    }



}



function draw() {

    background(eee);

    if (!dead) {

        if (obstacle.position.x < -obstacle.width / 2) obstacle.position.x = random(width, 2 * width);
        if (cloudSprite.position.x < -cloudSprite.width/2) cloudSprite.position.x =  random(width, 2 * width);

        if (mountainX < -mountain.width) {
            mountainX = 400;
            for (var i = 0; i < mountainColliders.length; i++) {
                mountainColliders[i].position.x += mountain.width + 400;
            }
        }


        if (keyDown("up")) {
            player.position.y -= speed;
        }
        if (keyDown("down")) {
            player.position.y += speed;
        }
        if (keyDown("right")) {
            obstacle.position.x -= speed;
            cloudSprite.position.x -= speed;
            mountainX -= speed;
            for (var i = 0; i < mountainColliders.length; i++) {
                mountainColliders[i].position.x -= speed;
            }
        }

        if (keyDown("left")) {


        }
        for (var i = 0; i < mountainColliders.length; i++) {


            if (player.collide(mountainColliders[i])) {
                //player.remove();


                dead = true;
            }
        }

 image(mountain, mountainX, 0);
        drawSprites();


    } else {
        strokeWeight(5)
        fill("#90D1D4");
        text("game over ", 250, 100);

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


