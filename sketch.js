var michael,michael_img;
var bordas;


function preload(){
  //pre carrega as imagens do jogo
  
  michael_img = loadAnimation("trex1.png","trex3.png","trex4.png");


}

function setup(){
  createCanvas(600,200);

  //configurações do dinossauro michael
  michael = createSprite(50,100,20,20);
  michael.addAnimation("running",michael_img);
  michael.scale = 0.5;
  
  bordas = createEdgeSprites();

}

function draw(){
  background('white');

  if(keyDown("w")){
    michael.velocityY = -10;
  }

  //gravidade
  michael.velocityY = michael.velocityY + 1;

  michael.collide(bordas);

  drawSprites();
}


