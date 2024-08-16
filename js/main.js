
$('nav > ul > li > .menu').click(function () {
    $('.sub').show();
});
$('nav > ul > li > .menu').mouseenter(function () {
    $('.sub').stop().hide();
});



$(document).ready(function () {
    function prev() {
        $('.slidelist li:last').prependTo('.slidelist');
        $('.slidelist').css('margin-left', -1600);
        $('.slidelist').stop().animate({ marginLeft: 0 }, 1000);
    }

    function next() {
        $('.slidelist').stop().animate({ marginLeft: -1600 }, function () {
            $('.slidelist li:first').appendTo('.slidelist');
            $('.slidelist').css({ marginLeft: 0 });
        });
    }

    function slide() {
        $('.slidelist').stop().animate({ marginLeft: -1600 }, function () {
            $('.slidelist li:first').appendTo('.slidelist');
            $('.slidelist').css({ marginLeft: 0 });
        });
    }
    setInterval(slide, 3000);

    $('.prev').click(function () {
        prev();
    });

    $('.next').click(function () {
        next();
    });
});
