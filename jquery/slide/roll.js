$(() => {
    let banner = $('.banner');
    const total = banner.children('li').length;
    let num = 0;
    const liW = banner.children('li').width();
    const copyObj=banner.children('li').clone(true).addClass('copy');
    banner.append(copyObj);

    $('.next').on('click', function () {
        if (num == total) {
            num = 0;
            banner.css('margin-left', 0);
        }
        num++;
        banner.stop().animate({ marginLeft: -liW * num }, 500);
        return false;
    });

    $('.prev').on('click', function () {
        if (num == 0) {
            num = total;
            banner.css('margin-left', -liW * num);
        }
        num--;
        banner.stop().animate({ marginLeft: -liW * num }, 500);
        return false;
    });
});