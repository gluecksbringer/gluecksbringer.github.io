var menuImageWrapper = null;
var navBar = null;
var imgWrapper = null;
var imgContainer = null;

var startIndex = 1;
var endIndex = 10;
var amount = endIndex-startIndex+1;

var body = null;
var c = null;
var ctx = null;

var iw = 0;
var ih = 0;

var img1 = null;

var images = new Array();
var loadCounter = 0;

var current = 0;
var fadeFlag = false;
var alpha = 0.0;
var step = 0.01;
var intervalAlpha = 10;
var interval = 2000;

function fade() {
	alpha += step;

	if ( alpha > 1.0 ) {
		fadeFlag = false;
		current = (current + 1) % (amount);
		resizeWrapper();
		alpha = 0;
		setTimeout(change, interval);
	} else {
		resizeWrapper();
		setTimeout(fade, intervalAlpha);
	}
}

function change() {

	resizeWrapper();
	fadeFlag = true;
	fade();
}

function initImage() {
	loadCounter = loadCounter+1;
	images.splice(this.index, 0, this);
	if ( loadCounter == amount ) {
		resizeWrapper();
		console.log('Finished image loading');
		setTimeout(change, interval);
		current = 0;
	}
}



function init() {

	for ( i = startIndex; i < endIndex+1; i++ ) {
		var tmp = new Image();
		tmp.index = i-startIndex;
		tmp.onload = initImage;
		tmp.src = "img/other/i-"+i+".jpg";
	}


	//menuImgWrapper = document.getElementById('menuImgWrapper');
	//navBar = document.getElementById('navBar');

	body = document.getElementById('body');
	imgWrapper = document.getElementById('imgWrapper');
	imgContainer = document.getElementById('imgContainer');
	c = document.getElementById('myCanvas');
	ctx = c.getContext("2d");

	//menuImgWrapper.addEventListener("click", toggleMenu);

	resizeWrapper();
	console.log("Init success");

	resizeWrapper();


	//Show percentage bar
	document.getElementById('innerBar').classList.add('barShown');
}

function toggleMenu() {
    if ( navBar.classList.contains('showMenu') ) {
        navBar.classList.remove('showMenu');
    } else {
        navBar.classList.add('showMenu');
    }
}

function removeElement(obj) {
	obj.classList.add('collapse');
	//obj.parentNode.removeChild(obj);
}

function resizeWrapper() {
	if ( imgWrapper.clientWidth < 600 ) {
		iw = imgWrapper.clientWidth;
		ih = (imgWrapper.clientWidth/2);
		ctx.canvas.width = imgWrapper.clientWidth;
		ctx.canvas.height = ih;
	} else {
		iw = imgWrapper.clientWidth;
		ih = 300;
		ctx.canvas.width = "600";
		ctx.canvas.height = "300";
	}

	if ( images.length > 1 ) {


		var img = images[current];
		var img2 = images[(current+1) % amount];

		ctx.clearRect(0, 0, c.width, c.height);

		drawI(img, 1.0);

		if ( fadeFlag ) {
			drawI(img2, alpha);
		}
	}
}

function drawI(img, alpha) {
	ctx.setTransform(1, 0, 0, 1, 0, 0);

	var iw = c.width;
	var ih = c.height;

	ctx.imageSmoothingQuality = "high"
	ih = (img.height * iw)/img.width;
	var ty = (ih-c.height)*0.5;
	ctx.globalAlpha = alpha;
	ctx.translate(0, -ty);
	ctx.drawImage(img, 0, 0, iw, ih);
}
