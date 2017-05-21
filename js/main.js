$(function(){

		var menu_down = $(".menu-down");
		var	middle2 = $(".middle2");
		var menu_color = $(".menu-color");
		var fa_bars = $(".fa-bars");
		var fa_angle_left = $(".fa-angle-left");
		var fa_search = $(".fa-search");
		var header_middle = $(".header-middle");
		var header_logo_fa_times = $(".header-logo .fa-times");
		var header_right_fa_times = $(".header-right .fa-times");


	 	$(".header-right").toggle(function() {
	 		if((menu_down.is(':visible')) || (menu_color.is(':visible'))) {
	 			menu_down.hide();
	 			menu_color.hide();
	 			header_logo_fa_times.hide();
	 			fa_bars.show();
	 			header_right_fa_times.show();
			 	fa_search.hide();
	 			header_middle.hide();
	 			fa_angle_left.hide();
	 			middle2.show();	
		 	} else {
			 	$(".hide").hide();
			 	header_right_fa_times.show();
			 	fa_search.hide();
			 	middle2.show();
			 	header_middle.hide();
	 		}

	 	}, function() {
	 		$(".hide").show();
	 		header_right_fa_times.hide();
	 		fa_search.show();
	 		middle2.hide();
	 		header_middle.show();
	 	}); 


	 	fa_bars.click(function(){
	 		if(middle2.is(':visible')) {
	 			menu_down.show();
	 			header_logo_fa_times.show();
	 			fa_bars.hide();
	 			header_middle.show();
	 			middle2.hide();
	 			header_right_fa_times.hide();
	 			fa_search.show();
			} else {
				$(this).hide();
			 	header_logo_fa_times.show();
			 	menu_down.show();
			}
	 	});

	 	$(".kategoria").click(function(){
    		if(menu_color.is(':visible')) {
    			menu_color.css('display', 'none');
    			fa_bars.show();
    		}
   			else {
				menu_color.css('display', 'flex');
			}
		});
	
	 	$(".kategoria2").click(function(){
	 		menu_down.hide();
	 		menu_color.css('display', 'flex');
	 		fa_angle_left.show();
	 		header_logo_fa_times.hide();
	 	});

	 	fa_angle_left.click(function(){
	 		menu_down.show();
	 		menu_color.hide();
	 		header_logo_fa_times.show();
	 		fa_bars.hide();
	 		fa_angle_left.hide()
	 	});

	 	 header_logo_fa_times.click(function(){
	 	 	$(this).hide();
	 		menu_down.hide();
	 		fa_bars.show();
	 	});

		$(window).resize(function(){
			if (($(window).width() <= 1040)  && menu_color.is(':visible')) {
		  		fa_angle_left.show();
		  		fa_bars.hide();
		  	} else {
		  		fa_angle_left.hide();
		  	}
		});
});




