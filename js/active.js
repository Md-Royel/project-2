$(document).ready(function(){
    
    
 $(window).on('scroll',function() {    
   var scroll = $(window).scrollTop();
   if (scroll < 1) {
    $(".sticky").removeClass("scroll-header");
   }else{
    $(".sticky").addClass("scroll-header");
   }
  });
    
    // Menu Nav
function smoothSctollTop() {
	$('.main-menu ul li > a,.mean-nav ul li > a').on('click', function (event) {
		var target = $(this.getAttribute('href'));
		if (target.length) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top - 100
			}, 1000);
		}
	});
}
smoothSctollTop();

// menu active class
$('.main-menu ul li:first-child > a').addClass('active');

//for menu active class
$('.main-menu ul li > a').on('click',function () {
	$('.basic-menu li a').removeClass("active");
	$(this).addClass("active");
});
    
$('.slider-active').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed:1000,
    autoplayHoverPause:true,
    navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.testimonial-active').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed:1000,
    autoplayHoverPause:true,
    dots:true,
    navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
}) 
    $('.counter').counterUp({
    delay:10,
    time: 3000
});
    
    

})