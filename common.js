$(function () {

    //頁面fadein
    var loadingImg = $(".loading-img");
    loadingImg.fadeOut(400, contFadeIn);
    function contFadeIn() {
        $("#contents-wrap").addClass('fade-in');
    }


    // 打開MENU BAR
    var menuFlag = false;
    $(".menu-trigger").click(function () {
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(".slide-nav").addClass("open");
        } else {
            $(".slide-nav").removeClass("open");
        }
        return false;
    })

    //按選單後，選單關掉
    $(".slide-nav a").click(function () {
        $(".menu-trigger").toggleClass("active");
        if ($(this).hasClass("active")) {
            $(".slide-nav").addClass("open");
        } else {
            $(".slide-nav").removeClass("open");
        }
        return false;
    })

    //滑動
    $('a[href^=#]').click(function () {
        var speed = 1000;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });


});