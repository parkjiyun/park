var bg, ballon1, ballon2, cloud, flag, flag2, horse1, horse2, play1, play2, wheel, wheel2, wheel3;
var vd;
function setup() {
    createCanvas(1500,1000);
	bg = loadImage("bg.png");
	ballon1 = loadImage("ballon1.png");
	ballon2 = loadImage("ballon2.png");
	flag = loadImage("flag.png");
	flag2 = loadImage("flag2.png");
	horse1 = loadImage("horse1.png");
	horse2 = loadImage("horse2.png");
	play1 = loadImage("play1.png");
	play2 = loadImage("play2.png");
	wheel = loadImage("wheel.png");
	wheel2 = loadImage("wheel2.png");
	wheel3 = loadImage("wheel3.png");
	vd = createVideo(["mickey.mp4"]);
	vd.loop();
	// vd.hide();
}


function draw() {

	background(bg);
	var t1 = (new Date()%6000)/6000;
	for(var i = 0 ; i < 5 ;i++){
		image(ballon1,230+sin(t1*2*PI+2*PI/5*i)*100-10,430+cos(t1*2*PI+2*PI/5*i)*100-10,20,20);
	}


	image(ballon1,230,430+cos(t1*2*PI)*10,101,151);
	image(ballon2,100,200+cos(t1*6*PI)*50,120,125);
	image(ballon1,1350,100+cos(t1*2*PI)*10,101,151);
	image(ballon2,1000,480+cos(t1*8*PI)*10,120,125);
	image(ballon2,1400,200+cos(t1*12*PI)*50,120,125);

  	if(tDig <0.5){
    image(flag,10,10,1500,293);
  	}else{
    image(flag2,10,10,1500,293);
  	} 

  	image(vd,100,100);
    
}