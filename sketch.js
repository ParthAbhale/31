const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var boun1,boun2,boun3,boun4,boun5,boun6;
var par1;

var particles=[]
var plinkos =[]
var bounds = []

var boundHeight = 500

function setup() {
  createCanvas(800,1000);
  engine=Engine.create()
  world = engine.world;
  boun1 = new Bound(5,500,5,500)
  par1 = new Particles(200,200,20)
}

function draw() {
  background("black");  
  Engine.update(engine)
  par1.display();
}
for (var i=0;i<=800;i=i+80){
    bounds.push(new Bound(i,500,300,boundHeight))
}
