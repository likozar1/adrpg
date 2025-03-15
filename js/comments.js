$(window).load(function() {
    $('.coment-image').find('img').each(function() {
        var imgClass = (this.width < this.height) ? 'wide' : 'tall';
        $(this).addClass(imgClass);
    })
  });

$(document).on('ready', function() {
    $(".single").slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true
    });
});