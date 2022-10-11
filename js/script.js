$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'ease',
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggeble: true,
        swipe: true,
        touchThreshold: 10,
        touchMove: true,
        waitForAnimate: false, // полезная штука, когда сам выбирыешь, как быстро переключешь слайды.
        //centerMode: true, 
        //variableWidth: true,
        rows: 1,
        slidesPerRow: 1,
        // vertical: true,
        //verticalSwiping: true,
        asNavFor: ".sliderbig",
    });
});
