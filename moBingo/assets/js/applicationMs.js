$(document).ready(function(){
 $(".row > div").on('click', function(){
 	$(this).toggleClass("circle");
 	if($("#b1").hasClass("circle") &&  $("#b2").hasClass("circle") &&  $("#b3").hasClass("circle") &&  $("#b4").hasClass("circle") &&  $("#b5").hasClass("circle")) {
 		$(".youWin").text("You Win");
 	}else if($("#i1").hasClass("circle") &&  $("#i2").hasClass("circle") &&  $("#i3").hasClass("circle") &&  $("#i4").hasClass("circle") &&  $("#i5").hasClass("circle")) {
 		$(".youWin").text("You're a Winner!");
 	}else if($("#n1").hasClass("circle") &&  $("#n2").hasClass("circle") &&  $("#n4").hasClass("circle") &&  $("#n5").hasClass("circle")) {
 		$(".youWin").text("Victorious");
 	}else if($("#g1").hasClass("circle") &&  $("#g2").hasClass("circle") &&  $("#g3").hasClass("circle") &&  $("#g4").hasClass("circle") &&  $("#g5").hasClass("circle")) {
 		$(".youWin").text("You Win");
 	}else if($("#o1").hasClass("circle") &&  $("#o2").hasClass("circle") &&  $("#o3").hasClass("circle") &&  $("#o4").hasClass("circle") &&  $("#o5").hasClass("circle")) {
 		$(".youWin").text("You're The Best!");
 	}else if($("#b1").hasClass("circle") && $("#i1").hasClass("circle") && $("#n1").hasClass("circle") && $("#g1").hasClass("circle") && $("#o1").hasClass("circle")) {
 		$(".youWin").text("You Win");
 	}else if($("#b2").hasClass("circle") && $("#i2").hasClass("circle") && $("#n2").hasClass("circle") && $("#g2").hasClass("circle") && $("#o2").hasClass("circle")) {
 		$(".youWin").text("Huzzah!");
 	}else if($("#b3").hasClass("circle") && $("#i3").hasClass("circle") && $("#g3").hasClass("circle") && $("#o3").hasClass("circle")) {
 		$(".youWin").text("Nailed It!");
 	}else if($("#b4").hasClass("circle") && $("#i4").hasClass("circle") && $("#n4").hasClass("circle") && $("#g4").hasClass("circle") && $("#o4").hasClass("circle")) {
 		$(".youWin").text("Another Triumph My Dear!");
 	}else if($("#b5").hasClass("circle") && $("#i5").hasClass("circle") && $("#n5").hasClass("circle") && $("#g5").hasClass("circle") && $("#o5").hasClass("circle")) {
 		$(".youWin").text("You Win");
 	}else if($("#b1").hasClass("circle") && $("#i2").hasClass("circle") && $("#g4").hasClass("circle") && $("#o5").hasClass("circle")) {
 		$(".youWin").text("Ha! Woo!");
 	}else if($("#b5").hasClass("circle") && $("#i4").hasClass("circle") && $("#g2").hasClass("circle") && $("#o1").hasClass("circle")) {
 		$(".youWin").text("You Win");
 	}
 });
});


$(document).ready(function(){
	$("#hibiscusImg").on('click', function(){
		$("#moImg").attr('src', '../../assets/images/hibiscusMono300px.png');
		$("#moImg").prop("alt", "Picture of a hibiscus");
		$("body").css("background", "#88a3d3");

	});
	$("#martiniImg").on('click', function(){
		$("#moImg").attr('src', '../../assets/images/martini300px.png');
		$("#moImg").prop("alt", "Picture of a martini");
		$("body").css("background", "#a4d887");
		
	});
	$("#originalImg").on('click', function(){
		$("#moImg").attr('src', '../../assets/images/glasses300px.png');
		$("#moImg").prop("alt", "Picture of glasses");
		$("body").css("background", "#f2c1cd");
		
	});
	$("#palmImg").on('click', function(){
		$("#moImg").attr('src', '../../assets/images/palmTree300px.png');
		$("#moImg").prop("alt", "Picture of a palm tree");
		$("body").css("background", "#a1e0de");

	});
	$("#pineappleImg").on('click', function(){
		$("#moImg").attr('src', '../../assets/images/pineappleScored300px.png');
		$("#moImg").prop("alt", "Picture of a pineapple");
		$("body").css("background", "#d6d687");
		
	});
	
});


$('.nav a').on('click', function(){
    $('.btn-navbar').click(); 
    $('.navbar-toggle').click() 
});





