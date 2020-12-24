$(document).ready(function() {
	'use strict';

	//preloader
	// $(window).on('load', function(){

	// 	$('.preloader').fadeOut();
	// })

	

//-----------------------------------------------------------------------
	


	// side menu toggller

	$('.hamburger-toggle').on('click', function(){

		$('.menu').slideToggle();
		$('.hamburger-toggle .icon').toggleClass('fa-align-right fa-times');
	})

	//------------------------------------------------------------------------
	// go down icon here section
	function goDown() {
		$('.go-down').on('click', function() {
			$('html, body').animate(
				{
					scrollTop: $('#about').offset().top + 1
				},
				500
			);
		});
	}

	goDown();

	//------------------------------------------------------------------------
	//Switch Between Dark/Light Theme
	function switchTheme() {
		$('.switch-theme').on('click', function() {
			$(':root').toggleClass('dark');
			$('.switch-theme .icon').toggleClass('fa-sun-o fa-moon-o');
		});
	}
	switchTheme();

	//-------------------------------------------------------------------------

	// Trigger Typed.js
	function typedJs(element) {
		$(element).typed({
			strings: [ 'freelancer', 'desinger' ],
			loop: true,
			typeSpeed: 150
		});
	}

	typedJs('.typed');

	//-------------------------------------------------------------------------

	//Trigger NiceScroll

	// function niceScroll() {
	// 	$('html').niceScroll({
	// 		cursorcolor: '#000',
	// 		cursorwidth: '8px',
	// 		cursorborder: 'none',
	// 		cursorborderradius: '0',
	// 		zIndex: '99999'
	// 	});
	// }
	// niceScroll();

	//--------------------------------------------------------------------------
	//Trigger Mixitup

	function mixItup(element) {
		var mixer = mixitup(element);
	}
	mixItup('.max');

	//--------------------------------------------------------------------------

	// controll box  add/remove active class
	$('.control-box button').on('click', function() {
		$(this).addClass('active').siblings().removeClass('active');
	});
	//-------------------------------------------------------------------------
	// Back To Top Button
	var BackToTop = $('.packtop');

	BackToTop.click(function(e) {
		e.preventDefault();
		$('html, body').animate(
			{
				scrollTop: 0
			},
			600
		);
	});

	// Smoothly Scroll To Element
	$('.side-menu .menu a').click(function(e) {
		e.preventDefault();
		$('html, body').animate(
			{
				scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
			},
			1000
		);

		//side menu add /remove active class

		$(this).addClass('active').siblings().removeClass('active');
	});
	//-----------------------------------------------------------------------------------------------

	$(window).on('scroll', function() {
		// Toggle Class Fixed In Navigation
		if ($(this).scrollTop() >= 50) {
			$('nav').addClass('fixed');
		} else {
			$('nav').removeClass('fixed');
		}

		// Show/Hide Back to top  button
		if ($(this).scrollTop() >= 500) {
			if (BackToTop.is(':hidden')) {
				BackToTop.fadeIn();
			}
		} else {
			BackToTop.fadeOut();
		}

		$('.smoth-section').each(function() {
			if ($(window).scrollTop() > $(this).offset().top) {
				var BlockId = $(this).attr('id');

				$('.side-menu .menu a').removeClass('active');

				$('.side-menu .menu a[data-scroll=' + BlockId + ']').addClass('active');
			}
		});
	});

	//----------------------------------------------------------------------------
	// Testimonials Carousal
	$('.owl-carousel').owlCarousel({
		items: 3,
		loop: true,
		nav: false,
		dots: true,
		margin: 30,
		dotsEach: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		 responsive: {
      0: {
        items: 1
      },
      500: {
        items: 1
      },
      600: {
        items: 1
      },
      800: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
	});
	//----------------------------------------------------------------------------
});
