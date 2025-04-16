$(window).on('scroll',function(){
    $(".title").css('bottom',$(window).scrollTop()*-0.1);

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
})


document.getElementById('language-toggle').addEventListener('click', function () {
    let currentUrl = window.location.href;
    let path = window.location.pathname;

    // Handle the root route ("/" or no extension)
    if (path === '/' || !path.includes('.html')) {
        // Assume default is original language, so redirect to English version
        window.location.href = currentUrl.replace(/\/$/, '') + '/index-en.html';
        return;
    }

    // Toggle language based on current URL
    if (currentUrl.includes('-en.html')) {
        // Switch back to the original language
        currentUrl = currentUrl.replace('-en.html', '.html');
    } else {
        // Switch to English version
        currentUrl = currentUrl.replace('.html', '-en.html');
    }

    window.location.href = currentUrl;
});
