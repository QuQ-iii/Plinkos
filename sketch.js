const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var particles = [];
var divisions = [];
var plinkos = [];

function setup() {
  var canvas = createCanvas(480,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height, width, 10);

  for(var s = 0; s <=width; s = s + 80){
    divisions.push(new Divisions(s, height-100,10,200));
  }

  for(var u = 40; u <= width; u = u + 50){
    plinkos.push(new Plinkos(u, 75));
  }

  for(var u = 15; u <= width-10; u = u + 50){
    plinkos.push(new Plinkos(u, 175));
  }

  for(var u = 40; u <= width; u = u + 50){
    plinkos.push(new Plinkos(u, 275));
  }

  for(var u = 15; u <= width-10; u = u + 50){
    plinkos.push(new Plinkos(u, 375));
  }
  
}

function draw() {
  background(0);  
  Engine.update(engine);

  console.log(frameCount);

  if(frameCount % 90 === 0){
    particles.push(new Particle((random(20,460)), 20));
  }

  for(var g = 0; g < divisions.length; g++){
    divisions[g].display();
  }

  for(var a = 0; a < plinkos.length; a++){
    plinkos[a].display();
  }

  for(var a = 0; a < particles.length; a++){
    particles[a].display();
  }
  
  ground.display();
  
}