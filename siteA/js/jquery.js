const depth1 = $('.depth1 ');
depth1.hover(
	function () {
		$('.depth2').css('display', 'block');
		$('header').addClass('on');
	},
	function () {
		$('.depth2').css('display', 'none');
		$('header').removeClass('on');
	}
);

/***
 * slide
 * ** */
// 할당하다 할당연산자
// 좌항에 우항의 값을 할당
const slides = $('.slide_wrap li');
let n = 0;
function slide() {
  slides.removeClass('on');
	slides.eq(n).addClass('on');
  n++;  /* 변수+1 */
  if(n>=slides.length){
    n=0
  }
}
setInterval(() => {
slide();
}, 2000);

slides.eq(n).addClass('on');

/**
 * tab
 */
const tabBtn=$('.board .buttons li');
const panels=$('.panels>div');
tabBtn.on('click',function(e){
e.preventDefault();
let tg=$(this).index();
/* hide 숨기기*/ 
panels.hide();
tabBtn.removeClass('on');
/* 보이기*/ 
panels.eq(tg).show();
tabBtn.eq(tg).addClass('on');
})