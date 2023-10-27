$('.box1').animate({ left: '500px', width: 200, height: '200px' }, 3000, 'easeOutBounce').animate({ left: '0px', width: 50, height: '50px' }, 3000, 'easeOutBounce');
$('.box2').animate({ bottom: '500px', width: 200, height: '200px' }, 3000, 'easeOutBounce');
$('.box2').delay(10000).animate({top:'-100px'},500,'easeOutCubic');