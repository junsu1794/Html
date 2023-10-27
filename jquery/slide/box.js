//true
$('.click').on('click', function () {
    alert('dd');
});

const transform = $('.box').clone().addClass('transform');
console.log(transform);

$('.box').addClass('margin');
//margin
const mg = $('.margin');
$('.box li').css('position', 'absolute');
mg.children("li").eq(2).animate({ width: '200px', height: '200px' }, 500);

$('body').append(transform);

$('.transform').css('position', 'relative').css('top', '500px');


// $('.transform').children('li').eq(2).css({transition:'transform 0.5s', transform:'scale(2)'});
