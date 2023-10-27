let check = false;
$('.box').on('click', function () {
    const tg = $(this);
    // 제이쿼리객체.data();
    console.log(tg.data('click') === 'undefined');
    // if (tg.data('click') === 'even') {//짝수번째 클릭
    if(check === false){
        tg.data('click', 'odd') // 홀수번째 클릭
        tg.animate({ width: 100, height: 100, opacity: 1 }, 1000, 'easeInOutSine');
        check = true;
    } else {
        // tg.data('click', 'even')//even === true
        tg.animate({ width: 200, height: 200, opacity: 0.5 }, 1000, 'easeInBounce');
        check = false;
    };
});
$('.box').data('text','abc');
console.log($('.box').data('text'));
$('.box2').data('text');
console.log($('.box2').data('text'));
