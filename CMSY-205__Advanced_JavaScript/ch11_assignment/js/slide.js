$(document).ready(() => {
    $("#slider").bxSlider({
        displaySlideQty: 1,
        moveSlideQty: 1,
        randomStart: true,
        default: false,
        captions: true,
        captionsSelector: "#caption",
        pager: true,
        pageSelector: "#pager",
        pagerType: 'short'
    });
});