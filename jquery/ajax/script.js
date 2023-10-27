const pics = $(".pic");
const lightbox = $("#lightbox");
const lightImg = $("#lightImage");

pics.on('click', function () {
    const bigLocation = $(this).attr("data-src");
    lightImg.load(bigLocation);
    lightbox.css('display','block');
    $('html').addClass('all_scrollFixed');
});

lightbox.on('click',function(){
    lightbox.css('display','none');
    $('html').removeClass('all_scrollFixed');
});