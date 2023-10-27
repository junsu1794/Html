const win = $(window);
const sections = $('section');
let speed = Math.floor(win.height() * 0.5);
const topArr = [];
let winSCT;

//sections.offsetTop
sections.each(function (i, o) {
    const sectionTop = $(o).offset().top;
    topArr.push(sectionTop)
});
win.on('scroll', () => {
    winSCT = win.scrollTop();
    if (winSCT > topArr[0] && winSCT < topArr[1]) {
        sections.eq(0).addClass('is-animated').siblings().removeClass('is-animated');
    }
    if (winSCT > topArr[1] - speed && winSCT < topArr[2]) {
        sections.eq(1).addClass('is-animated').siblings().removeClass('is-animated');
    }
    if (winSCT > topArr[2] - speed  && winSCT < topArr[3]) {
        sections.eq(2).addClass('is-animated').siblings().removeClass('is-animated');
    }
    if (winSCT > topArr[3] - speed ) {
        sections.eq(3).addClass('is-animated').siblings().removeClass('is-animated');
    }
});