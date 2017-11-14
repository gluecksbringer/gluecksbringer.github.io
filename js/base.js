var menuImageWrapper = null;
var navBar = null;
var imgWrapper = null;
var imgContainer = null;

var startIndex = 1;
var endIndex = 10;

function init() {
	//menuImgWrapper = document.getElementById('menuImgWrapper');
	//navBar = document.getElementById('navBar');

	imgWrapper = document.getElementById('imgWrapper');
	imgContainer = document.getElementById('imgContainer');

	//menuImgWrapper.addEventListener("click", toggleMenu);
	imgWrapper.addEventListener('resize', resizeWrapper);
	console.log("success");
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
	console.log('hello');
	if ( imgWrapper.width < 600 ) {
		console.log('Under 600');
	}
}
