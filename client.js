$(function() {
    initialize();
    $('.gridImage').mouseenter(function() {
        $('#overlay-' + $(this).attr('id')).css({
            'top': $(this).position().top,
            'left': $(this).position().left,
            'width': $(this).width(),
            'height': $(this).height()
        }).fadeIn(150);
        $('#overlay-' + $(this).attr('id')).mouseleave(function() {
            $(this).fadeOut(150);
        });
    });
    $(window).resize(function() {
        $('.gridImage').each(resize);
    });
});

function initialize() {
    $('.gridImage').each(resize);
}

function resize() {
    var windowWidth = $(window).width();
    var maxImageWidth = 400;
    var unroundedImageWidth = windowWidth / Math.floor(windowWidth / maxImageWidth);
    var roundedImageWidth = Math.ceil(unroundedImageWidth);
    var itemCount = windowWidth / unroundedImageWidth;
    var size = unroundedImageWidth;
    $('#grid').css('width', windowWidth * roundedImageWidth / unroundedImageWidth);
    $(this).css('width', size);
    $(this).css('height', size);
}