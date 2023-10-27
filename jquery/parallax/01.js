const win = $(window);
const speed = win.height() * 0.9;
const sections = $('section');
win.on('scroll', function () {
    let winSCT = win.scrollTop() + speed;
    sections.each(function (i, o) {
        const tg = $(this);
        tg.addClass(`bg${i + 1}`);
        const tgtop = tg.offset().top;
        // console.log(tg.offset().top);
        if (winSCT > tgtop) {
            tg.find('.box').css('transform', 'translateX(0%)');
        };
    });
});