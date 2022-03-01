var ul = document.querySelector("ul");
var li = document.querySelectorAll('ul li');
var move = 0;
var count = 0;
ul.style.marginLeft = move;

//google 找到的滑鼠滾輪事件
function mouse_wheel(e) {
	e = e || window.event;
	e.preventDefault();
	if (e.wheelDelta <= 0 || e.detail > 0) {
		if(count>(li.length - 2)){return}
		move = move - 260;
		ul.style.marginLeft = move + "px";
		count++;
	} else {
		count--;
		if(count<0){count=0};
		if (parseInt(ul.style.marginLeft) == 0) {return}
		move = move + 260;
		ul.style.marginLeft = move + "px";
	}
	
}

// hook event listener on window object
if ("onmousewheel" in window) {
	window.onmousewheel = mouse_wheel;
} else if ("onmousewheel" in document) {
	document.onmousewheel = mouse_wheel;
} else if ("addEventListener" in window) {
	window.addEventListener("mousewheel", mouse_wheel, false);
	window.addEventListener("DOMMouseScroll", mouse_wheel, false);
}
