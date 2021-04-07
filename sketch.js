const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body
const Constraint=Matter.Constraint

var engine,world
var ground
var polygon
var block1
var block2
var block3
 var block4
 var block5
var block6
var block7
 var block8
 var block9
 var block10
 var block11
var string

function setup(){
    createCanvas(1000,1000)
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(400,265,190,10)
    polygon=new Polygon(150,200,30)

    block1=new Block(330,235,30,40)
    block2=new Block(360,235,30,40)
    block3=new Block(390,235,30,40)
    block4=new Block(420,235,30,40)
    block5=new Block(450,235,30,40)

    block6=new Block(360,195,30,40)
    block7=new Block(390,195,30,40)
    block8=new Block(420,195,30,40)

    block9=new Block(375,155,30,40)
    block10=new Block(405,155,30,40)

    block11=new Block(390,115,30,40)

string=new String(polygon.body,{x:100,y:150})
}

function draw(){
background("white")

ground.display()
polygon.display()
string.display()




block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
block7.display()
block8.display()
block9.display()
block10.display()
block11.display()


drawSprites()

}

function mouseDragged(){

    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})


}

function mouseReleased(){

    string.fly()
}











