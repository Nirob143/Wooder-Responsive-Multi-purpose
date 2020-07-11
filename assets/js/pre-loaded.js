/*---------------------------------------------------------
* Template Name    : Sophia | Responsive Personal Template
* Author           : CasanovasThemes
* Version          : 1.0
* Created          : December 2019
* File Description : Page Loader JS file of the Template
*----------------------------------------------------------
*/
"use strict";
$(document).ready(function() {
	
	setTimeout(function() {
	jQuery(window).load('body', function(){
		$("body").css({"overflow":"hidden"});//while page is loading overflow hidden
		setTimeout(function(){preloader();},10);	
	});
 	function preloader(){
	
		"use strict";
		
		var mainPreloader	 = $(".container-loader .loader_line");
		var WinWidth 		 = $(window).width();
	    var WinHeight		 = $(window).height();
	    var zero = 0;

	    mainPreloader.css({
	        top: WinHeight / 2 - 2.5,
	        left: WinWidth / 2 - 200
	    });

	    do {
	        mainPreloader.animate({
	            width: zero
	        }, 10);
	        zero += 2;
	    } while (zero <= 400);
	    if (zero === 402) {
	        mainPreloader.animate({
	            left: 0,
	            width: '100%'
	        });
	        mainPreloader.animate({
	            top: '0',
	            height: '100vh'
	        });
	    }
	    setTimeout(function() {
	        $(".container-loader").fadeOut('fast');
	        (mainPreloader).fadeOut('fast');
	        $("body").css({"overflow":"auto"});//when the page is loaded, overflow auto
	    }, 4000);
 	}

 	var fontSize = 72;
  
	if(window.screen.width < 700){ 
		fontSize = 32;
	}else if(window.screen.width < 1200){
		fontSize= 56;
	}
	var alt = (window.innerHeight/2)-fontSize-20;
	
	/****HAND WRITTING EFFECT******/
	var vara = new Vara(
		"#container-pageLoader",
		"./json/Satisfy/SatisfySL.json",
		[
	  		{
	    		text: "Jc Nirob",//Put your name instead of Shopia Ross
	    		y: alt,
	    		fromCurrentPosition: { y: false },
	    		duration: 3000
	  		}
		],
		{
			strokeWidth: 0.5,
			color: "#fff",
			fontSize: fontSize,
			textAlign: "center"
		}
	);
	vara.ready(function() {
		var erase = true;
		vara.animationEnd(function(i, o) {
			if (i == "no_erase") erase = false;
			if (erase) {
			    o.container.style.transition = "opacity 1s 1s";
			    o.container.style.opacity = 0;
			}
		});
	});
}, 2000);
});