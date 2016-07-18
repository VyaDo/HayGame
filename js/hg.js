$(function () {
	
	for (var i = 0; i < document.images.length; i ++) {
		document.images[i].ondragstart = function () {
			return false;
		};
	};
	
	
	for (var i = 0; i < document.links.length; i ++) {
		document.links[i].ondragstart = function () {
			return false;
		};
	};
	
	
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
	
	
	$("#cloud").prop({
		width: screenW,
		height: screenH,
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
	
	
	// .app定位
	$(".app").css({
		left: aRW * 0.6 - 32,
		top: aRW * 0.066,
		transformOrigin: "32px " + aRW * 0.534 + "px",
	}).each(function (index) {
		$(this).css({
			transform: "rotate(" + (-360 / $(".app").length * (index + 0.5)) + "deg)",
		});
	}).hover(function () {
		$(this).css({
			boxShadow: "0 0 5px #111",
		});
	}, function () {
		$(this).css({
			boxShadow: "none",			
		});
	}).on({
		mousedown: function () {
			$(this).css({
				boxShadow: "0 0 2px #111",			
			});
		},
		mouseup: function () {
			$(this).css({
				boxShadow: "0 0 5px #111",
			});
		},
	});
	
	
	(function () {
		var n = 0;
		$("#div_myApplication").on("mousedown", function (ed) {
			$(this).on("mousemove", function (em) {
				if (em.pageY - ed.pageY > 30) {
					++n;
					$(this).off("mousemove");
					$(this).css({
						transform: "rotate(" + (-60 * n) + "deg)",
					});
				};
				if (em.pageY - ed.pageY < -30) {
					--n;
					$(this).off("mousemove");
					$(this).css({
						transform: "rotate(" + (-60 * n) + "deg)",
					});
				};
			});
			$("#div_myApplication").on("mouseup", function () {
				$(this).off("mousemove");
			});
		});
	})();
	
	
	$("#music").on("click", function () {
		$("#musicApp").animate({
			left: 0,
		});
	});
	
	
	$("#div_moreApplication").css({
		width: aRW * 0.55,
		height: aRW * 0.3 * 2,
		right: -aRW * 0.3,
		bottom: 0,
		fontFamily: "微软雅黑",
		fontWeight: "bold",
		fontSize: aRW * 0.07,
		paddingLeft: aRW * 0.05,
		lineHeight: aRW * 0.022,
		cursor: "pointer",
	}).hover(function () {
		$(this).css({
			backgroundColor: "#f90",
		});
	}, function () {
		$(this).css({
			backgroundColor: "#fc0",
		});
	}).on({
		mousedown: function () {
			$(this).css({
				boxShadow: "0 0 1px #333",
			});
		},
		mouseup: function () {
			$(this).css({
				boxShadow: "0 0 3px #333",
			});
		},
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
	
	
	(function init() {
		// 背景动画 & 侧栏动画
		var gen;
		var fca;
		
		var img = new Image();
		img.src = "img/cloud2.png";
		
		var ac = [
			{
				cx: 200,
				cy: 100,
				cw: img.width * 0.8,
				ch: img.height * 0.8,
			},
			{
				cx: 600,
				cy: 50,
				cw: img.width * 0.6,
				ch: img.height * 0.6,
			},
			{
				cx: 700,
				cy: 200,
				cw: img.width * 0.4,
				ch: img.height * 0.4,
			},
			{
				cx: 1040,
				cy: 80,
				cw: img.width * 0.4,
				ch: img.height * 0.4,
			},
			{
				cx: 1160,
				cy: 160,
				cw: img.width * 0.5,
				ch: img.height * 0.5,
			},
			{
				cx: 1460,
				cy: 100,
				cw: img.width * 0.8,
				ch: img.height * 0.8,
			},
			{
				cx: 1860,
				cy: 50,
				cw: img.width * 0.6,
				ch: img.height * 0.6,
			},
			{
				cx: 1960,
				cy: 200,
				cw: img.width * 0.4,
				ch: img.height * 0.4,
			},
			{
				cx: 2300,
				cy: 80,
				cw: img.width * 0.4,
				ch: img.height * 0.4,
			},
			{
				cx: 2420,
				cy: 160,
				cw: img.width * 0.5,
				ch: img.height * 0.5,
			}
		];
		
		fca = cloudAnim(ac, img);
		
		$(document).one("mousemove", function (e) { 
			var _arguments = arguments;
			
			if (gen) {
				clearTimeout(gen);
			};
			
			if (fca) {
				clearInterval(fca);
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
								
								fca = cloudAnim(ac, img);
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
	
	
	// 个人信息Item初始效果
	ItemCanvasEffectUp("canvas_myIntroduction", "#ffa", "个人简介", "#fc0");
	ItemCanvasEffectUp("canvas_myStudy", "#ffa", "我的学习", "#fc0");
	ItemCanvasEffectUp("canvas_myWorks", "#ffa", "我的作品", "#fc0");
	ItemCanvasEffectUp("canvas_mySensibility", "#ffa", "最近感悟", "#fc0");
	
	
	$("#canvas_myIntroduction").click(function () {
		$.ajax({
			url: "json/myIntroduction.json",
			dataType: "json",
			success: function (data, stateText, jqXHR) {
				var t = $.parseJSON(jqXHR.responseText);
				$("#article_show").html(t[0]["introduction"]);
			},
		});
		$("#screenCover").css({
			display: "block",
		});
		$("#div_content").animate({
			height: "80%",
			marginTop: "10%",
			marginBottom: "10%",
		}, {
			duration: 300,
			done: function () {
				$("#article_show").animate({
					opacity: 1,
				}, {
					duration: 200,
				});
			},
		});
	});
	
	
	$("#div_myStudy").on("click", function () {
		$("#articles").trigger("click");
		$("#screenCover").css({
			display: "block",
		});
		$("#div_stu").fadeIn(500);
	});
	
	
	$("#screenCover").on("click", function () {
		$("#div_stu").fadeOut(500);
		$("#article_show").animate({
			opacity: 0,
		}, {
			duration: 200,
			done: function () {
				$("#div_content").animate({
					height: 0,
					marginTop: "50%",
					marginBottom: "50%",
				}, {
					duration: 300,
					done: function () {
						$("#screenCover").css({
							display: "none",
						});
					},
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
	
	
	$("#articles").on("click", function () {
		$.ajax({
			url: "json/myIntroduction.json",
			dataType: "json",
			success: function(data, statusText, jqXHR) {
				var j = $.parseJSON(jqXHR.responseText);
				if (j[1]["text"] == "") {
					$("#list").html("<li>一篇还没有。。</li>");
				} else {
					var t = "";
					for (var i = 0; i < j[1]["text"].length; i ++) {
						t += "<li>" + j[1]["text"][i] + "</li>";
					};
					$("#list").html(t);
				};
			},
		});
		$(this).off("mouseleave").css({
			color: "#333",
			boxShadow: "none",
		});
		$("#studyWebsite").css({
			color: "#ccc",
			boxShadow: "2px -1px 1px #ccc inset",
		}).on("mouseleave", function () {
			$(this).css({
				color: "#ccc",
			});
		});
	}).on("mouseenter", function () {
		$(this).css({
			color: "#333",
		});
	});
	
	
	$("#studyWebsite").hover(function () {
		$(this).css({
			color: "#333",
		});
	}, function () {
		$(this).css({
			color: "#ccc",
		});
	}).on("click", function () {
		$.ajax({
			url: "json/myIntroduction.json",
			dataType: "json",
			success: function(data, statusText, jqXHR) {
				var j = $.parseJSON(jqXHR.responseText);
				if (j[1]["website"] == "") {
					$("#list").html("<li>一篇还没有。。</li>");
				} else {
					var t = "";
					for (var i = 0; i < j[1]["website"].length; i ++) {
						t += "<li><a href=" + j[1]["website"][i] + " target='_blank'>" + j[1]["website"][i] + "</a></li>";
					};
					$("#list").html(t);
					$("#list").find("li").css({
						marginBottom: "10px",
					});
					$("#list").find("a").hover(function () {
						$(this).css({
							color: "#333",
						});
					}, function () {
						$(this).css({
							color: "#999",
						});
					}).css({
						color: "#999",
						fontFamily: "微软雅黑",
						textDecoration: "none",
					});
				};
			},
		});
		$(this).off("mouseleave").css({
			color: "#333",
			boxShadow: "none",
		});
		$("#articles").on("mouseleave", function () {
			$(this).css({
				color: "#ccc",
			});
		}).css({
			color: "#ccc",
			boxShadow: "-2px -1px 1px #ccc inset",
		});
	});
	
	
	$("#bgChange").add("#lvMessage").hover(function () {
		$(this).find("img").prop("src", "img/icon_orange.png");
	}, function () {
		$(this).find("img").prop("src", "img/icon_white.png");
	});
	
	
	// 云动画
	function cloudAnim(ac, img) {

		var	c = document.getElementById("cloud"),
					ctx = c.getContext("2d");
				
		var cloudAnimate = setInterval(function () {
			ctx.clearRect(0, 0, $("#cloud").prop("width"), $("#cloud").prop("height"));
			for (var i = 0; i < ac.length; i ++) {
				ac[i]["cx"] -= 3;
				if (ac[i]["cx"] < - ac[0]["cw"]) {
					ac[i]["cx"] = 2430;
				}
				drawCloud(i);
			};
		}, 40);
		
		function drawCloud(n) {
			ctx.drawImage(img, ac[n]["cx"], ac[n]["cy"], ac[n]["cw"], ac[n]["ch"]);
		};
		
		return cloudAnimate;
	};
	
	
	
	
	
				
				
	/*// 关闭按钮效果
	(function () {
		var div_content = $("#div_content"),
					art = $("#article_show"),
					closeButton = $(".closeButton"),
					cover = $("#screenCover");
		closeButton.hover(function () {
			$(this).prop("src", "img/closeButton_hover.png");
		}, function () {
			$(this).prop("src", "img/closeButton_normal.png");
		}).on("mousedown", function () {
			$(this).prop("src", "img/closeButton_down.png");
		}).on("mouseup", function () {
			$(this).prop("src", "img/closeButton_hover.png");
			
		});
	})();*/
	
	
	
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
	
});













// JavaScript Document
