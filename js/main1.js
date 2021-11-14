$(function () {

   $(".main-menu__item a").addClass("main-menu__link go_to");
   $(".menu-mobile__item a").addClass("menu-mobile__link go_to");

	// Hamburger
	  $('.menu-btn').on('click', function(e) {
	  e.preventDefault();
	  $(this).toggleClass('menu-btn_active');
	  $('.menu-mobile').toggleClass('menu-mobile_active');
	});

	// ArcticModal
  	$('.popup__form').click(function(e) {
  		e.preventDefault();
  		$('#form').arcticmodal();
  	});
    $('.popup-fast').click(function(e) {
      e.preventDefault();
      $('#form-fast').arcticmodal();
    });
  	$('.popup__privacy').click(function(e) {
  		e.preventDefault();
  		$('#privacy').arcticmodal();
  	});
  	$('.popup__bonus').click(function(e) {
  		e.preventDefault();
  		$('#bonus').arcticmodal();
  	});

	// Preloader
	var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');

	// Hamburger
	$('.menu-open').click(function (){
		$('.menu-collapse').toggleClass('d-none').css('order', '1');
		$('.menu__list').toggleClass('menu-opened');
	})

	$('.menu-opened li a').click(function (){
		$('.menu-collapse').toggleClass('d-none').css('order', '0');
		$('.menu__list').toggleClass('menu-opened');
	})

	// Плавный скроллинг
	$('.go_to').click( function(){
	var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
	    return false;
    });

    // Плавающая шапка
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100){  
            $('#header-fixed').addClass("sticky");
        }
        else{
            $('#header-fixed').removeClass("sticky");
        }
    });

    // Show more
    $('.gallery__btn_more').click(function() {
  		$('.gallery__wrap_hide').fadeIn();
	});

    // Slick slider
    $('.header__slider').slick({
    	infinite: true,
    	autoplay: false,
      autoplaySpeed: 4000,
     	adaptiveHeight: true,
   		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
   		nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
      responsive: [
    {
      breakpoint: 768,
      settings: {
        autoplay: true,
        dots: true
      }
    },
  ]
  	});

  	// wow
  	new WOW().init();

});