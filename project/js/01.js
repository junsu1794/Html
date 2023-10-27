$(function () {
    $('#wrap').fullpage({
        anchors: ['section1', 'section2', 'section3', 'section4'],
        sectionsColor: ['#ff0000', 'purple', 'yellow', 'pink'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        afterLoad: function (obj, idx) {
            //obj(origin)=selector
            //idx(destination=index
            //$('#menu').find('li') #menu li:nth-child
            let test = $('#menu').find('li').eq(3);
            // console.log(`idx:${idx} //  test :${test}`);
            let activeMenu;
            if (idx == 1) {
                activeMenu = $('#menu').find('li').first();
            } else {
                if(idx == 2){
                    $('#fp-nav').addClass('active');
                }
                if(idx == 3){
                    $('#fp-nav').addClass('active');
                }
                activeMenu= $('#menu').find('li').eq(idx - 1);
            }
            // 선택된 요소만 클래스 추가하고 형제요소는 클래스 삭제
            activeMenu.addClass('active').siblings().removeClass('active');

            // if (destination == 1) {
            //     $('#menu').find('li').removeClass('active');
            // 	activeMenu = $('#menu').find('li').first().addClass('active');
            // }
            // if (destination == 2) {
            //     $('#menu').find('li').removeClass('active');
            // 	activeMenu = $('#menu').find('li:nth-child(2)').addClass('active');
            // }
        },
    });
});
