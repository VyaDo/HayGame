$(function () {
	
	var incr = 60;
	var screenW = window.screen.availWidth || document.documentElement.clientHeight;
	var screenH = (window.screen.availHeight - window.outerHeight + window.innerHeight || document.documentElement.clientHeight) * 1.04;
	
	// 禁用空格键的默认行为
	$(document).on("keydown", function (e) {
		if (e.keyCode == 32) {
			return false;
		};
	});
				
	
	// 初始化页面布局
	$("body").css({
		width: screenW,
		height: screenH,
	});
	$("#bg").css({
		width: screenW + incr,
		height: screenH + incr,
	});
	
	var aLW = $("#asideLeft").width(),
				aLH = $("#asideLeft").height(),
				aRW = $("#asideRight").width(),
				aRH = $("#asideRight").height(),
				dLW = $("#divLeft").width(),
				dLH = $("#divLeft").height();
	
	$("#canvas_personalInfo").prop({
		width: aLW,
		height: aLH,
	});
	$("#divLeft .div_personalInfoItem .canvas_personalInfoItem").prop({
		width: dLW * 0.5,
		height: dLH * 0.09,
	});
	$("#divLeft .div_personalInfoItem .div_shadow").css({
		height: dLH * 0.09,
	});
	/*$("#canvas_myApplication").prop({
		width: $("#asideRight").width(),
		height: $("#asideRight").height(), 
	});*/
	$("#div_myApplication").css({
		width: aRW * 0.6 * 2,
		height: aRW * 0.6 * 2,
		right: -aRW * 0.6,
		bottom: -aRW * 0.6 * 0.5,
	});
	$("#div_moreApplication").css({
		width: aRW * 0.3 * 2,
		height: aRW * 0.3 * 2,
		right: -aRW * 0.3,
		bottom: 0,
		lineHeight: aRW * 0.1,
		marginLeft: aRW * 0.06,
		fontSize: aRW * 0.06,
	});
	$("#div_content").css({
		height: 0,
	});
	$("#game").find("article").find("img").css({
		width: $("#game").width() * 0.2,
		height: $("#game").width() * 0.2,
	})
	$("#game").find("div").hover(function () {
		$(this).find("img").css({
			boxShadow: "0 0 1px #333",
		});
		$(this).find("h5").css({
			color: "#ff8",
		});
	}, function () {
		$(this).find("img").css({
			boxShadow: "0 0 3px #333",
		});
		$(this).find("h5").css({
			color: "#fff",
		});
	});
	
		
	(function init() {
		// 背景动画 & 侧栏动画
		var gen;
		
		$(document).one("mousemove", function (e) { 
			var _arguments = arguments;
			
			if (gen) {
				clearTimeout(gen);
			};
			
			$("#bg").animate({
				left: 0,
				top: 0,
				width: screenW,
				height: screenH,
			});
			
			$("#asideLeft").animate({
				left: 0,
			});
			
			$("#asideRight").animate({
				right: 0,
			});
					
			$("#game").animate({
				opacity: 1,
			}, {
				duration: 500,
			});
			
			$("#divLeft .div_personalInfoItem").each(function (index) {
				$(this).animate({
					width: $("#divLeft").width() * 0.5,
				}, {
					done: function () {
						if (index == $("#divLeft .div_personalInfoItem").length - 1) {
							gen = setTimeout(function () {
								$("#divLeft .div_personalInfoItem").animate({
									width: 0,
								});
								
								$("#game").animate({
									opacity: 0,
								}, {
									duration: 500,
								});
								
								$("#asideRight").animate({
									right: "-100%",
								});
								
								$("#asideLeft").animate({
									left: "-100%",
								});
								
								$("#bg").animate({
									left: -30,
									top: -30,
									width: screenW + incr,
									height: screenH + incr,
								});
							}, 60000);
							$(document).one("mousemove", _arguments.callee);
						};		
					},
				});
			});
			
		});		
	})();
	
	
	// 个人信息的canvas	
	(function () {
		var cWidth = $("#canvas_personalInfo").width(),
					cHeight = $("#canvas_personalInfo").height(),
					// r = (cWidth * cWidth + cHeight * cHeight) / (2 * cWidth),
					c = document.querySelector("#canvas_personalInfo"),
					ctx = c.getContext("2d");
		ctx.fillStyle = "#ffa";
		ctx.strokeStyle = "rgba(0, 0, 0, 0)";
		ctx.shadowBlur = 10;
		ctx.shadowColor = "#333";
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.lineTo(0, cHeight);
		// ctx.arc(r, cHeight, r, Math.PI, ( Math.asin(cHeight / r) + 1) * Math.PI);
		ctx.quadraticCurveTo(0, cHeight * 0.3, cWidth, 0);
		ctx.closePath();
		//ctx.drawImage(img, 0, 0);
		ctx.fill();
		
	})();
	
	
	// 头像
	$("#headPhoto img").on("mouseover", function () {
		$(this).animate({
			width: "175%",
			height: "105%",
			left: "-8%",
			top: "-4%",
		});
	}).on("mouseout", function () {
		$(this).animate({
			width: "170%",
			height: "100%",
			left: "-3%",
			top: 0,
		});
	});
	
	
	// 个人信息Item初始效果
	ItemCanvasEffectUp("canvas_myIntroduction", "#ffa", "个人简介", "#fc0");
	ItemCanvasEffectUp("canvas_myStudy", "#ffa", "我的学习", "#fc0");
	ItemCanvasEffectUp("canvas_myWorks", "#ffa", "我的作品", "#fc0");
	ItemCanvasEffectUp("canvas_mySensibility", "#ffa", "最近感悟", "#fc0");
	
	
	$("#canvas_myIntroduction").click(function () {
		$("#div_content").animate({
			height: "80%",
			marginTop: "10%",
			marginBottom: "10%",
		}, {
			done: function () {
				$("#article_show").animate({
					opacity: 1,
				});
			},
		});
	});
	
	
	
	
	
	// 左边Item的canvas normal效果
	function ItemCanvasEffectUp(id, bgColor, text, color) {
		var w = $("#divLeft").width() * 0.5,
					h = $("#divLeft").height() * 0.09,
					c = document.getElementById(id),
					ctx = c.getContext("2d"),
					ctxa = c.getContext("2d");
		ctx.strokeStyle = "rgba(0, 0, 0, 0)";
		ctx.font = "25px 微软雅黑";
		ctx.fillStyle = bgColor;
		ctx.shadowBlur = 3;
		ctx.shadowColor = "#666";
		ctx.shadowOffsetX = 2;
		ctx.shadowOffsetY = 2;
		ctx.beginPath();
		ctx.moveTo((h -4) * 0.6, 0);
		ctx.lineTo(0, h - 4);
		ctx.arc(w - (h - 4) * 0.5 - 4, (h - 4) * 0.5, (h - 4) * 0.5, Math.PI * 0.5, Math.PI * 1.5, true);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();
		ctx.fillStyle = color;
		ctx.shadowColor = "rgba(0, 0, 0, 0)";
		ctx.fillText(text, 50, 35);
			
		$("#" + id).hover(function () {
			ctx.clearRect(0, 0, w, h);
			ctx.fillStyle = bgColor;
			ctx.shadowBlur = 3;
			ctx.shadowColor = "#666";
			ctx.shadowOffsetX = 2;
			ctx.shadowOffsetY = 2;
			ctx.fill();
			ctx.fillStyle = "#f90";
			ctx.shadowColor = "rgba(0, 0, 0, 0)";
			ctx.fillText(text, 50, 35);
		}, function () {
			ctx.clearRect(0, 0, w, h);
			ctx.fillStyle = bgColor;
			ctx.shadowBlur = 3;
			ctx.shadowColor = "#666";
			ctx.shadowOffsetX = 2;
			ctx.shadowOffsetY = 2;
			ctx.fill();
			ctx.fillStyle = color;
			ctx.shadowColor = "rgba(0, 0, 0, 0)";
			ctx.fillText(text, 50, 35);
		});
		
			
		// 个人信息Item点击事件1
		$("#" + id).on("mousedown", function () {
			ctx.clearRect(0, 0, w, h);
			ctx.fillStyle = bgColor;
			ctx.shadowColor = "#666";
			ctx.shadowBlur = 1;
			ctx.shadowOffsetX = 1;
			ctx.shadowOffsetY = 1;
			ctx.fill();
			ctx.fillStyle = color;
			ctx.shadowColor = "rgba(0, 0, 0, 0)";
			ctx.fillText(text, 50, 35);
			
			
			// 个人信息Item点击事件2
			$(document).on("mouseup", function () {
				ctx.clearRect(0, 0, $("#divLeft").width() * 0.5, $("#divLeft").height() * 0.09);
				ctx.fillStyle = bgColor;
				ctx.shadowColor = "#666";
				ctx.shadowBlur = 3;
				ctx.shadowOffsetX = 2;
				ctx.shadowOffsetY = 2;
				ctx.fill();
				ctx.fillStyle = color;
				ctx.shadowColor = "rgba(0, 0, 0, 0)";
				ctx.fillText(text, 50, 35);
			});
			
		});
	};
	
	
	
	// 关闭按钮效果
	(function () {
		var div_content = $("#div_content"),
					art = $("#article_show"),
					closeButton = $(".closeButton");
		closeButton.hover(function () {
			$(this).prop("src", "img/closeButton_hover.png");
		}, function () {
			$(this).prop("src", "img/closeButton_normal.png");
		}).on("mousedown", function () {
			$(this).prop("src", "img/closeButton_down.png");
		}).on("mouseup", function () {
			$(this).prop("src", "img/closeButton_hover.png");
			art.animate({
				opacity: 0,
			}, {
				duration: 300,
				done: function () {
					div_content.animate({
						height: 0,
						marginTop: "50%",
						marginBottom: "50%",
					});
				},
			});
		});
	})();
	
	
	
	// 右侧转盘
	/*(function () {
		var w = $("#asideRight").width(),
		      h = $("#asideRight").height(),
					c = document.getElementById("canvas_myApplication"),
					ctx = c.getContext("2d");
		ctx.fillStyle = "#fff";
		ctx.strokeStyle = "rgba(0, 0, 0, 0)";
		ctx.shadowBlur = 5;
		ctx.shadowColor = "#666";
		ctx.shadowOffsetY = 3;	
		ctx.translate(w, h * 0.5);
		ctx.beginPath();
		ctx.arc(0, 0, w * 0.6, 0, Math.PI * 2);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();
	})();*/
	$.getJSON("json/myIntroduction.json", function (data, textStatus, jqXHR) {
		var str = $.parseJSON(jqXHR.responseText),
					intr = str[0]["introduction"];
		$("#article_show").html(intr);
		
	});
	
	
	
});













// JavaScript Document
