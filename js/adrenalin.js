// Begin jQuery

function parallax() {
    var s = document.getElementById("floater");
    var yPos = 0 - window.pageYOffset/4;  
    s.style.top = 0 + yPos + "%";
}

$(window).on('scroll',function(){
    $("#floater2").css('bottom',$(window).scrollTop()*-0.4);
    $(".title").css('bottom',$(window).scrollTop()*-0.1);
    console.log(window.pageYOffset);
    if (window.pageYOffset >= 800) {
        $(".panelCon").css('display',"none");
    } else {
        $(".panelCon").css('display',"block");
    }
});


$(document).ready(function() {
    var $window = $(window);
    var navi = $('.navbar');

    setInterval(function() {
        if ($window.scrollTop() > 0 ) {
            navi.addClass("nav-transparent-invert");
            navi.addClass("navbar-light");
            navi.removeClass("nav-transparent");
            navi.removeClass("navbar-dark");
        } else {
            navi.removeClass("nav-transparent-invert");
            navi.removeClass("navbar-light");
            navi.addClass("nav-transparent");
            navi.addClass("navbar-dark");
        } 
    }, 250);

    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $("button.navbar-toggler").click();
        }
    });

    window.addEventListener("scroll", function(){
        parallax(); 
    });

})

