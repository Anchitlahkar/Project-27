const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pendulum;

function setup() {
    canvas = createCanvas(windowWidth/2,windowHeight/1.5);
    engine = Engine.create();
    world = engine.world;



    ground = new Ground(600,height,1200,20);
    ground1 = new Ground(370,50,300,10);



    bob1 = new Pendulum(200+50,300,"yellow");
    bob1Sling = new Sling(bob1.body,{x:200+50, y:50})
    
    bob2 = new Pendulum(300-40+50,300,"yellow");
    bob2Sling = new Sling(bob2.body,{x:300-40+50, y:50})
    
    bob3 = new Pendulum(400-80+50,300,"yellow");
    bob3Sling = new Sling(bob3.body,{x:400-80+50, y:50})
    
    bob4 = new Pendulum(500-120+50,300,"yellow");
    bob4Sling = new Sling(bob4.body,{x:500-120+50, y:50})
    
    bob5 = new Pendulum(600-160+50,300,"yellow");
    bob5Sling = new Sling(bob5.body,{x:600-160+50, y:50})

    
}
function draw() {
    background(225);
    Engine.update(engine);
    
    bob1Sling.display()
    bob1.display()
    
    bob2Sling.display()
    bob2.display()
    
    bob3Sling.display()
    bob3.display()
    
    bob4Sling.display()
    bob4.display()
    
    bob5Sling.display()
    bob5.display()

    ground.display()
    ground1.display()


    keyPressed()
}

function keyPressed(){
    if(keyWentDown(UP_ARROW)){
        Matter.Body.applyForce(bob1.body,bob1.body.position,{x: -0.05, y: -0.5})
    }
    if(keyDown(DOWN_ARROW)){
        Matter.Body.applyForce(bob1.body,bob1.body.position,{x:45-25,y:-45+25})
    }
}