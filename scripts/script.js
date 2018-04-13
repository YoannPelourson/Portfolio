$(function() {
    let header = $(".menu-buttons");
    let txtHeader = $(".txt");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if(document.querySelector('main').getBoundingClientRect().top <= 150) {
            header.removeClass('menu-buttons').addClass("menu-buttons-alt");
            txtHeader.removeClass('txt').addClass("txt-alt");
        } else {
            header.removeClass('menu-buttons-alt').addClass("menu-buttons");
            txtHeader.removeClass('txt-alt').addClass("txt");

        }


    });
});

/*$(document).ready(function(){
    $(window).bind('scroll', function() {
    let navHeight = $( window ).height() - 70;
          if ($(window).scrollTop() > navHeight) {
              $('nav').removeClass('menu-buttons').addClass('menu-buttons-alt');
          }
          else {
              $('nav').removeClass('menu-buttons-alt').addClass('menu-buttons');
          }
     });
 });*/