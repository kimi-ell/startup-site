$(document).ready(function(){
    $('.workers-block').slick({
        arrows: true,
        slidesToShow: 4,
        adaptiveHeight: true,
        adaptiveWidth: true,
        
    });
});


$(document).ready(function () {
    $('.clients-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000
    });
});

$(window).on("load", function () {
    $("a[rel='mPageScroll2id']").mPageScroll2id();
    
  });



window.onscroll = function() {scrollFunction()}
function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("up").style.opacity="1";
    }
    else {
        document.getElementById("up").style.opacity="0";
    }
}