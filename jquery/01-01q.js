// $(function(){})
// $(()=>{})
$(() => {
    $('p').css('color', 'green');
    $('.blue').css('color', 'blue');



    let list1 = $('#list1 li');
    //list1.each(()=>{});
    list1.each(function (idx, el) {
        let oriText = $(el).text();
        const newText = oriText + idx + 'text()로 추가';
        $(el).text(newText);
        $(el).addClass(`a${idx}`);
        $(el).css('margin-left', `${idx}px`)
    });

    let list2 = $('.theObj');
    /* html ()취득 html('값') 바꿔 */
    /* attr ('속성')취득 attr ('속성','값') 바꿔 */
    list2.html(`<span>🍕${Math.random()}</span>`);

    list2.attr('date-set', 'accessbillity');

    $('#list2').attr('class', list2.attr('class'));

    const list3 = $("#list3");
    const li = `<li>추가한애</li>`;
    list3.children().eq(2).after(`🍔${li}`)
    list3.prepend(`첫째${li}`);
    list3.append(`막내${li}`);
    
    const list3Lis = $('#list3 li');
    list3Lis.eq(4).before(`니앞에${li}`);
    list3Lis.eq(4).after(`니앞에${li}`);

})

