const win = $(window);
const sections = $('section');
const speed = Math.floor($(window).height() * 0.9);
let winSCT;
let topArr = [];

sections.each((i, section) => {
    setTimeout(() => {
        $(section).addClass(`bg${i + 1}`);
    }, i * 1000);
    const sectionTop = $(section).offset().top;
    topArr.push(sectionTop);
});

win.on('scroll', () => {
    winSCT = win.scrollTop();
    if (winSCT > topArr[0]) {
        sections.eq(0).find('.box').css('transform', 'translateX(0%)');
    }
    if (winSCT > topArr[1] - speed) {
        sections.eq(1).find('.bg3').stop().delay(0).animate({ top: '10%', opacity: 1 }, 500, 'swing');
        sections.eq(1).find('.bg4').stop().delay(200).animate({ top: '20%', opacity: 1 }, 800, 'swing');
        sections.eq(1).find('.bg5').stop().delay(400).animate({ top: '30%', opacity: 1 }, 1000, 'swing');
    }
    if (winSCT > topArr[2] - speed && winSCT < topArr[3]) {
        sections.eq(2).addClass('is-animated').siblings().removeClass('is-animated');
    }
    if (winSCT > topArr[3] - speed && winSCT < topArr[4]) {
        pipScroll();
        sections.eq(3).addClass('is-animated').siblings().removeClass('is-animated');
    }
    if (winSCT > topArr[4] - speed) {
        sections.eq(4).addClass('is-animated');
        pipScroll();
    }
    if (winSCT > topArr[5] - speed) {
        if(!sections.eq(5).hasClass('is-animated')){
            circlechart();
            sections.eq(5).addClass('is-animated');
        }
    }
    if (winSCT > topArr[6] - speed) {
        if(!sections.eq(6).hasClass('is-animated')){
            barchart();
            sections.eq(6).addClass('is-animated');
        }
        
    }
});

// 마스크 높이 , .screen의 높이, 마스크높이 -screen 높이

function pipScroll() {
    // .mockup 이 추가되면 devices에 할당
    const devices = ['.mockup.pc', '.mockup.mobile'];
    $.each(devices, function (i, el) {
        let device = $(el);
        let screen = device.find('.mask>img');
        let mask = device.find('.mask');
        let heightDifference = screen.innerHeight() - mask.innerHeight();
        device.data('heightDifference', heightDifference)
        device.on({
            mouseenter: function () {
                screen.stop().animate({ top: -heightDifference }, 1000)
            },
            mouseleave: function () {
                screen.stop().animate({ top: 0 }, 1000)
            }
        })
    });
}
win.on('resize', function () {
    pipScroll();
});


function circlechart() {
    let path = Math.floor(document.querySelector('circle').getTotalLength());
    const chart = $('.chart');
    chart.each(function () {
        const item = $(this);
        const title = item.find('h2');
        const tgNum = title.attr('data-num');
        const circle = item.find('circle');
        $({ rate: 0 })
            .stop()
            .animate(
                { rate: tgNum },
                {
                    duration: 1500,
                    progress: function () {
                        let now = this.rate;
                        let amount = path - (path * now / 100);
                        title.text(Math.floor(now));
                        circle.css({ strokeDashoffset: amount });
                    },

                });
    });
}


// barSVG
barChart();
function barChart() {
    let path = Math.floor(document.querySelector('line').getTotalLength());
    const bar = $('.bar');
    bar.each(function () {
        const item = $(this);
        const title = item.find('h2');
        const tgNum = title.attr('data-num');
        const line = item.find('line');
        $({ rate: 0 })
            .stop()
            .animate(
                { rate: tgNum },
                {
                    duration: 1500,
                    progress: function () {
                        let now = this.rate;
                        let amount = path - (path * now / 100);
                        title.text(Math.floor(now));
                        line.css({ strokeDashoffset: amount });
                    },
                }
            );
    });
}