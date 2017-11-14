var menuImageWrapper = null;
var navBar = null;
var imgWrapper = null;
var imgContainer = null;

var startIndex = 1;
var endIndex = 10;

var body = null;
var c = null;
var ctx = null;

var iw = 0;
var ih = 0;

var img1 = null;

function init() {

	img1 = new Image(160, 90);
	img1.src = 'img/other/i-1.jpg';


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
		c.style.height = ih+"px";
	} else {
		iw = imgWrapper.clientWidth;
		ih = 300;
		c.style.height = "300px";
	}

	ctx.drawImage(img1, iw, ih);
}
