var spWindow = 559;
var tbWindow = 959;

$(function () {

    var mainVisual = $(".mainvisual");
    var subVisual = $(".subvisual");
    var mainCopy = $(".maincopy");


    var windowWidth = document.documentElement.clientWidth;
    if (windowWidth <= spWindow) {
        //559px以下
        setTimeout(function () {
            mainVisual.addClass('fade-in');
        }, 400);
        setTimeout(function () {
            mainCopy.addClass('fade-in');
        }, 800);
        setTimeout(function () {
            subVisual.addClass('fade-in');
        }, 650);

        $(window).scroll(function () {
            $('.fadein').each(function () {
                var elemPos = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();
                if (scroll > elemPos - windowHeight + 120) {
                    $(this).addClass('scrollin');
                }
            });
        });

    } else if (windowWidth > spWindow && windowWidth <= tbWindow) {
        //959px以下
        setTimeout(function () {
            mainVisual.addClass('fade-in');
        }, 400);
        setTimeout(function () {
            mainCopy.addClass('fade-in');
        }, 800);
        setTimeout(function () {
            subVisual.addClass('fade-in');
        }, 750);

        $(window).scroll(function () {
            $('.fadein').each(function () {
                var elemPos = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();
                if (scroll > elemPos - windowHeight + 250) {
                    $(this).addClass('scrollin');
                }
            });
        });

    } else {
        //960px以上
        setTimeout(function () {
            mainVisual.addClass('fade-in');
        }, 400);
        setTimeout(function () {
            mainCopy.addClass('fade-in');
        }, 900);
        setTimeout(function () {
            subVisual.addClass('fade-in');
        }, 750);

        $(window).scroll(function () {
            $('.fadein').each(function () {
                var elemPos = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();
                if (scroll > elemPos - windowHeight + 350) {
                    $(this).addClass('scrollin');
                }
            });
        });

    }

});





