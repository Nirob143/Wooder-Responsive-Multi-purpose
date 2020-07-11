	 
    // Carousel Slier
    $(".carousel-active").owlCarousel({
        items:1,
        margin:0,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
    }); 

    $(".carousel-service").owlCarousel({
        items:3,
        margin:0,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
    });

    $(".carousel-client").owlCarousel({
        items:4,
        margin:0,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
    });

	 // counterUp  
    $('.counter').counterUp({
        delay : 10,
        time: 3000,
    });
    $('.counter2').counterUp({
        delay : 10,
        time: 10000,
    });
     // wow
    new WOW().init();
    //one pagenave js
 $('#nav').onePageNav({
    filter: ':not(.external)'
});

 // init Isotope
    var $grid = $('.portfolio-iteams').isotope({
    // options
});
// filter items on button click
    $('.portfolio-menu').on( 'click', 'li', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
  
  // filter items on button active
    $('.portfolio-menu').on( 'click', 'li', function() {
          $(this).activeclass('active').siblings.removeClass('active');
    });

$(function(){
        $('#menu').slicknav();
    });

jQuery(window).load(function () {

        /* Sticky Header */
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 20) {
                $('.header-fixed').addClass("sticky");
            } else {
                $('.header-fixed').removeClass("sticky");
            }
        });
        
        /* Preloader */
        $(".preloader").fadeOut()
    });