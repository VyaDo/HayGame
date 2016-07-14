$(function () {
	
	var screenW = window.screen.availWidth || document.documentElement.clientHeight,
				screenH = (window.screen.availHeight - window.outerHeight + window.innerHeight || document.documentElement.clientHeight) * 1.04;
		
		var myAudio = new Audio(),
					diao = "c",
					_arguments;
		
		$("#yp").prop({
			width: screenW,
			height: screenH * 0.5,
		});
		
		$("#key .keybtn").each(function (index) {
			
			$(this).css({
				width: screenW * 0.1,
				height: screenH * 0.95 * 0.5,
				lineHeight: screenH * 0.95 * 0.5 + "px",
				
			}).hover(function () {
				
				$(this).css({
					border: "3px solid pink",
					width: screenW * 0.1 - 6,
					height: screenH * 0.95 * 0.5 - 6,
					
				});
				
				$(this).find("img").css("left", -$("#key .keybtn").outerWidth() * index + $("#key .keybtn").outerWidth() * 0.045 * index);
				
			}, function () {
				
				$(this).css({
					border: 0,
					width: screenW * 0.1,
					height: screenH * 0.95 * 0.5,
				});
				
				$(this).find("img").css("left", -$("#key .keybtn").outerWidth() * index);
				
			}).one("mousedown", function () {
				_arguments = arguments;
				
				$(this).css({
					border: 0,
					width: screenW * 0.1,
					height: screenH * 0.95 * 0.5,
					boxShadow: "0 0 8px #333 inset",
				});
				
				$(this).find("img").css({
					left: -$("#key .keybtn").outerWidth() * index,
					top: -$("#key .keybtn").outerHeight(),
				});
				
				myAudio.src = "audio/raw/" + diao + (index + 1) + ".ogg";
				myAudio.play();
				
			}).on("mouseup", function () {
				
				$(this).css({
					border: "3px solid pink",
					width: screenW * 0.1 - 6,
					height: screenH * 0.95 * 0.5 - 6,
					boxShadow: "0 0 3px #333",
				});
				
				$(this).find("img").css({
					left: -$("#key .keybtn").outerWidth() * index + $("#key .keybtn").outerWidth() * 0.045 * index,
					top: 0,
				});
				
				$(this).one("mousedown", _arguments.callee);
				
			});
		});
		
		$("#key .keybtn .bg_keybtn").each(function (index) {
			$(this).css("left", -$("#key .keybtn").outerWidth() * index);
		});
		
		$(".extra").find(".back_music").hover(function () {
			$(this).find(".back").attr("src", "img/icon_white.png");
		}, function () {
			$(this).find(".back").attr("src", "img/icon_orange.png");
		}).on("click", function () {
			$("#musicApp").animate({
				left: screenW,
			});
		});
	
});
// JavaScript Document
