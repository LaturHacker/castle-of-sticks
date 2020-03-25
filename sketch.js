function setup() {
  createCanvas(400,400);
  createSprite(200, 400, 200, 500);
  createSprite(350, 400, 50, 700);
  createSprite(50, 400, 50, 700);
  createSprite(200,140,240,60);

  createSprite(350,40,80,60);
  createSprite(50,40,80,60);
  

  

} 

function draw() {
  background(600,200,60);  
  drawSprites();
}