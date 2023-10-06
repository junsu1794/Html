$(() => {
    //페이지 로드 및 리로드
    // video, videoBox, window
    const win = $(window);
    let winH = win.innerHeight();
    let winW = win.innerWidth();
    console.log(winH, winW);
    const vid = $("#mainVideo")
    let vidH = vid.innerHeight();
    let vidW = vid.innerWidth();
    const vidWrap = vid.parent('.main-video');
    videoResizeFn();
    $(window).resize(function () {
        console.log("🍕");
        videoResizeFn();
    });
    /* 가변 미디어 함수 */
    function videoResizeFn() {
        winH = win.innerHeight();
        winW = win.innerWidth();
        vidH = vid.innerHeight();
        vidW = vid.innerWidth();
        console.log('윈도우' + winH, winW);
        console.log('비디오' + vidH, vidW);
        vidWrap.css({ width: '100%', height: winH });
        /* 창크기 미디어크기 맞추기 */
        if (winH > vidH) {
            vid.css({ width: 'auto', height: winH });
            /* video 정렬 */
            vid.css({ left: '50%', top: '50%', transform: 'translate(-50%,-50%)' });
        }
        if (winW > vidW) {
            vid.css({ width: winW, height: 'auto' });
            /* video 정렬 */
            vid.css({ left: '50%', top: '50%', transform: 'translate(-50%,-50%)' });
        }
    }
});