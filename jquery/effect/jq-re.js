//변수초기화
const win = $(window);
const gnb = $('.gnb li');
const sections = $('.section');
const sideNav = $('.sideNav>li');
//리팩토링
//refactoring
function scrollToSection(index) {
	let section = sections.eq(index);
	let offset = section.offset().top;
	$('html,body').stop().animate({ scrollTop: offset }, 1000, 'easeOutCirc');
}
gnb.on({
	click: function (e) {
		e.preventDefault();
		let index = $(this).index();
    scrollToSection(index)
	},
});
sideNav.on({
	click: function (e) {
		e.preventDefault();
		let index = $(this).index();
    scrollToSection(index)
	},
});
win.on('scroll', function () {
	let sct = win.scrollTop();
	sections.each(function (i) {
		if (sct >= sections.eq(i).offset().top - 300) {
			//gnb.removeClass('on')
			gnb.eq(i).addClass('on').siblings().removeClass('on');
			sideNav.eq(i).addClass('on').siblings().removeClass('on');
			sections.eq(i).addClass('on').siblings().removeClass('on');
		}
	});
	//if (sct > 400) {
	//	$('nav').addClass('sticky');
	//}else{
	//  $('nav').removeClass('sticky');
	//}
	sct > 400 ? $('nav').addClass('sticky') : $('nav').removeClass('sticky');
});
