
function preload() {
    cat1=loadImage("cat1.png");
    cat2=loadImage("cat2.png");
    cat3=loadImage("cat3.png");
    cat4=loadImage("cat4.png");
    garden=loadImage("garden.png");
    mouse1=loadImage("mouse1.png");
    mouse2=loadImage("mouse2.png");
    mouse3=loadImage("mouse3.png");
    mouse4=loadImage("mouse4.png");
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(200,600);
    cat.addAnimation("cat",cat1)
    mouse=createSprite(870,600)
    mouse.addAnimation("mouse",mouse1)

}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x <(cat.width-mouse.width)/2)
    //write code here to change animation

    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        cat.velovityx=-5;
        cat.addAnimation("cat running",catImg2);
        cat.changeAnimation("cat running")
    }

  //For moving and changing animation write code here


}
