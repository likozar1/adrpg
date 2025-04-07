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


document.getElementById('language-toggle').addEventListener('click', function() {
    // Get the current URL
    let currentUrl = window.location.href;

    // Check if the URL already has '-en' (to toggle back to the original language)
    if (currentUrl.includes('-en.html')) {
        // Remove '-en' from the URL and reroute to the original HTML file
        currentUrl = currentUrl.replace('-en.html', '.html');
    } else {
        // Append '-en' to the filename to switch to English version
        currentUrl = currentUrl.replace('.html', '-en.html');
    }

    // Redirect to the new URL
    window.location.href = currentUrl;
});
