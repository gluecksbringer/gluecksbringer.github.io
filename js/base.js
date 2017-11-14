var menuImageWrapper = null;
var navBar = null;
var imgWrapper = null;
var imgContainer = null;

var startIndex = 1;
var endIndex = 10;

var body = null;

function init() {
	//menuImgWrapper = document.getElementById('menuImgWrapper');
	//navBar = document.getElementById('navBar');

	body = document.getElementById('body');
	imgWrapper = document.getElementById('imgWrapper');
	imgContainer = document.getElementById('imgContainer');

	//menuImgWrapper.addEventListener("click", toggleMenu);

	resizeWrapper();
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

	}
}
