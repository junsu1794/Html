$(() => {
    $('.gnb>li').on('click', function () {
        /* this는 객체 자기 자신 
        cat.eat('츄르')
        */
        let tg = $(this);
        let subH = $('.sub>li').innerHeight();
        console.log(subH);
        /* 서브메뉴의 높이를 서브 메뉴의 길이(갯수)마다 다르게 설정 */
        let subLen = tg.find('li>a').length;
        let subTH =subH * subLen;
        /* 끄고 */
        $('.sub').removeClass('on').innerHeight(0);
        /* 킨다 */ 
        tg.find('.sub').addClass('on').innerHeight(subTH);
    });
});