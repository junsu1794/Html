const depth1 = $('.depth1');

depth1.hover(
    function(){
        $('.depth2').css('display','block');
        $('header').addClass('on');
    },
    function(){
        $('.depth2').css('display','none');
        $('header').removeClass('on');
    }
);

/***
 * 
 * slide
 * ** */
// = <- 할당하다 할당연산자
// 좌항에 우항의 값을 할당
const slides = $('.slide_wrap li');
let n=0;
function slide(){
    slides.removeClass('on')
    slides.eq(n).addClass('on');
    n++; /* 변수+1 */
    if(n>=slides.length){
        n=0
    }
}
setInterval(() => {
slide();
}, 500);


