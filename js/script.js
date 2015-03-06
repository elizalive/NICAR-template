/* script.js 
   Author: Peggy Bustamante
   Date: February 2015
*/


$(document).ready(function(){ // begin document.ready block

	var total = 0;

/** create the color-change hover **/

	$(".thumbnail").hover(function(){
		$(this).css({"background-color":"#FFDA70"}); 
	}, function(){
		$(this).css({"background-color":"#08D1B9"});	
	});	

/** updating the total **/

	var total = 0;

	$(".thumb_img").click(function(){		
		var numvalue = $(this).attr("num-value");
		total = total + parseInt(numvalue);
		$("#total").html(total);
	/** updating the number display image **/

	// place in the .thumb_img.click section

		var photo_src = $(this).attr("src");
		$("#display_img").attr("src", photo_src);
	});

/** resetting the total **/

	$("#btn_reset").click(function(){
		total = 0;
		$("#total").html(total);
		$("#display_img").attr("src", "img/num0.jpg");
	});


/** adding your greeting **/

	$("#btn_yourname").click(function(){
		var yourname = $("#yourname").val();
		$("#hellotext").html("Hello, " + yourname + "!");
	});

}); //end document.ready block
