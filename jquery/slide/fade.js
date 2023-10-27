$(() => {
	//$('#crossfade li').hide();
	//$('#crossfade li').filter(':first').show();

	//method chaining
	$('#crossfade li').hide().filter(':first').show();

	//지정시간에 함수제어
	// 일정시간이후
	// 일정시간마다
	setInterval(slideshow, 500);

	function slideshow() {
		$('#crossfade li:first-child').fadeOut('slow');
		$('#crossfade li:first-child').next().fadeIn('slow');
		$('#crossfade li:first-child').appendTo('#crossfade');
	}

	//페이저 추가
	let newText;
	$('#crossfade li').each(function (idx) {
		let oldText = $(this).find('p').text();
		newText = oldText + (idx + 1);
		console.log(newText);
		$(this).find('p').text(newText);
	});
}); //jQuery
