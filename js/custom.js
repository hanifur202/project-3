$(function () {
    //slik slilder
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });
    //venubox-vedio player
    $('.venobox').venobox();
    //slik slilder
    $('.feedback-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });
    
    //wow js
    new WOW().init();
    
//back-top
$('.back-top ').click(function(){
    $ ('html,body').animate ({scrollTop:0},1000);
})   
    
    
    
    
//menu-scrollinf
    $(window).scroll(function(){
        var scrooling = $(this).scrollTop();
        if(scrooling > 500){
            $('.navbar').addClass ('bg');
        }
        else{
             $('.navbar').removeClass('bg');
        }
        if(scrooling > 200){
            $ ('.back-top ').fadeIn(500);
        }
        else {
            $('.back-top ').fadeOut(500);
        }
    });
    
    
    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 78
                }, 1500);
                return false;
            }
        }
    });
    
//preloader
$ (window).one ('load', function(){
    $('.preloader').delay(500).fadeOut(500);
});
    
});
