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
		
		$("#tune").find(".yd_box").css({
			borderRadius: $(this).height() * 0.5,
		}).on("mousedown", function () {
			$(this).css({
				boxShadow: "0 0 5px #000 inset",
			});
			$(this).siblings("div").css({
				boxShadow: "0 0 2px #333",
			});
			$(this).find("span").css({
				color: "#c00",
			});
			$(this).siblings("div").find("span").css({
				color: "#000",
			});
			diao = $(this).attr("id");
		});
		
		$("#key").find(".keybtn").each(function (index) {
			
			$(this).css({
				width: screenW * 0.1,
				height: screenH * 0.95 * 0.5,
				
			}).hover(function () {
				$(this).css({
					border: "3px solid pink",
					width: screenW * 0.1 - 6,
					height: screenH * 0.95 * 0.5 - 6,
				});
				
			}, function () {
				$(this).css({
					border: "none",
					width: screenW * 0.1,
					height: screenH * 0.95 * 0.5,
					boxShadow: "0 0 3px #333",
				});
				
				$(this).find("img").attr({
					src: $(this).find("img").attr("data-src2"),
				});
				
				$(this).one("mousedown", function () {
					_arguments = arguments;
					
					$(this).css({
						border: 0,
						width: screenW * 0.1,
						height: screenH * 0.95 * 0.5,
						boxShadow: "0 0 8px #333 inset",
					});
					
					$(this).find("img").attr({
						src: $(this).find("img").attr("data-src"),
					});
					
					myAudio.src = "audio/raw/" + diao + (index + 1) + ".ogg";
					myAudio.play();
				});
				
			}).one("mousedown", function () {
				_arguments = arguments;
				
				$(this).css({
					border: 0,
					width: screenW * 0.1,
					height: screenH * 0.95 * 0.5,
					boxShadow: "0 0 8px #333 inset",
				});
				
				$(this).find("img").attr({
					src: $(this).find("img").attr("data-src"),
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
				
				$(this).find("img").attr({
					src: $(this).find("img").attr("data-src2"),
				});
				
				$(this).one("mousedown", _arguments.callee);
				
			});
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
		

		$(document).on("keydown", function (e) {
			var i = e.key;
			switch (i) {
					
				case "e":
					$("#b").trigger("mousedown");
					break;
					
				case "r":
					$("#c").trigger("mousedown");
					break;
					
				case "t":
					$("#d").trigger("mousedown");
					break;
					
				case "y":
					$("#e").trigger("mousedown");
					break;
					
				case "u":
					$("#f").trigger("mousedown");
					break;
					
				case "i":
					$("#g").trigger("mousedown");
					break;
					
				case "w":
					$("#a").trigger("mousedown");
					break;
					
			};
		
		}).one("keydown", function (e) {
			play(e);
		}).on("keyup", function (e) {
			kup(e);
			$(document).one("keydown", function (e) {
				play(e);
			});
		});
		
		function play(e) {
			var j = e.key;
			switch (j) {
					
				case "s":
					$("#do").trigger("mousedown");
					break;
					
				case "d":
					$("#re").trigger("mousedown");
					break;
					
				case "f":
					$("#mi").trigger("mousedown");
					break;
				
				case "g":
					$("#fa").trigger("mousedown");
					break;
				
				case "h":
					$("#so").trigger("mousedown");
					break;
				
				case "j":		
					$("#la").trigger("mousedown");
					break;
				
				case "k":
					$("#xi").trigger("mousedown");
					break;
				
			};	
		};
		
		function kup(e) {
			var j = e.key;
			switch (j) {
					
				case "s":
					$("#do").trigger("mouseup").trigger("mouseleave");
					break;
					
				case "d":
					$("#re").trigger("mouseup").trigger("mouseleave");
					break;
					
				case "f":
					$("#mi").trigger("mouseup").trigger("mouseleave");
					break;
				
				case "g":
					$("#fa").trigger("mouseup").trigger("mouseleave");
					break;
				
				case "h":
					$("#so").trigger("mouseup").trigger("mouseleave");
					break;
				
				case "j":		
					$("#la").trigger("mouseup").trigger("mouseleave");
					break;
				
				case "k":
					$("#xi").trigger("mouseup").trigger("mouseleave");
					break;
				
			};	
		};
		
		
		
	
});
// JavaScript Document
