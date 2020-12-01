$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

$(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > 10);
    
    var $item = $(".nav-link");
    $item.toggleClass('scrolled', $(this).scrollTop() > 10);
});

$(document).ready(function(){

    // onclick scrolling for global nav
    $("#nav-logo").click(function() {
        $('html,body').animate({
            scrollTop: $("html").offset().top
        }, 'slow')
    });

    $("#explore-navlink").click(function() {
        $('html,body').animate({
            scrollTop: $("#explore").offset().top - $(".navbar").height() - 16
        }, 'slow');
    });

    $("#eatdrink-navlink").click(function() {
        $('html,body').animate({
            scrollTop: $("#eatdrink").offset().top - $(".navbar").height() - 16
        }, 'slow');
    });

    $("#play-navlink").click(function() {
        $('html,body').animate({
            scrollTop: $("#play").offset().top - $(".navbar").height() - 16
        }, 'slow');
    });

    $("#stay-navlink").click(function() {
        $('html,body').animate({
            scrollTop: $("#stay").offset().top - $(".navbar").height() - 16
        }, 'slow');
    });
    
    // onclick scrolling for footer nav
    $(".explore-navlink").click(function() {
        $('html,body').animate({
            scrollTop: $("#explore").offset().top - $(".navbar").height() - 16
        }, 'slow');
    });

    $(".eatdrink-navlink").click(function() {
        $('html,body').animate({
            scrollTop: $("#eatdrink").offset().top - $(".navbar").height() - 16
        }, 'slow');
    });

    $(".play-navlink").click(function() {
        $('html,body').animate({
            scrollTop: $("#play").offset().top - $(".navbar").height() - 16
        }, 'slow');
    });

    $(".stay-navlink").click(function() {
        $('html,body').animate({
            scrollTop: $("#stay").offset().top - $(".navbar").height() - 16
        }, 'slow');
    });
});
