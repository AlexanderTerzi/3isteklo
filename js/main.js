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

    //Calculator

    $('.calculator-form__row_dimensions').hide();

    //Reset max min
    function minMaxReset(){
      $('input[type="number"]').on('keyup', function(){
      if ($(this).val() > $(this).attr('max')*1) { 
        $(this).val($(this).attr('max'));
        calculator();
      }   
    });
    $('input[type="number"]').on('change', function(){
      if ($(this).val() < $(this).attr('min')*1) { 
        $(this).val($(this).attr('min'));
        calculator();
      }
    });
    }
    

    var quantityGlass = document.querySelector('#calculator-quantity');
    var widthGlass = document.querySelector('#calculator-width');
    var heightGlass = document.querySelector('#calculator-height');
    var widthGlassTwo = document.querySelector('#calculator-width-2');
    var heightGlassTwo = document.querySelector('#calculator-height-2');
    var widthGlassThree = document.querySelector('#calculator-width-3');
    var heightGlassThree = document.querySelector('#calculator-height-3');
    var widthGlassFour = document.querySelector('#calculator-width-4');
    var heightGlassFour = document.querySelector('#calculator-height-4');
    var typeGlass = document.querySelector('#calculator-type');
    var photoGlass = 2250;
    var rosetteGlass = document.querySelector('#calculator-rosette');
    var bracingGlass = document.querySelector('#calculator-bracing');
    var calculatorAmount = document.querySelector('#calculator-amount');


    $('input[name=calculator-photo]').on('change', function(e){
      e.preventDefault();
        photoGlass = parseInt( $('input[name=calculator-photo]:checked').val());
        calculator();
    });

    $(rosetteGlass).add(bracingGlass).add($('.calculator-form__row_dimensions input')).on('input', function(){
      this.value = $(this).val().replace(/^0+/,'');
    });


    //$(widthGlass).add(heightGlass).add(widthGlassTwo).add(heightGlassTwo).add(widthGlassThree).add(heightGlassThree).add(widthGlassFour).add(heightGlassFour).on('input', minMaxReset);
    $(quantityGlass).add(widthGlass).add(heightGlass).add(widthGlassTwo).add(heightGlassTwo).add(widthGlassThree).add(heightGlassThree).add(widthGlassFour).add(heightGlassFour).add(typeGlass).add(rosetteGlass).add(bracingGlass).add($('.calculator-form__row_dimensions input')).on('input', calculator);
    calculator();

    $(quantityGlass).on('change', selectChange);

    function selectChange(){
      if(quantityGlass.value == 1){
        $('.calculator-form__row_dimensions').slideUp();
      } else if (quantityGlass.value == 2){
        $('.calculator-form__row_dimensions_two').slideDown();
        $('.calculator-form__row_dimensions_four, .calculator-form__row_dimensions_three').slideUp();
      } else if(quantityGlass.value == 3){
        $('.calculator-form__row_dimensions_two, .calculator-form__row_dimensions_three').slideDown();
        $('.calculator-form__row_dimensions_four').slideUp();
      } else if(quantityGlass.value == 4){
        $('.calculator-form__row_dimensions').slideDown();
      };
    }

    function calculator(){

        minMaxReset();
        var calculatorTotal;
        var calculatorSquare = (( parseInt(widthGlass.value) * parseInt(heightGlass.value) )/1000000);
        var calculatorSquareTwo = (( parseInt(widthGlassTwo.value) * parseInt(heightGlassTwo.value) )/1000000);
        var calculatorSquareThree = (( parseInt(widthGlassThree.value) * parseInt(heightGlassThree.value) )/1000000)
        var calculatorSquareFour = (( parseInt(widthGlassFour.value) * parseInt(heightGlassFour.value) )/1000000);

        if(quantityGlass.value == 1){
          calculatorSquareTwo = calculatorSquareThree = calculatorSquareFour = 0;
        } else if (quantityGlass.value == 2){
          calculatorSquareThree = calculatorSquareFour = 0;
        } else if(quantityGlass.value == 3){
          calculatorSquareFour = 0;
        };

        var calculatorTotal = ((calculatorSquare + calculatorSquareTwo + calculatorSquareThree + calculatorSquareFour) * (parseInt(typeGlass.value) + photoGlass) + (parseInt(rosetteGlass.value * 700)) + (parseInt(bracingGlass.value * 250))).toFixed(0);
                
      
       if(calculatorTotal === "NaN"){
          calculatorTotal = 0;
       }

      calculatorAmount.value = calculatorTotal + ' руб';
     
    };

    //Модальное окно
    var iSonScroll = false;

    if(!iSonScroll) {
     onScroll();
      iSonScroll = true;
    }

    function onScroll(e){
      var scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
        if(window.scrollY >= scrollHeight - innerHeight)
        $('#form').arcticmodal();
      };
    
});