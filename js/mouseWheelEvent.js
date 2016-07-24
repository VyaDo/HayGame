function addEvent(obj, xEvent, fn) {
	if (obj.attachEvent) {
		obj.attachEvent("on" + xEvent, fn);
	} else if (obj.addEventListener) {
		obj.addEventListener(xEvent, fn, false);
	};
};

function addMouseWheel(obj, fn, str) {
	if (arguments.length === 2) {
		addEvent(obj, "mousewheel", fn);
		addEvent(obj, "DOMMouseScroll", fn);
	} else if (arguments.length === 3) {
		if (str === "up") {
			addEvent(obj, "mousewheel", function (e) {
				var e = e || window.event;
				if (e.wheelDelta > 0) {
					fn();
				};
			});
			addEvent(obj, "DOMMouseScroll", function (e) {
				if (e.detail < 0) {
					fn();
				};
			});
		} else if (str === "down") {
			addEvent(obj, "mousewheel", function (e) {
				var e = e || window.event;
				if (e.wheelDelta < 0) {
					fn();
				};
			});
			addEvent(obj, "DOMMouseScroll", function (e) {
				if (e.detail > 0) {
					fn();
				};
			});
		};
	};
};































// JavaScript Document
