var menuImageWrapper = null;
var navBar = null;

function init() {
	menuImgWrapper = document.getElementById('menuImgWrapper');
	navBar = document.getElementById('navBar');
	
	menuImgWrapper.addEventListener("click", toggleMenu);
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
