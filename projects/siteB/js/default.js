/* $('.menu_toggle_btn')가 클릭되면 할일*/ 
/*function 실행문 
() = 호출하는 자리
{} = 실행하는 자리
show
slideToggle
*/ 
$('.menu_toggle_btn').click(function(){
$('.gnb').stop().slideToggle(/*인자*/'slow');
});
