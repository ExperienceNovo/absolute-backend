$(document).ready(function(){
	
	"use strict";
	
	
	$('#highlight-posts ul li a').hover(
	function() {
		$(this).parent().children('.masked-color').show();
		$(this).parent().children('.masked-base').hide();
	}, 
	function() {
		$(this).parent().children('.masked-base').show();
		$(this).parent().children('.masked-color').hide();
	});

	$('#highlight-posts .flexslider.highlight-one').flexslider({ controlNav: false, directionNav: false, slideshowSpeed: 10000, start: function(){ $('#highlight-posts .flexslider.highlight-one').removeClass('loading'); }});
	$('#highlight-posts .flexslider.highlight-two').flexslider({ controlNav: false, directionNav: false, slideshowSpeed: 3500, start: function(){ $('#highlight-posts .flexslider.highlight-two').removeClass('loading'); }});
	$('#highlight-posts .flexslider.highlight-three').flexslider({ controlNav: false, directionNav: false, slideshowSpeed: 8000, start: function(){ $('#highlight-posts .flexslider.highlight-three').removeClass('loading'); }});
	$('#highlight-posts .flexslider.highlight-four').flexslider({ controlNav: false, directionNav: false, slideshowSpeed: 6000, start: function(){ $('#highlight-posts .flexslider.highlight-four').removeClass('loading'); }});
	
	
	$('#main .flexslider.slider-carousel').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		itemWidth: 120,
		asNavFor: '#main .flexslider.slider-gallery'
	});
	
	$('#main .flexslider.slider-gallery').flexslider({
		animationSpeed: 1000,
		animationLoop: false,
		slideshow: false,
		controlNav: false,
		sync: "#main .flexslider.slider-carousel",
		start: function(){ $('#main .flexslider.slider-gallery').removeClass('loading'); }
    });
	
	$('#main .flexslider, #sidebar .flexslider').flexslider({
		animationSpeed: 1000,
		animationLoop: false,
		slideshow: false,
		start: function() { $('#main .flexslider, #sidebar .flexslider').removeClass('loading'); }
    });
	
	
	$(".headlines .text-rotator").show().ticker({ rate: 50, delay: 5000 }).trigger("play");
	
	$("a[data-rel^='prettyPhoto']").prettyPhoto({
		social_tools:false,
		theme:'light_square',
		hook:'data-rel'
	});
	
	
	$("input, textarea").placeholder();
	
	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) { $('.scrollup').slideDown(); } else { $('.scrollup').slideUp(); }
	}); 
	$('.scrollup').click(function(){
		$("html, body").stop().animate({ scrollTop: 0 }, 2000, 'easeInOutExpo');
		return false;
	});	

	
	$("#main.image-preloader figure > img, #main.image-preloader figure.figure-overlay img, #main.image-preloader figure.figure-hover img, #main.image-preloader p img, #main.image-preloader div > a > img").lazyload({
		placeholder: "static/images/grey.gif",
		effect: "fadeIn"
	});
	
	
	
	$('figure.figure-hover').hover(
		function() { $(this).children(".figure-hover-masked").fadeIn();	},
		function() { $(this).children(".figure-hover-masked").fadeOut(); }
	);
	
	$('figure.figure-overlay').each(function() { $(this).hoverdir({
			hoverParent: $(this).children('a'),
			hoverElement:  $(this).children('a').children('div').children('p')
		});
	});

});