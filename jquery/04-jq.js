// $('#btn1').on('click',function(){
//     $('#btn1').hide('slow')
// });
// $('#btn1').on('click',function(){
//     $('#btn1').show('show')
// });
// return false; //
$('#btn1').on('click', function (e) {
    console.log(e);
    e.preventDefault();
    $('.box1').hide('slow', function () {
        console.log("Animation complete.")
    });
});
//.show()
$('#btn2').on('click', function(){
    $('.box1').show('slow');
});

$('#btn2').hide();

// toggle
$('#btn3').on('click',function(){
    $('.box2').stop().toggle(500);
});

// slideDown/ up
$('#btn4').on('click', function(){
    $(this).parent().next().slideUp('slow', function(){ 
    });
});
$('#btn5').on('click', function(){
    $(this).parent().next().slideDown(1000)
});

$('#btn6').on('click', function(){
    $(this).parent().next().slideToggle(1000);
});


// fadeIn / fadOut
$('#btn7').on('click', function(){
    $(this).parent('p').next().fadeOut(1000);
});
$('#btn8').on('click', function(){
    $(this).parent('p').next().fadeIn('slow');
});
$('#btn9').on('click', function(){
    $(this).parent('p').next().fadeToggle(1000);
});

//fadeTo
$('#btn10').on('click', function(){
    $(this).parent('p').next().fadeTo('slow', 0.3);
});

$('#btn11').on('click', function(){
    $(this).parent('p').next('#box3').fadeTo('slow',1);
});

