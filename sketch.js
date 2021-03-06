
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var sling1,hexagon;
var score = 0 ;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,620,370,20);
	ground1 = new Ground(700,560,300,20);
	ground2 = new Ground(50,690,1800,20);

	box1 = new Box(280,590,30,30);
	box2 = new Box(300,590,30,30);
	box3 = new Box(320,590,30,30);
	box4 = new Box(340,590,30,30);
	box5 = new Box(360,590,30,30);
	box6 = new Box(380,590,30,30);
	box7 = new Box(400,590,30,30);
	box8 = new Box(420,590,30,30);
	box9 = new Box(440,590,30,30);

	box10 = new Box(300,580,30,30);
	box11 = new Box(320,580,30,30);
	box12 = new Box(340,580,30,30);
	box13 = new Box(360,580,30,30);
	box14 = new Box(380,580,30,30);
	box15 = new Box(400,580,30,30);
	box16 = new Box(420,580,30,30);

	box17 = new Box(320,570,30,30);
	box18 = new Box(340,570,30,30);
	box19 = new Box(360,570,30,30);
	box20 = new Box(380,570,30,30);
	box21 = new Box(400,570,30,30);

	box22 = new Box(340,560,30,30);
	box23 = new Box(360,560,30,30);
	box24 = new Box(380,560,30,30);

	box25 = new Box(360,550,30,30);

	box26 = new Box(600,540,30,30);
	box27 = new Box(620,540,30,30);
	box28 = new Box(640,540,30,30);
	box29 = new Box(680,540,30,30);
	box30 = new Box(700,540,30,30);
	box31 = new Box(720,540,30,30);
	box32 = new Box(740,540,30,30);

	box33 = new Box(600,530,30,30);
	box34 = new Box(620,530,30,30);
	box35 = new Box(640,530,30,30);
	box36 = new Box(680,530,30,30);
	box37 = new Box(700,530,30,30);
	box38 = new Box(720,530,30,30);
	box39 = new Box(740,530,30,30);
	
	box40 = new Box(600,520,30,30);
	box41 = new Box(620,520,30,30);
	box42 = new Box(640,520,30,30);
	box43 = new Box(680,520,30,30);
	box44 = new Box(700,520,30,30);
	box45 = new Box(720,520,30,30);
	box46 = new Box(740,520,30,30);

	box47 = new Box(600,510,30,30);
	box48 = new Box(620,510,30,30);
	box49 = new Box(640,510,30,30);
	box50 = new Box(680,510,30,30);
	box51 = new Box(700,510,30,30);
	box52 = new Box(720,510,30,30);
	box53 = new Box(740,510,30,30);

	hexagon = new Polygon(100,500,50,50);
	sling1 = new Slingshot(hexagon.body,{x:100,y:200});

	Engine.run(engine);
  
 }


      function draw() {
      rectMode(CENTER);
		background(0);

		box1.score();
	box2.score();
	box3.score();
	box4.score();
	box5.score();
	box6.score();
	box7.score();
	box8.score();
	box9.score();

	box10.score();
	box11.score();
	box12.score();
	box13.score();
	box14.score();
	box15.score();
	box16.score();

	box17.score();	
	box18.score();	
	box19.score();	
	box20.score();	
	box21.score();

	box22.score();		
	box23.score();		
	box24.score();	

	box25.score();

	box26.score();
	box27.score();		
	box28.score();
	box29.score();
	box30.score();		
	box31.score();
	box32.score();

	box33.score();
	box34.score();		
	box35.score();
	box36.score();
	box37.score();		
	box38.score();
	box39.score();

	box40.score();
	box41.score();		
	box42.score();
	box43.score();
	box44.score();		
	box45.score();
	box46.score();	

	box47.score();
	box48.score();		
	box49.score();
	box50.score();
	box51.score();		
	box52.score();
	box53.score();


        noStroke();
        textSize(35)
        fill("white")
		text("Score  " + score, width-300, 50)
		
  	  ground.display();
  	  ground1.display();
	  ground2.display();	

	hexagon.display();
	sling1.display();	

	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	box6.display();
	box7.display();
	box8.display();
	box9.display();

	box10.display();
	box11.display();
	box12.display();
	box13.display();
	box14.display();
	box15.display();
	box16.display();

	box17.display();	
	box18.display();	
	box19.display();	
	box20.display();	
	box21.display();

	box22.display();		
	box23.display();		
	box24.display();	

	box25.display();

	box26.display();
	box27.display();		
	box28.display();
	box29.display();
	box30.display();		
	box31.display();
	box32.display();

	box33.display();
	box34.display();		
	box35.display();
	box36.display();
	box37.display();		
	box38.display();
	box39.display();

	box40.display();
	box41.display();		
	box42.display();
	box43.display();
	box44.display();		
	box45.display();
	box46.display();	

	box47.display();
	box48.display();		
	box49.display();
	box50.display();
	box51.display();		
	box52.display();
	box53.display();		

		

	drawSprites();
	
	}

	function mouseDragged() {
		Matter.Body.setPosition(hexagon.body, {x:mouseX,y:mouseY});
	}

	function mouseReleased() {
	sling1.fly();

	}

	function keyPressed(){
		if(keyCode === 32 ){
		   sling1.attach(hexagon.body)
	}
}