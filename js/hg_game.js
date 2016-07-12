
$(function () {
	$("#game").find(".disp").hover(function () {
		$(this).find("img").animate({
			width: 180,
			height: 225,
			marginLeft: -10,
			marginTop: -12,
		});
		$(this).find(".cover").animate({
			top: 0,
		});
		$(this).find(".title").animate({
			bottom: 0,
		})
	}, function () {
		$(this).find(".title").animate({
			bottom: "-12%",
		});
		$(this).find(".cover").animate({
			top: -200,
		});
		$(this).find("img").animate({
			width: 160,
			height: 200,
			marginLeft: 0,
			marginTop: 0,
		});
	});
	
	(function () {
		var url = $("#container").find(".icon_hp").css("background-image"),
					urln = "url('img/icon_white.png')";
		$("#container").find(".icon_hp").hover(function () {
	  	$(this).css("background-image", urln);
		}, function () {
			$(this).css("background-image", url);
		});
	})();
	
	
	
});

























// JavaScript Document