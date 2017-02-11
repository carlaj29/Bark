var mic, volume;

var myImg = [];


 function preload() { // preload() runs once
  
     myImg = loadImage('images/dog3.png');
     
 }

var dogs = []

function setup() {
  createCanvas(windowWidth, windowHeight)
  
    //Deal with microphone
  mic = new p5.AudioIn();
  mic.start();
}
    

function draw() {
  volume = mic.getLevel();
  volume = map(volume,0,1,0,2)
  
  background(35,15,43);
  
  textSize(30);
  textAlign(CENTER);
  fill(242,29,65)
  textFont('Barrio')
  text('Bark to see the dogs',width/2,height/2)
  
  var size = map(volume, 0.5, 1, width / 5, width / 2);

  
  //dogs
  if(true){
    var amount= map(volume,0,1,0,2);
    for(i=1; i <= amount; i++) {
      var obj = {
        x: random(0,1),
        y: random(0,-height/10),
        size: random()
        
    
      }
      //add dogs to the array of dogs
      dogs.push(obj);
    }
  }
  
  
  for(var i=0; i< dogs.length; i++) {
    var fallingSpeed = 2;
    
   
    dogs[i].y += fallingSpeed + dogs[i].y*0.006; 
   
    image(myImg, dogs[i].x*width, dogs[i].y);
   
}
}
  
 
  for (var i=dogs.length-1; i>= 0; i--){
    if (dogs[i].y > height){
      dogs.splice(i,1);
    }
  }