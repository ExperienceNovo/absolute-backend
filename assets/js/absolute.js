$(document).ready(function() {
    /* intro images */
    var slider = new IdealImageSlider.Slider({
        selector: '#slider',
        height: 500, // Required but can be set by CSS
        interval: 7000,
        transitionDuration: 500,
        effect: 'fade',
        keyboardNav: 'true',
    });
    slider.addCaptions();
    slider.start();
});