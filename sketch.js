var bg, ballon1, ballon2, cloud, flag, flag2, horse1, horse2, play1, play2, wheel, wheel2, wheel3;

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
}


function draw() {

	background(bg);
	 image(ballon,230,430+cos(t1*2*PI)*50,30,31);
    
}