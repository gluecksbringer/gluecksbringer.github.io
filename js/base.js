var menuImageWrapper = null;
var navBar = null;
var imgWrapper = null;
var imgContainer = null;

var startIndex = 1;
var endIndex = 10;

var body = null;
var c = null;
var ctx = null;

function init() {
	//menuImgWrapper = document.getElementById('menuImgWrapper');
	//navBar = document.getElementById('navBar');

	body = document.getElementById('body');
	imgWrapper = document.getElementById('imgWrapper');
	imgContainer = document.getElementById('imgContainer');
	c = document.getElementById('myCanvas');
	ctx = c.getContext("2d");

	//menuImgWrapper.addEventListener("click", toggleMenu);

	resizeWrapper();
	ctx.moveTo(0,0);
	ctx.lineTo(200, 100);
	ctx.stroke();
	console.log("Init success");
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
		c.style.height = (imgWrapper.clientWidth/3)+"px";
	} else {
		c.style.height = "300px";
	}
}
