
 var jaxon,jaxon_running;
 var road,road_moving;
 var powerUp;
 var drink,drinkImage;
 var coin,coinImg;
 var bomb,bombImg;
 var booster, powerImg;
 
function preload(){
  //pre-load images
jaxon_running=loadAnimation("Runner-1.png","Runner-2.png");
road_moving=loadImage("path.png");
coinImg=loadImage("coin.png");
bombImg=loadImage("bomb.png");
drinkImage=loadImage("energyDrink.png");
powerImg=loadImage("power.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here

//creating road
road=createSprite(200,200,10,10);
road.addImage("path",road_moving);


//creating a player
  jaxon=createSprite(200,320,10,10);
  jaxon.addAnimation("running",jaxon_running);
jaxon.scale=0.05


}

function draw() {
  background("green");

  //moving the road
  road.velocityY=4;
  if(road.y>400)
  {
  road.y=road.width/2;
  }

  //making the coins appear 
  showCoin(); 

//making jaxon go left and right
moveJaxon();

//displaying the bombs
displayBomb();

//showing the energy drinks
showDrink();

//showing powerUps
powerUp();





drawSprites();
}
function moveJaxon(){
  if(keyDown("left"))
{
  jaxon.x=jaxon.x-10;
}
if(keyDown("right"))
{
  jaxon.x=jaxon.x+10;
}
if(jaxon.x<100)
{
  jaxon.x=100;
}
if(jaxon.x>300)
  {
   jaxon.x=300;
  }
}

function showCoin()
{
  if(frameCount%60===0)
  {
//creating a coin sprite
var r=Math.round(random(100,300));
coin=createSprite(r,0,2,2);
coin.addImage("coin",coinImg);
coin.velocityY=4;
coin.scale=0.3;
  }
}

function displayBomb()
{
  if(frameCount%85===0)
  {
//creating a coin sprite
var rand=Math.round(random(100,300));
bomb=createSprite(rand,0,2,2);
bomb.addImage("bomb",bombImg);
bomb.velocityY=4;
bomb.scale=0.1;
  }
}

function showDrink()
{
  //creating an energy drink sprite
  if(frameCount%85===0)
  {
var x=Math.round(random(100,300));
drink=createSprite(x,0,2,2);
drink.addImage("drink",drinkImage);
drink.velocityY=4;
drink.scale=0.1;
  }
}

function powerUp()
{
   //creating a power up sprite
   if(frameCount%100===0)
   {
 var p=Math.round(random(100,300));
 booster=createSprite(p,0,2,2);
 booster.addImage("boost",powerImg);
 booster.velocityY=4;
 booster.scale=0.1;
   }
}