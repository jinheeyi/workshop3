let img=[];
let night, evening, morning, sunset;

function preload(){
  night= loadImage('images/night.jpg');
  evening=  loadImage('images/evening.jpg');
  morning=  loadImage('images/morning.jpg');
  sunset= loadImage('images/sunset.jpg');
}

function setup(){
  createCanvas(400,400);
  img.push(night);
  img.push(evening);
  img.push(morning);
  img.push(sunset);
}

function draw(){
  background(220);
  image(img[2],0,0,200,200);
  image(img[1], width/2, 0, width/2, height/2);
  image(img[0],0, height/2, width/2, height/2);
  image(img[3], width/2, height/2, width/2, height/2);
  filter(BLUR,5)

  fill(255); // Set text color to white
  text("My Beautiful Day", width/2, height / 2); // centered text
}

