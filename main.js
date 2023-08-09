img = "";

function preload(){
    img = loadImage('IMG-6315.jpg');
}

function setup(){
    canvas = createCanvas(840, 620);
    canvas.center();
}
function draw(){
    image(img, 0, 0, 840, 620);
    fill("#FF0000");
    noFill();
    rect(330, 220, 210, 170);
    stroke("#FF0000");
    text("TV", 350, 253);
}