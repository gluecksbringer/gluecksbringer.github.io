var menuImageWrapper = null;
var navBar = null;
var imgWrapper = null;
var imgContainer = null;

function init() {
	menuImgWrapper = document.getElementById('menuImgWrapper');
	navBar = document.getElementById('navBar');

	imgWrapper = document.getElementById('imgWrapper');
	imgContainer = document.getElementById('imgContainer');

	menuImgWrapper.addEventListener("click", toggleMenu);
	imgWrapper.addEventListener('resize', resizeWrapper);
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
	if ( imgWrapper.width < 600 ) {
		console.log('Under 600');
	}
}
