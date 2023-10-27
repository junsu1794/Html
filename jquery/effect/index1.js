let winH = $(window).height();
const sections = $('section');

$(window).on('scroll', function () {
	let winSct = $(this).scrollTop() + winH * 0.9;
	sectionAni(winSct);
});
function sectionAni(n) {
	//sections 의 offset().top
	sections.each(function (i) {
		//console.log(sections.eq(i).offset().top);
		//console.log($(this).offset().top);
		let sct = $(this).offset().top;
		const delay = $(this).data('delay');
		console.log(delay);
		if (n > sct) {
			if (delay === undefined) {
				if($(this).find('.parallax')){
					parallaxAni();
				}
			} else {
				setTimeout(() => {
					$(this).addClass('sectionIn');
				}, delay);
			}
		}
	});
}
function parallaxAni(){
	$('.parallax>.pbox').each(function(){
		const delay=$(this).data('delay');
		setTimeout(()=>{
			$(this).addClass('sectionIn');
		}, delay);
	});
}
